import { type UserRole } from '@/domain/user/entity/UserRole.js';
import { type HashPassword } from '@/domain/user/value-object/HashPassword.js';

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
