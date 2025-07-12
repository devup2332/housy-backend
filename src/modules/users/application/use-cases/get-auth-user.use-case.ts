import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';

@Injectable()
export class GetAuthUserUseCase {
  constructor(private readonly _userRepo: UsersRepository) {}
  execute(id: string) {
    return this._userRepo.getAuthUser(id);
  }
}
