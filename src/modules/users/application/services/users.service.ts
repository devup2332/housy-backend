import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@/modules/users/application/dto/createUser.dto';
import { CreateUserUseCase } from '../use-cases/create-user.use-case';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { GetUserByIdUseCase } from '../use-cases/get-user-by-id.use-case';
import { GetUserByEmailUseCase } from '../use-cases/get-user-by-email.use-case';
import { UpdateUserDto } from '../dto/update-user.dto';
import { GetAuthUserUseCase } from '../use-cases/get-auth-user.use-case';

@Injectable()
export class UsersService {
  constructor(
    private _usersRepository: UsersRepository,
    private _createUserUseCase: CreateUserUseCase,
    private _getUserByIdUseCase: GetUserByIdUseCase,
    private _getUserByEmailUseCase: GetUserByEmailUseCase,
    private _getAuthUserUseCase: GetAuthUserUseCase,
  ) {}
  createUser(data: CreateUserDto) {
    return this._createUserUseCase.execute(data);
  }

  getUserByEmail(email: string) {
    return this._getUserByEmailUseCase.execute(email);
  }

  getUserById(id: string) {
    return this._getUserByIdUseCase.execute(id);
  }

  ediUserById(id: string, body: UpdateUserDto) {
    return this._usersRepository.editUserById(id, body);
  }

  getAuthUser(id: string) {
    return this._getAuthUserUseCase.execute(id);
  }

  async emailInUse(email: string) {
    const user = await this._usersRepository.getUserByEmail(email);
    if (user) {
      return { inUse: true };
    }
    return { inUse: false };
  }
}
