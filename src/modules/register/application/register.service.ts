import { Injectable } from '@nestjs/common';
import { RegisterUserAndCompanyDto } from '../dto/registerUserAndCompany.dto';
import { CompaniesService } from '@/modules/companies/application/companies.service';
import { UsersService } from '@/modules/users/application/services/users.service';

@Injectable()
export class RegisterService {
  constructor(
    private _usersService: UsersService,
    private _companiesService: CompaniesService,
  ) {}
  async registerUserAndCompany(data: RegisterUserAndCompanyDto) {
    const {
      email,
      provider,
      company_name,
      first_name,
      last_name,
      company_sector,
      user_id,
      photo_url,
    } = data;
    const owner_id = await this._usersService.createUser({
      email,
      provider,
      id: user_id,
      first_name,
      last_name,
      photo_url,
    });

    const newCompany = await this._companiesService.createCompany({
      name: company_name,
      owner_id,
      sector: company_sector,
    });

    await this._usersService.ediUserById(owner_id, {
      company_id: newCompany.id,
    });

    return {
      user: owner_id,
      company: newCompany.id,
    };
  }

  async emailInUse(email: string) {
    const users = await this._usersService.getUserByEmail(email);
    if (users) return { inUse: true };
    return { inUse: false };
  }
}
