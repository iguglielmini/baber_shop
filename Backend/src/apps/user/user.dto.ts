import { ApiProperty } from '@nestjs/swagger';
import { perfilEnum } from 'src/utils/enums';

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  perfil: perfilEnum;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  acessToken?: string;
}
