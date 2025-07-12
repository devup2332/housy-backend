import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from '../dto/createCompany.dto';
import { CompaniesRepository } from '../insfrastructure/companies.repository';

@Injectable()
export class CompaniesService {
  constructor(private companiesRepository: CompaniesRepository) {}
  createCompany(company: CreateCompanyDto) {
    return this.companiesRepository.createCompany(company);
  }
}
