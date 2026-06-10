import { type RepositoryFindOptions } from '#core/common/repository/types/RepositoryFindOptions.js';
import { type RepositoryPaginationResult } from '#core/common/repository/types/RepositoryPaginationResult.js';
import { type Optional } from '#core/common/types/common-types.js';
import { type User } from '#core/domain/user/entity/User.js';

export interface UserRepository {
  findUserById(by: { id: string }): Promise<Optional<User>>;
  findUserByEmail(by: { email: string }): Promise<Optional<User>>;
  findUsers(by: { name?: string }, options?: RepositoryFindOptions): Promise<RepositoryPaginationResult<User>>;
  addUser(user: User): Promise<{ id: string }>;
  updateUser(user: User): Promise<void>;
  removeUser(user: User): Promise<void>;
}
