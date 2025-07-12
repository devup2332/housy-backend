import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ProductStatus } from 'generated';

export class CreateProductDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  sales_price: number;

  @IsNumber()
  cost_price: number;

  @IsNumber()
  quantity: number;

  @IsEnum(ProductStatus)
  status: ProductStatus;

  @IsUUID()
  @IsOptional()
  created_by: string;

  @IsUUID()
  company_id: string;

  @IsUUID()
  category_id: string;
}
