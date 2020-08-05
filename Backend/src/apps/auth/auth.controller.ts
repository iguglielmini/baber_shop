import { DeepPartial } from 'typeorm';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';

import { User } from 'src/apps/user/user.entity';
import { AuthDto } from 'src/apps/auth/auth.dto';
import { AuthService } from 'src/apps/auth/auth.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signIn')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Busca um USUÁRIO e faz o Login' })
  @ApiBody({ type: AuthDto })
  async signIn(@Body() body: DeepPartial<User>) {
    return this.authService.signIn(body);
  }

  @Post('signUp')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: [User] })
  @ApiOperation({ summary: 'Registra um USUÁRIO' })
  async signUp(@Body() body: DeepPartial<User>) {
    return this.authService.signUp(body);
  }
}
