import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/user.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductImagesModule } from './modules/productImages/productImages.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { RegisterModule } from './modules/register/register.module';
import { PrismaModule } from './infrastructure/database/prisma/prisma.module';
import { KnexModule } from './infrastructure/database/knex/knex.module';
import { SupabaseModule } from './infrastructure/supabase/supabase.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [
    PrismaModule,
    KnexModule,
    UsersModule,
    ProductsModule,
    ProductImagesModule,
    CompaniesModule,
    SupabaseModule,
    RegisterModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
