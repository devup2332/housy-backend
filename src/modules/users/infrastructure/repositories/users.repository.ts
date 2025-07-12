import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/infrastructure/database/prisma/prisma.service';
import { IUserRepository } from '../../domain/repositories/users.repository.interface';
import { UserEntity } from '../../domain/entities/user.entity';
import { User as PrismaUser } from 'generated';
import { KnexService } from '@/infrastructure/database/knex/knex.service';

@Injectable()
export class UsersRepository implements IUserRepository {
  constructor(
    private _prismaService: PrismaService,
    private _knexService: KnexService,
  ) {}

  async createUser(data: UserEntity) {
    const user = await this._prismaService.user.create({
      data,
    });
    return user.id;
  }

  async getUserByEmail(email: string) {
    const user = await this._prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) return null;
    return this.serializeUser(user);
  }

  async getUserById(id: string) {
    const user = await this._prismaService.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) return null;
    return this.serializeUser(user);
  }

  async editUserById(id: string, data: Partial<UserEntity>) {
    const user = await this._prismaService.user.update({
      where: {
        id,
      },
      data,
    });
    return user.id;
  }

  async getAuthUser(id: string) {
    const res = await this._knexService.db
      .select(
        'u.id',
        'u.photo_url',
        'u.first_name',
        'u.last_name',
        'u.provider',
        'u.user_role',
        'u.plan',
        this._knexService.db.raw(`
        COALESCE(
          json_agg(
            jsonb_build_object(
              'id',c.id,
              'name',c.name,
              'sector',c.sector
            )
          ),'[]'
        ) as companies
      `),
      )
      .from('User as u')
      .leftJoin('Company as c', 'c.owner_id', 'u.id')
      .where('u.is_deleted', false)
      .where('u.id', id)
      .groupBy('u.id');
    return res[0];
  }

  serializeUser(data: PrismaUser) {
    return new UserEntity(
      data.id,
      data.email,
      data.first_name,
      data.last_name,
      data.provider,
      data.user_role,
      data.is_deleted,
      data.plan,
      data.photo_url,
      data.company_id,
      data.created_at,
      data.updated_at,
    );
  }
}
