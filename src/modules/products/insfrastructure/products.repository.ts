import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/createProduct.dto';
import { GetProductsTableDto } from '../dto/getProductsTable.dto';
import { TableProductRow } from './types/tableProductsResponse';
import { PrismaService } from '@/infrastructure/database/prisma/prisma.service';
import { KnexService } from '@/infrastructure/database/knex/knex.service';

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

  async deleteProduct(id: string) {
    const p = await this._prismaService.product.update({
      where: { id },
      data: { is_deleted: true },
    });
    return p.id;
  }

  async getProductsTable(filters: GetProductsTableDto) {
    const { search, limit, page, companyId } = filters;
    const offset = (page - 1) * limit;

    // Base Query
    const baseQuery = this._knexService
      .db('Product as p')
      .select(
        'p.sales_price',
        'p.cost_price',
        'p.name',
        'p.quantity',
        'p.status',
        'p.currency',
        'p.company_id',
        'p.description',
        'p.id',
        'p.created_at',
        'p.updated_at',
        this._knexService.db.raw(`
          COALESCE(
            json_agg(
              jsonb_build_object(
                'id',pi.id,
                'url',pi.url,
                'is_primary',pi.is_primary
              ) ORDER BY pi.created_at ASC
            ) FILTER (WHERE pi.is_deleted = false), 
          '[]'
         ) as images
         `),
      )
      .leftJoin('ProductImage as pi', 'p.id', 'pi.product_id')
      .where('p.is_deleted', false)
      .where('p.company_id', companyId)
      .groupBy('p.id')
      .orderBy('p.created_at', 'desc');

    // Getting General Count
    const generalCountQuery = this._knexService.db
      .from(baseQuery.clone())
      .count('* as generalCount');

    // Applying Search filtering
    if (search && search.trim() !== '') {
      baseQuery.whereILike('p.name', `%${search}%`);
    }
    // Applying Pagination
    const dataQuery = baseQuery.clone().limit(limit).offset(offset);

    // Getting response data length
    const countQuery = this._knexService.db
      .from(baseQuery.clone())
      .count('* as total');

    // Executing queries
    const [data, [{ total }], [{ generalCount }]] = await Promise.all([
      dataQuery,
      countQuery,
      generalCountQuery,
    ]);

    return {
      total,
      generalCount,
      products: this.mapDataTable(data),
    };
  }

  mapDataTable(data: TableProductRow[]) {
    return data.map((item) => {
      return {
        ...item,
        sales_price: Number(item.sales_price),
        cost_price: Number(item.cost_price),
        quantity: Number(item.quantity),
      };
    });
  }
}
