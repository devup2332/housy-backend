import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from '../application/products.service';
import { HttpResponseDto } from '@/shared/utils/httpResponse';
import { CreateProductDto } from '../dto/createProduct.dto';
import { GetProductsTableDto } from '../dto/getProductsTable.dto';
import { UserAuthGuard } from '@/shared/guards/UserAuth.guard';
import { RequestWithUser } from '@/shared/interfaces/requestWithUser.interface';

@Controller('products')
@UseGuards(UserAuthGuard)
export class ProductsController {
  constructor(private _productsService: ProductsService) {}
  @Post('createProduct')
  async createProduct(
    @Body() product: CreateProductDto,
    @Req() req: RequestWithUser,
  ) {
    try {
      console.log({ body: product });
      const data = await this._productsService.createProduct({
        ...product,
        created_by: req.user.id,
      });
      return new HttpResponseDto({
        data,
        message: 'Product created successfully',
      });
    } catch {
      return new HttpResponseDto({
        status: 500,
        message: 'Unable to create product',
      });
    }
  }

  @Get('get-products-table')
  async getProducts(
    @Query('search') search: string,
    @Query('limit') limit: number,
    @Query('page') page: number,
    @Query('companyId') companyId: string,
  ) {
    const filters: GetProductsTableDto = {
      search,
      limit,
      page,
      companyId,
    };
    try {
      const data = await this._productsService.getProductsTable(filters);
      return new HttpResponseDto({
        data,
        status: 200,
        message: 'Products fetched successfully',
      });
    } catch (err) {
      console.log({ err });
      return new HttpResponseDto({
        status: 500,
        message: 'Unable to get products',
      });
    }
  }

  @Put('updateProduct/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() product: CreateProductDto,
  ) {
    const data = await this._productsService.updateProduct(id, product);

    return new HttpResponseDto({
      data: {
        id: data.id,
      },
      status: 200,
      message: 'Products fetched successfully',
    });
  }

  @Get('getProduct/:id')
  async getProduct(@Param('id') id: string) {
    const data = await this._productsService.getProduct(id);
    return new HttpResponseDto({
      data,
      status: 200,
      message: 'Products fetched successfully',
    });
  }

  @Post('deleteMultipleProducts')
  async deleteMultipleProducts(@Body() ids: string[]) {
    try {
      const data = await this._productsService.deleteMultipleProducts(ids);
      return new HttpResponseDto({
        data,
        status: 200,
        message: 'Products fetched successfully',
      });
    } catch (err) {
      console.log({ err });
      return new HttpResponseDto({
        status: 500,
        message: 'Unable to get products',
      });
    }
  }

  @Delete('deleteProduct/:id')
  async deleteProduct(@Param('id') id: string) {
    try {
      const data = await this._productsService.deleteProduct(id);
      return new HttpResponseDto({
        data,
        status: 200,
        message: 'Products fetched successfully',
      });
    } catch (err) {
      console.log({ err });
      return new HttpResponseDto({
        status: 500,
        message: 'Unable to get products',
      });
    }
  }
}
