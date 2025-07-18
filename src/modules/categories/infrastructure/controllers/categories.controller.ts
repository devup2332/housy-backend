import { HttpResponseDto } from '@/shared/utils/httpResponse';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetCategoriesPerCompanyUseCase } from '../../application/use-cases/getCategoriesPerCompany.use-case';
import { CreateCategoryUseCase } from '../../application/use-cases/createCategory.use-case';
import { CreateCategoryDto } from '../../application/dto/createCategory.dto';
import { UserAuthGuard } from '@/shared/guards/UserAuth.guard';
import { DeleteCategoryUseCase } from '../../application/use-cases/deleteCategory.use-case';

@Controller('categories')
@UseGuards(UserAuthGuard)
export class CategoriesController {
  constructor(
    private readonly getCategoriesPerCompanyUseCase: GetCategoriesPerCompanyUseCase,
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}
  @Get('getCategoriesPerCompany/:id')
  async getCategoriesPerCompany(@Param('id') id: string) {
    try {
      const data = await this.getCategoriesPerCompanyUseCase.execute(id);
      return new HttpResponseDto({
        message: 'Operation Successfully',
        data,
      });
    } catch {
      return new HttpResponseDto({
        message: 'Server Error',
        status: 500,
      });
    }
  }

  @Post('createCategory')
  async createCategory(@Body() data: CreateCategoryDto) {
    try {
      const r = await this.createCategoryUseCase.execute(data);
      return new HttpResponseDto({
        message: 'Operation Successfully',
        data: r,
      });
    } catch {
      return new HttpResponseDto({
        message: 'Server Error',
        status: 500,
      });
    }
  }

  @Delete('deleteCategory/:id')
  async deleteCategory(@Param('id') id: string) {
    try {
      const deleted = await this.deleteCategoryUseCase.execute(id);
      return new HttpResponseDto({
        message: 'Operation Successfully',
        data: deleted,
      });
    } catch {
      return new HttpResponseDto({
        message: 'Server Error',
        status: 500,
      });
    }
  }
}
