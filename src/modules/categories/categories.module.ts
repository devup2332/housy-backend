import { KnexModule } from '@/infrastructure/database/knex/knex.module';
import { PrismaModule } from '@/infrastructure/database/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CategoriesController } from './infrastructure/controllers/categories.controller';
import { GetCategoriesPerCompanyUseCase } from './application/use-cases/getCategoriesPerCompany.use-case';
import { CategoriesRepository } from './infrastructure/repositories/categories.repository';
import { CreateCategoryUseCase } from './application/use-cases/createCategory.use-case';
import { DeleteCategoryUseCase } from './application/use-cases/deleteCategory.use-case';
import { ProductsRepository } from '../products/insfrastructure/products.repository';
import { ProductsModule } from '../products/products.module';

@Module({
  controllers: [CategoriesController],
  providers: [
    GetCategoriesPerCompanyUseCase,
    CreateCategoryUseCase,
    CategoriesRepository,
    DeleteCategoryUseCase,
  ],
  imports: [PrismaModule, KnexModule, ProductsModule],
})
export class CategoriesModule {}
