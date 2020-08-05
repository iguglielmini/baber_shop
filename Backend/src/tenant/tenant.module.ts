import { REQUEST } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, createConnection, getConnection } from 'typeorm';
import { BadRequestException, MiddlewareConsumer, Module, Scope } from '@nestjs/common';

import { Tenant } from 'src/tenant/tenant.entity';

export const TENANT_CONNECTION = 'TENANT_CONNECTION';

@Module({
    imports: [
        TypeOrmModule.forFeature([Tenant]),
    ],
    providers: [
        {
            provide: TENANT_CONNECTION,
            inject: [
                REQUEST,
                Connection,
            ],
            scope: Scope.REQUEST,
            useFactory: async (request, connection) => {
                const { host } = request.headers;
                const repository = connection.getRepository(Tenant);
                const tenant: Tenant = await repository.findOne({ where: { host } });
                return getConnection(tenant.name);
            }
        }
    ],
    exports: [
        TENANT_CONNECTION
    ]
})
export class TenantModule {
    constructor(private readonly connection: Connection) { }

    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(async (req: any, _res: any, next: Function) => {
            const { host } = req.headers;
            const repository = this.connection.getRepository(Tenant);
            const tenant: Tenant = await repository.findOne({ where: { host } });

            if (!tenant) throw new BadRequestException(
                'Database Connection Error',
                'There is a Error with the Database!',
            );

            try {
                getConnection(tenant.name);
                next();
            } catch (error) {
                const createdConnection: Connection = await createConnection({
                    type: "postgres",
                    name: tenant.name,
                    synchronize: true,
                    schema: tenant.name,
                    host: process.env.DATABASE_URL,
                    password: process.env.DATABASE_PASS,
                    username: process.env.DATABASE_USER,
                    database: process.env.DATABASE_NAME,
                    entities: ["dist/apps/**/*.entity{.ts,.js}"],
                    port: Number(process.env.DATABASE_PORT) || 5432,
                });

                if (!createdConnection) throw new BadRequestException(
                    'Database Connection Error',
                    'There is a Error with the Database!',
                );

                next();
            }
        }).forRoutes('*');
    }
}