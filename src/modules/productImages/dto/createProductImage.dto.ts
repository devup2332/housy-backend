import { IsString, IsUUID } from 'class-validator';

export class CreateProductImageDto {
  @IsString()
  url: string;

  @IsUUID()
  product_id: string;
}
