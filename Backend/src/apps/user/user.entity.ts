import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  IsEnum,
} from 'class-validator';
import { Entity, Column } from 'typeorm';

import { perfilEnum } from 'src/utils/enums';
import { EntityBase } from 'src/utils/entity-base';

@Entity()
export class User extends EntityBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  @Column()
  password: string;

  @IsEnum(perfilEnum)
  @ApiPropertyOptional({ enum: perfilEnum })
  @Column('enum', {
    enum: perfilEnum,
    default: perfilEnum.CLIENT,
  })
  perfil: perfilEnum;

  @ApiProperty()
  @IsString()
  @Column({ nullable: true })
  deleteAvatarHash: string;

  @ApiProperty()
  @IsString()
  @Column({ nullable: true })
  avatar: string;
}
