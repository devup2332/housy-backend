import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { HttpResponseDto } from '@/shared/utils/httpResponse';
import { UserAuthGuard } from '@/shared/guards/UserAuth.guard';
import { RequestWithUser } from '@/shared/interfaces/requestWithUser.interface';
import { UsersService } from '../../application/services/users.service';
import { CreateUserDto } from '../../application/dto/createUser.dto';

@UseGuards(UserAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private _usersService: UsersService) {}

  @Post('createUser')
  createUser(@Body() data: CreateUserDto) {
    return this._usersService.createUser(data);
  }

  @Get('/getUserByEmail/:email')
  getUserByEmail(@Param('email') email: string) {
    console.log({ email });
    return this._usersService.getUserByEmail(email);
  }

  @Get('/getUserById/:id')
  async getUserById(@Param('id') id: string) {
    try {
      const data = await this._usersService.getUserById(id);
      return new HttpResponseDto({
        data: data ? data : null,
      });
    } catch {
      return new HttpResponseDto({
        status: 404,
        message: 'Unable to find user with this id',
      });
    }
  }

  @Get('getAuthUser')
  async getAuthUser(@Req() req: RequestWithUser) {
    try {
      const data = await this._usersService.getAuthUser(req.user.id);
      return new HttpResponseDto({
        status: 200,
        message: 'Success operation',
        data,
      });
    } catch {
      return new HttpResponseDto({
        status: 404,
        message: 'Unable to find user with this id',
      });
    }
  }
}
