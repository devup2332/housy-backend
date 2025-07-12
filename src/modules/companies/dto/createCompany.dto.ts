import { IsString, IsUUID } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  name: string;

  @IsString()
  sector: string;

  @IsUUID()
  owner_id: string;
}
