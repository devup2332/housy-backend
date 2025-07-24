import { Injectable } from '@nestjs/common';
import { CreateProductImageDto } from '../dto/createProductImage.dto';
import { PrismaService } from '@/infrastructure/database/prisma/prisma.service';

@Injectable()
export class ProductImagesRepository {
  constructor(private _prismaService: PrismaService) {}

  createProductImage(data: CreateProductImageDto) {
    return this._prismaService.productImage.create({ data });
  }

  deleteProductImage(id: string) {
    return this._prismaService.productImage.update({
      where: { id },
      data: { is_deleted: true },
    });
  }
}
