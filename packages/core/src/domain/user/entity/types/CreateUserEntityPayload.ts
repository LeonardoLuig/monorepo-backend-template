import { type UserRole } from '#core/domain/user/entity/UserRole.js';
import { type HashPassword } from '#core/domain/user/value-object/HashPassword.js';

export type CreateUserEntityPayload = {
  id?: string;
  name: string;
  email: string;
  password: HashPassword;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
  removedAt?: Date;
};
