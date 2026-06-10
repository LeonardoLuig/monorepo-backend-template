import {
  type Optional,
  type RepositoryFindOptions,
  type RepositoryPaginationResult,
  type User,
  type UserRepository,
} from '@packages/core';

export class DrizzleUserRepository implements UserRepository {
  public findUserById(by: { id: string }): Promise<Optional<User>> {
    throw new Error('Method not implemented.');
  }

  public findUserByEmail(by: { email: string }): Promise<Optional<User>> {
    throw new Error('Method not implemented.');
  }

  public findUsers(by: { name?: string }, options?: RepositoryFindOptions): Promise<RepositoryPaginationResult<User>> {
    throw new Error('Method not implemented.');
  }

  public addUser(user: User): Promise<{ id: string }> {
    throw new Error('Method not implemented.');
  }

  public updateUser(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public removeUser(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
