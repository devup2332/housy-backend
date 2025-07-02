import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductImageDto } from '../dto/createProductImage.dto';

@Injectable()
export class ProductImagesRepository {
  constructor(private _prismaService: PrismaService) {}

  createProductImage(data: CreateProductImageDto) {
    return this._prismaService.productImage.create({ data });
  }
}
