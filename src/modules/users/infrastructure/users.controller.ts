import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../application/users.service';
import { CreateUserDto } from '../dto/createUser.dto';

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
  getUserById(@Param('id') id: string) {
    console.log({ id });
    return this.usersService.getUserById(id);
  }
}
