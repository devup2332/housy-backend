import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class GetProductsTableDto {
  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;

  @IsOptional()
  @IsString()
  search?: string;

  @IsUUID()
  companyId: string;
}
