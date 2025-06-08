import { Module } from '@nestjs/common';
import { AuthService } from '../application/services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [PrismaModule],
})
export class AuthModule {}
