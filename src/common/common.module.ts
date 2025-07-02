import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/JwtAuthGuard.guard';

@Module({
  providers: [JwtAuthGuard],
  controllers: [],
  exports: [JwtAuthGuard],
})
export class CommonModule {}
