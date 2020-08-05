import {
  Controller,
  UseGuards,
  Get,
  Param,
  Put,
  UseInterceptors,
  UploadedFile,
  HttpCode,
  Delete,
  HttpStatus,
  Patch,
  Body,
} from '@nestjs/common';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import randomName from 'src/utils/randomName';
import { User } from 'src/apps/user/user.entity';
import { UserDto } from 'src/apps/user/user.dto';
import { UserService } from 'src/apps/user/user.service';
import { JwtAuthGuard } from 'src/apps/auth/jwt-auth.guard';
import { DeepPartial } from 'typeorm';

@ApiTags('Users')
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(public service: UserService) { }

  @Get()
  @ApiOperation({ summary: `Obtem todos os ${User.name}` })
  findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findById(
    @Param('id') id: string,
  ): Promise<User> {
    return this.service.findById(id);
  }

  @Get(':profile')
  @ApiOperation({ summary: `Obtem ${User.name} pelo PERFIL` })
  findAllByProfile(@Param('profile') profile: string): Promise<User[]> {
    return this.service.findAllByProfile(profile);
  }

  @Put('avatar/:id')
  @ApiOperation({ summary: `Atualiza o avatar do ${User.name} pelo ID` })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  updateAvatar(
    @UploadedFile() file,
    @Param('id') id: string,
    @Param('deleteAvatarHash') deleteAvatarHash: string,
  ): Promise<UserDto> {
    return this.service.updateAvatar(file, id, deleteAvatarHash);
  }

  @Patch(':id')
  @ApiOperation({ summary: `Atualiza ${User.name} pelo ID` })
  update(@Param('id') id: string, @Body() data: DeepPartial<User>): Promise<User> {
    return this.service.update({ ...data, id });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: `Deleta ${User.name} pelo ID` })
  deleteById(@Param('id') id: string): Promise<void> {
    return this.service.deleteById(id);
  }
}
