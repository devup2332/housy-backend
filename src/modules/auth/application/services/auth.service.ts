import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { LoginUserDto } from '../dto/LoginUserDto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
  async loginUser(body: LoginUserDto) {
    const userDb = await this.prismaService.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!userDb) {
      return {
        message: 'User not found',
      };
    }
    return {
      message: 'User logged in successfully',
      token: 'fake-jwt-token',
    };
  }
}
