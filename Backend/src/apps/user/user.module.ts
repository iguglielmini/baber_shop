import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

import { UserService } from 'src/apps/user/user.service';
import { UserController } from 'src/apps/user/user.controller';
import { TenantModule } from 'src/tenant/tenant.module';

@Module({
  imports: [
    TenantModule,
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
