import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { Entity, Column, PrimaryColumn, Unique } from 'typeorm';

@Entity()
@Unique(['host'])
export class Tenant {
    @PrimaryColumn()
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    host: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Column()
    name: string
}