import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsUUID()
  company_id: string;

  @IsString()
  description: string;

  @IsBoolean()
  is_active: boolean;

  @IsString()
  image_url: string;
}
