import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from '../../application/dto/LoginUserDto';
import { AuthService } from '../../application/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  loginUser(@Body() body: LoginUserDto) {
    return this.authService.loginUser(body);
  }
}
