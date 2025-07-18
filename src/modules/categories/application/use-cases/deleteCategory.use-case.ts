import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../infrastructure/repositories/categories.repository';
import { ProductsRepository } from '@/modules/products/insfrastructure/products.repository';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(
    private readonly _catRepo: CategoriesRepository,
    private readonly _prodRepo: ProductsRepository,
  ) {}

  async execute(id: string) {
    const deleted = await this._catRepo.deleteCategory(id);
    await this._prodRepo.deleteProductByCategory(id);
    return deleted;
  }
}
