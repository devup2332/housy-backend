import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/createProduct.dto';
import { ProductsRepository } from '../insfrastructure/products.repository';
import { GetProductsTableDto } from '../dto/getProductsTable.dto';

@Injectable()
export class ProductsService {
  constructor(private _productsRepository: ProductsRepository) {}
  createProduct(product: CreateProductDto) {
    return this._productsRepository.createProduct(product);
  }

  getProductsTable(filters: GetProductsTableDto) {
    return this._productsRepository.getProductsTable(filters);
  }
}
