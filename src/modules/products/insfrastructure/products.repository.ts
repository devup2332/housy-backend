import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/createProduct.dto';
import { KnexService } from '@/knex/knex.service';
import { GetProductsTableDto } from '../dto/getProductsTable.dto';

@Injectable()
export class ProductsRepository {
  constructor(
    private _prismaService: PrismaService,
    private _knexService: KnexService,
  ) {}

  createProduct(product: CreateProductDto) {
    return this._prismaService.product.create({
      data: product,
    });
  }

  async getProductsTable(filters: GetProductsTableDto) {
    const { search, limit, page } = filters;
    const offset = (page - 1) * limit;

    const baseQuery = this._knexService
      .db('Product as p')
      .select(
        'p.sales_price',
        'p.cost_price',
        'p.name',
        'p.quantity',
        'p.status',
        'p.description',
        'p.id',
        'p.created_at',
        'p.updated_at',
        this._knexService.db.raw(
          `COALESCE(
            json_agg(
              jsonb_build_object(
                'id',pi.id,
                'url',pi.url
              )
            ),
          '[]'
         ) as images`,
        ),
      )
      .leftJoin('ProductImage as pi', 'p.id', 'pi.product_id')
      .where('p.is_deleted', false)
      .groupBy('p.id')
      .orderBy('p.name', 'asc');

    if (search && search.trim() !== '') {
      baseQuery.whereILike('p.name', `%${search}%`);
    }
    const dataQuery = baseQuery.clone().limit(limit).offset(offset);
    const countQuery = this._knexService.db
      .from(baseQuery.clone())
      .count('* as total');
    const [data, [{ total }]] = await Promise.all([dataQuery, countQuery]);
    return {
      total,
      products: data,
    };
  }
}
