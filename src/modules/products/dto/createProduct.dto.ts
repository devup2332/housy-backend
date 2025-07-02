import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export const statusOptions = [
  'active',
  'inactive',
  'out_of_stock',
  'discontinued',
] as const;

export type Status = (typeof statusOptions)[number];

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

  @IsEnum(statusOptions)
  status: Status;

  @IsUUID()
  @IsOptional()
  created_by?: string;
}
