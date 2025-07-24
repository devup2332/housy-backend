import { ProductCurrency, ProductStatus } from 'generated';

export class ProductEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly company_id: string,
    public readonly status: ProductStatus,
    public readonly is_deleted: boolean,
    public readonly sales_price: number,
    public readonly cost_price: number,
    public readonly currency: ProductCurrency,
    public readonly quantity: number,
    public readonly min_stock: number,
    public readonly width: number,
    public readonly height: number,
    public readonly weight: number,
    public readonly length: number,
    public readonly sku: string,
    public readonly brand: string,
    public readonly color: string,
    public readonly created_by: string,
    public readonly description?: string,
    public readonly created_at?: Date,
    public readonly updated_at?: Date,
  ) {}
}
