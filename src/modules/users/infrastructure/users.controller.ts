import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../application/users.service';
import { CreateUserDto } from '../dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return {
      status: '123',
    };
  }

  @Post('createUser')
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @Get('/getUserByEmail/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }

  @Get('/getUserById/:id')
  getUserById(@Param('id') id: string) {
    console.log({ id });
    return this.usersService.getUserById(id);
  }
}
