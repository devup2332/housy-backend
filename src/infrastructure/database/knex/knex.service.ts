import { databaseConfig } from '@/config/database.config';
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import * as knex from 'knex';

@Injectable()
export class KnexService implements OnModuleDestroy {
  private instance: knex.Knex;

  constructor() {
    this.instance = knex({
      client: 'pg',
      connection: databaseConfig.DATABASE_URL,
    });
  }

  get db() {
    return this.instance;
  }
  async onModuleDestroy() {
    await this.instance.destroy();
  }
}
