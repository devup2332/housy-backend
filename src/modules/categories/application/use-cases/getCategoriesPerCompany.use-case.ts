import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../infrastructure/repositories/categories.repository';

@Injectable()
export class GetCategoriesPerCompanyUseCase {
  constructor(private readonly _catRepo: CategoriesRepository) {}
  execute(id: string) {
    return this._catRepo.getCategoriesPerCompany(id);
  }
}
