import { PrismaService } from '@/prisma/prisma.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async createUser(data: CreateUserDto) {
    return await this.prismaService.user.create({
      data: {
        ...data,
      },
    });
  }

  async getUserByEmail(email: string) {
    return await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
  }

  async getUserById(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }
}
