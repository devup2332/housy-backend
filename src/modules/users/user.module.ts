import { Module } from '@nestjs/common';
import { UsersController } from './infrastructure/users.controller';
import { UsersService } from './application/users.service';
import { UsersRepository } from './infrastructure/users.repository';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  controllers: [UsersController],
  exports: [],
  providers: [UsersService, UsersRepository],
  imports: [PrismaModule],
})
export class UsersModule {}
