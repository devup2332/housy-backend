import { IsEmail, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { UserPlan, UserProvider, UserRole } from 'generated';

export class CreateUserDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  @IsOptional()
  photo_url?: string;

  @IsEnum(UserProvider)
  provider: UserProvider;

  @IsUUID()
  @IsOptional()
  company_id?: string;

  @IsEnum(UserRole)
  @IsOptional()
  user_role?: UserRole;

  @IsEnum(UserPlan)
  @IsOptional()
  plan?: UserPlan;
}
