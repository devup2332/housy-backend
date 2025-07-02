import { Module } from '@nestjs/common';
import { ProductsController } from './insfrastructure/products.controller';
import { ProductsService } from './application/products.service';
import { ProductsRepository } from './insfrastructure/products.repository';
import { PrismaModule } from '@/prisma/prisma.module';
import { KnexModule } from '@/knex/knex.module';

@Module({
  controllers: [ProductsController],
  imports: [PrismaModule, KnexModule],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
