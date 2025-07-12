import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../infrastructure/repositories/categories.repository';
import { CreateCategoryDto } from '../dto/createCategory.dto';
import { CategoryEntity } from '../../domain/entities/category.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateCategoryUseCase {
  constructor(private readonly _catRepo: CategoriesRepository) {}
  execute(data: CreateCategoryDto) {
    const category = new CategoryEntity(
      uuidv4(),
      data.name,
      data.description,
      data.company_id,
      data.is_active,
      data.image_url,
      false,
    );
    return this._catRepo.createCategory(category);
  }
}
