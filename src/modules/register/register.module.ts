import { Module } from '@nestjs/common';
import { RegisterService } from './application/register.service';
import { RegisterController } from './controllers/register.controller';
import { CompaniesModule } from '../companies/companies.module';
import { UsersModule } from '../users/user.module';

@Module({
  providers: [RegisterService],
  controllers: [RegisterController],
  imports: [CompaniesModule, UsersModule],
})
export class RegisterModule {}
