import environments from '@/shared/config/environments';
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import * as knex from 'knex';

@Injectable()
export class KnexService implements OnModuleDestroy {
  instance: knex.Knex;

  constructor() {
    this.instance = knex({
      client: 'pg',
      connection: environments.DATABASE_URL,
    });
  }

  get db() {
    return this.instance;
  }
  async onModuleDestroy() {
    await this.instance.destroy();
  }
}
