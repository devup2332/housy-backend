import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from '../dto/createCompany.dto';
import { PrismaService } from '@/infrastructure/database/prisma/prisma.service';

@Injectable()
export class CompaniesRepository {
  constructor(private _prismaService: PrismaService) {}

  createCompany(data: CreateCompanyDto) {
    return this._prismaService.company.create({
      data,
    });
  }
}
