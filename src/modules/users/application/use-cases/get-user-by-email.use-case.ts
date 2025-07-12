import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';

@Injectable()
export class GetUserByEmailUseCase {
  constructor(private readonly _userRepo: UsersRepository) {}
  execute(email: string) {
    return this._userRepo.getUserByEmail(email);
  }
}
