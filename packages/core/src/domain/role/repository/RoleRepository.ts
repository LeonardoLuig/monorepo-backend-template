import { type Optional, type RepositoryFindOptions, type RepositoryPaginationResult } from '@/common/index.js';
import { type Role } from '@/domain/role/entity/Role.js';

export interface RoleRepository {
  findRoleById(by: { id: string }, options?: RepositoryFindOptions): Promise<Optional<Role>>;
  findRoles(by: { name?: string }, options?: RepositoryFindOptions): Promise<RepositoryPaginationResult<Role>>;
  addRole(role: Role): Promise<{ id: string }>;
  updateRole(role: Role): Promise<void>;
  removeRole(role: Role): Promise<void>;
}
