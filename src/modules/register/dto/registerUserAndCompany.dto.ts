import { UserAuthProvider } from '@/modules/users/domain/enums/user.domain-provider.enum';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';

export class RegisterUserAndCompanyDto {
  @IsEmail()
  email: string;

  @IsUUID()
  user_id: string;

  @IsString()
  first_name: string;
  @IsString()
  last_name: string;

  @IsString()
  company_name: string;

  @IsString()
  company_sector: string;

  @IsEnum(UserAuthProvider)
  provider: UserAuthProvider;

  @IsUrl()
  @IsOptional()
  photo_url?: string;
}
