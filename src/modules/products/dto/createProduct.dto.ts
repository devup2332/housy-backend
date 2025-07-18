import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ProductCurrency, ProductStatus } from 'generated';

export class CreateProductDto {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  brand: string;

  @IsString()
  sku: string;

  @IsEnum(ProductCurrency)
  currency: ProductCurrency;

  @IsNumber()
  sales_price: number;

  @IsNumber()
  cost_price: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  min_stock: number;

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
