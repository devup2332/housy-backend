import { Category } from 'generated';
import { CategoryEntity } from '../entities/category.entity';

export interface ICategoriesRepository {
  getCategoriesPerCompany(id: string): Promise<Category[]>;
  createCategory(data: CategoryEntity): Promise<string>;
  deleteCategory(id: string): Promise<string>;
}
