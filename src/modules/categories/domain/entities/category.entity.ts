export class CategoryEntity {
  constructor(
    public id: string,
    public name: string,
    public company_id: string,
    public is_active: boolean,
    public image_url: string,
    public is_deleted: boolean,
    public description?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}
}
