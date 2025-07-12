import { PrismaService } from '@/infrastructure/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ICategoriesRepository } from '../../domain/repositories/categories.repository.interface';
import { CategoryEntity } from '../../domain/entities/category.entity';

@Injectable()
export class CategoriesRepository implements ICategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getCategoriesPerCompany(id: string) {
    console.log({ id });
    const r = await this.prisma.category.findMany({
      where: {
        company_id: id,
      },
    });
    return r;
  }

  async createCategory(data: CategoryEntity) {
    const r = await this.prisma.category.create({
      data,
    });
    return r.id;
  }
}
