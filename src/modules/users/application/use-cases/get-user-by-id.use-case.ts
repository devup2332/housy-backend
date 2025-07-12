import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private readonly _userRepo: UsersRepository) {}
  execute(id: string) {
    return this._userRepo.getUserById(id);
  }
}
