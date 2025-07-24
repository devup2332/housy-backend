import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ProductImagesService } from '../application/productImages.service';
import { CreateProductImageDto } from '../dto/createProductImage.dto';
import { HttpResponseDto } from '@/shared/utils/httpResponse';

@Controller('product-images')
export class ProductImagesController {
  constructor(private _productImagesService: ProductImagesService) {}
  @Post('/create')
  async createProductImage(@Body() data: CreateProductImageDto) {
    try {
      const response =
        await this._productImagesService.createProductImage(data);
      return new HttpResponseDto({
        status: 200,
        message: 'Product image created successfully',
        data: response,
      });
    } catch {
      return new HttpResponseDto({
        status: 500,
        message: 'Unexpected Error',
      });
    }
  }

  @Delete('deleteProductImage/:id')
  async deleteProductImage(@Param('id') id: string) {
    const data = await this._productImagesService.deleteProductImage(id);
    return new HttpResponseDto({
      status: 200,
      message: 'Product image deleted successfully',
      data: {
        id: data.id,
      },
    });
  }
}
