import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/infrastructure/auth.module';
import { UsersModule } from './modules/users/user.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
