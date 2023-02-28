import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookmarkDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  decription?: string;

  @IsString()
  @IsOptional()
  link: string;
}
