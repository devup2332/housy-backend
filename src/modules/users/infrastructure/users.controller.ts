import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../application/users.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { HttpResponseDto } from '@/shared/utils/httpResponse';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('createUser')
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @Get('/getUserByEmail/:email')
  getUserByEmail(@Param('email') email: string) {
    console.log({ email });
    return this.usersService.getUserByEmail(email);
  }

  @Get('/getUserById/:id')
  async getUserById(@Param('id') id: string) {
    console.log({ id });
    try {
      const data = await this.usersService.getUserById(id);
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
}
