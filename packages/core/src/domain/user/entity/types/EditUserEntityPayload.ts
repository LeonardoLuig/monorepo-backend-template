import { type UserRole } from '@/domain/user/entity/UserRole.js';

export type EditUserEntityPayload = {
  name?: string;
  password?: string;
  role?: UserRole;
};
