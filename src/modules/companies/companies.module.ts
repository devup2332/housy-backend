import { Module } from '@nestjs/common';
import { CompaniesController } from './controllers/companies.controller';
import { CompaniesService } from './application/companies.service';
import { CompaniesRepository } from './insfrastructure/companies.repository';
import { PrismaModule } from '@/infrastructure/database/prisma/prisma.module';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService, CompaniesRepository],
  exports: [CompaniesService],
  imports: [PrismaModule],
})
export class CompaniesModule {}
