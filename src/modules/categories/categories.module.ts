import { KnexModule } from '@/infrastructure/database/knex/knex.module';
import { PrismaModule } from '@/infrastructure/database/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CategoriesController } from './infrastructure/controllers/categories.controller';
import { GetCategoriesPerCompanyUseCase } from './application/use-cases/getCategoriesPerCompany.use-case';
import { CategoriesRepository } from './infrastructure/repositories/categories.repository';
import { CreateCategoryUseCase } from './application/use-cases/createCategory.use-case';

@Module({
  controllers: [CategoriesController],
  providers: [
    GetCategoriesPerCompanyUseCase,
    CreateCategoryUseCase,
    CategoriesRepository,
  ],
  imports: [PrismaModule, KnexModule],
})
export class CategoriesModule {}
