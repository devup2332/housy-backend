import { Injectable } from '@nestjs/common';
import { CreateProductImageDto } from '../dto/createProductImage.dto';
import { ProductImagesRepository } from '../infrastructure/productImages.repository';

@Injectable()
export class ProductImagesService {
  constructor(
    private readonly _productImagesRepository: ProductImagesRepository,
  ) {}
  createProductImage(data: CreateProductImageDto) {
    return this._productImagesRepository.createProductImage(data);
  }
}
