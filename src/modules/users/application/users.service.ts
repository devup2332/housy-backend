import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/createUser.dto';
import { UsersRepository } from '../infrastructure/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  createUser(createUser: CreateUserDto) {
    return this.usersRepository.createUser(createUser);
  }

  getUserByEmail(email: string) {
    return this.usersRepository.getUserByEmail(email);
  }

  getUserById(id: string) {
    console.log('Fetching user by ID:', id);
    return this.usersRepository.getUserById(id);
  }
}
