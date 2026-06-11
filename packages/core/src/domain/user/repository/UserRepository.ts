import { type Optional, type RepositoryFindOptions, type RepositoryPaginationResult } from '@/common/index.js';
import { type User } from '@/domain/user/entity/User.js';

export interface UserRepository {
  findUserById(by: { id: string }): Promise<Optional<User>>;
  findUserByEmail(by: { email: string }): Promise<Optional<User>>;
  findUsers(by: { name?: string }, options?: RepositoryFindOptions): Promise<RepositoryPaginationResult<User>>;
  addUser(user: User): Promise<{ id: string }>;
  updateUser(user: User): Promise<void>;
  removeUser(user: User): Promise<void>;
}
