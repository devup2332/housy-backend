import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/createUser.dto';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { UserEntity } from '../../domain/entities/user.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly _userRepo: UsersRepository) {}

  async execute(data: CreateUserDto) {
    const newUser = new UserEntity(
      data.id,
      data.email,
      data.first_name,
      data.last_name,
      data.provider,
      data.user_role,
      false,
      data.plan,
      data.photo_url,
      data.company_id,
    );
    return this._userRepo.createUser(newUser);
  }
}
