import { type RepositoryFindOptions } from '#core/common/repository/types/RepositoryFindOptions.js';
import { type RepositoryPaginationResult } from '#core/common/repository/types/RepositoryPaginationResult.js';
import { type Optional } from '#core/common/types/common-types.js';
import { type Role } from '#core/domain/role/entity/Role.js';

export interface RoleRepository {
  findRoleById(by: { id: string }, options?: RepositoryFindOptions): Promise<Optional<Role>>;
  findRoles(by: { name?: string }, options?: RepositoryFindOptions): Promise<RepositoryPaginationResult<Role>>;
  addRole(role: Role): Promise<{ id: string }>;
  updateRole(role: Role): Promise<void>;
  removeRole(role: Role): Promise<void>;
}
