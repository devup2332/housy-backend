import { HttpResponseDto } from '@/shared/utils/httpResponse';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateCompanyDto } from '../dto/createCompany.dto';
import { CompaniesService } from '../application/companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private _companiesService: CompaniesService) {}
  @Post('createCompany')
  async createCompany(@Body() body: CreateCompanyDto) {
    try {
      const data = await this._companiesService.createCompany(body);
      return new HttpResponseDto({
        message: 'Company created successfully',
        data,
      });
    } catch {
      return new HttpResponseDto({
        message: 'Unable to create company now',
        status: 500,
      });
    }
  }
}
