import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/infrastructure/auth.module';
import { UsersModule } from './modules/users/user.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductImagesModule } from './modules/productImages/productImages.module';
import { KnexModule } from './knex/knex.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    KnexModule,
    UsersModule,
    ProductsModule,
    ProductImagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
