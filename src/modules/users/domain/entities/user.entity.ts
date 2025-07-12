import { UserPlan, UserProvider, UserRole } from 'generated';

export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public first_name: string,
    public last_name: string,
    public provider: UserProvider = UserProvider.email,
    public user_role: UserRole = UserRole.owner,
    public is_deleted: boolean = false,
    public plan: UserPlan = UserPlan.free,
    public photo_url?: string | null,
    public company_id?: string | null,
    public readonly created_at?: Date,
    public readonly updated_at?: Date,
  ) {}
}
