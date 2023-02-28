import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditBookmarkDto {
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
