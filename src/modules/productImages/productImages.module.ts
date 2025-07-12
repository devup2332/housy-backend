import { Module } from '@nestjs/common';
import { ProductImagesController } from './infrastructure/productImages.controller';
import { ProductImagesService } from './application/productImages.service';
import { ProductImagesRepository } from './infrastructure/productImages.repository';
import { PrismaModule } from '@/infrastructure/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductImagesController],
  providers: [ProductImagesService, ProductImagesRepository],
})
export class ProductImagesModule {}
