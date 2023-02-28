import {
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
} from 'class-validator';

export class createBookmarkDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  decription?: string;

  @IsString()
  link: string;
}
