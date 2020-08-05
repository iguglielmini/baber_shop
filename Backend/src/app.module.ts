import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/apps/auth/auth.module';
import { UserModule } from 'src/apps/user/user.module';
import { TenantModule } from 'src/tenant/tenant.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TenantModule,
    AuthModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
