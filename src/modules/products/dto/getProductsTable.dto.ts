import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetProductsTableDto {
  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;

  @IsOptional()
  @IsString()
  search?: string;
}
