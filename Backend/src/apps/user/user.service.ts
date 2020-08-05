import * as fs from 'fs';
import { Connection, DeepPartial } from 'typeorm';
import { UploadedFile, Inject } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

import apiImgur from 'src/utils/apiImgur';
import toBase64 from 'src/utils/toBase64';
import { User } from 'src/apps/user/user.entity';
import { UserDto } from 'src/apps/user/user.dto';
import { TENANT_CONNECTION } from 'src/tenant/tenant.module';
import { TenantService } from 'src/tenant/tenant-service.decorator';

@TenantService()
export class UserService {
  private repository: any;
  
  constructor(@Inject(TENANT_CONNECTION) private readonly connection: Connection) {
    this.repository = this.connection.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findAllByProfile(profile: string): Promise<User[]> {
    return this.repository.find({ where: { perfil: profile } });
  }

  async findByEmail(email: string): Promise<UserDto> {
    const resultUser = await this.repository.findOne({ where: { email } });

    if (!resultUser) throw new HttpException('Usuário não encontrado.', 404);

    return resultUser;
  }

  async updateAvatar(@UploadedFile() file, id: string, deleteAvatarHash: string): Promise<UserDto> {
    const base64 = toBase64(file.path);

    await apiImgur.delete(`3/image/${deleteAvatarHash}`);
    await apiImgur.post('3/image', {
      type: 'base64',
      image: base64,
    })
      .then(async ({ data: { data } }) => {
        await this.repository.save({
          user: id,
          avatar: data.link,
          deleteAvatarHash: data.deletehash,
        });
      });

    fs.unlinkSync(file.path);
    const resultUser = await this.repository.findOne({ where: { id } });

    return resultUser;
  }

  async findById(id: string): Promise<User> {
    return this.repository.findOne(id);
  }

  async update(data: DeepPartial<User>): Promise<User> {
    return this.repository.save(data);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}
