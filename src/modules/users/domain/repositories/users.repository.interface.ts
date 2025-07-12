import { UserEntity } from '../entities/user.entity';

export interface IUserRepository {
  createUser(data: UserEntity): Promise<string>;
  getUserByEmail(email: string): Promise<UserEntity | null>;
  getUserById(id: string): Promise<UserEntity | null>;
  getAuthUser(id: string): Promise<UserEntity | null>;
  editUserById(id: string, data: UserEntity): Promise<string>;
}
