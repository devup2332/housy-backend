import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';
import { UserRoles } from '../../domain/enums/user.user-roles.enum';
import { UserPlans } from '../../domain/enums/user.user-plans.enum';

export class EditUserDataDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  first_name?: string;

  @IsString()
  @IsOptional()
  last_name?: string;

  @IsUrl()
  @IsOptional()
  photo_url?: string;

  @IsUUID()
  @IsOptional()
  company_id?: string;

  @IsOptional()
  @IsEnum(UserRoles)
  user_role?: UserRoles;

  @IsBoolean()
  @IsOptional()
  is_deleted?: boolean;

  @IsEnum(UserPlans)
  @IsOptional()
  plan?: UserPlans;
}
