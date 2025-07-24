import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreateProductImageDto {
  @IsString()
  url: string;

  @IsUUID()
  product_id: string;

  @IsBoolean()
  is_deleted: boolean;

  @IsBoolean()
  is_primary: boolean;

  @IsString()
  name: string;

  @IsString()
  public_id: string;
}
