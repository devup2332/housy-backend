import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterUserAndCompanyDto } from '../dto/registerUserAndCompany.dto';
import { RegisterService } from '../application/register.service';
import { HttpResponseDto } from '@/shared/utils/httpResponse';

@Controller('register')
export class RegisterController {
  constructor(private _registerService: RegisterService) {}
  @Post('userAndCompany')
  async registerUserAndCompany(@Body() body: RegisterUserAndCompanyDto) {
    console.log({ body });
    try {
      const data = await this._registerService.registerUserAndCompany(body);
      return new HttpResponseDto({
        status: 200,
        message: 'User and company created successfully',
        data,
      });
    } catch {
      return new HttpResponseDto({
        status: 500,
        message: 'Unexpected Error',
      });
    }
  }
  @Get('/emailInUse/:email')
  async emailInUse(@Param('email') email: string) {
    try {
      const data = await this._registerService.emailInUse(email);
      return new HttpResponseDto({
        data,
        message: 'Success operation',
      });
    } catch {
      return new HttpResponseDto({
        message: 'Server error',
        status: 500,
      });
    }
  }
}
