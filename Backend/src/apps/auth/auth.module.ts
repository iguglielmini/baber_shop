import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { jwtConstants } from 'src/utils/constants';
import { TenantModule } from 'src/tenant/tenant.module';
import { AuthService } from 'src/apps/auth/auth.service';
import { JwtStrategy } from 'src/apps/auth/jwt.strategy';
import { UserService } from 'src/apps/user/user.service';
import { AuthController } from 'src/apps/auth/auth.controller';

@Module({
  imports: [
    TenantModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6h' },
    }),
  ],
  providers: [AuthService, UserService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
