import { Module } from '@nestjs/common';
import { PrismaModule } from '@/infrastructure/database/prisma/prisma.module';
import { SupabaseModule } from '@/infrastructure/supabase/supabase.module';
import { UsersService } from './application/services/users.service';
import { UsersRepository } from './infrastructure/repositories/users.repository';
import { UsersController } from './infrastructure/controllers/users.controller';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { GetUserByEmailUseCase } from './application/use-cases/get-user-by-email.use-case';
import { GetUserByIdUseCase } from './application/use-cases/get-user-by-id.use-case';
import { GetAuthUserUseCase } from './application/use-cases/get-auth-user.use-case';
import { KnexModule } from '@/infrastructure/database/knex/knex.module';

@Module({
  controllers: [UsersController],
  exports: [UsersService],
  providers: [
    UsersService,
    UsersRepository,
    CreateUserUseCase,
    GetUserByEmailUseCase,
    GetUserByIdUseCase,
    GetAuthUserUseCase,
  ],
  imports: [PrismaModule, KnexModule, SupabaseModule],
})
export class UsersModule {}
