import { DeepPartial, Connection } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Inject } from '@nestjs/common';

import { User } from 'src/apps/user/user.entity';
import { UserDto } from 'src/apps/user/user.dto';
import { UserService } from 'src/apps/user/user.service';
import { TENANT_CONNECTION } from 'src/tenant/tenant.module';
import { TenantService } from 'src/tenant/tenant-service.decorator';

@TenantService()
export class AuthService {
  private userRepository: any;

  constructor(
    @Inject(TENANT_CONNECTION) private readonly connection: Connection,
    private userService: UserService,
    private jwtService: JwtService
  ) {
    this.userRepository = this.connection.getRepository(User);
  }

  async validateUser(email: string, password: string): Promise<UserDto> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) return user;
    return null;
  }

  async signIn(user: DeepPartial<User>): Promise<UserDto> {
    const userResult = await this.validateUser(user.email, user.password);

    if (!userResult) throw new HttpException('Usuário não encontrado.', 404);

    const payload = {
      sub: userResult.id,
      name: userResult.name,
      email: userResult.email,
      perfil: userResult.perfil,
      avatar: userResult.avatar,
    }

    return {
      ...userResult,
      acessToken: this.jwtService.sign(payload),
    }
  }

  async signUp(user: DeepPartial<User>): Promise<UserDto> {
    const userResult = await this.userRepository.save(user);
    const payload = {
      sub: userResult.id,
      name: userResult.name,
      email: userResult.email,
      perfil: userResult.perfil,
      avatar: userResult.avatar,
    }

    return {
      ...userResult,
      acessToken: this.jwtService.sign(payload),
    }
  }
}
