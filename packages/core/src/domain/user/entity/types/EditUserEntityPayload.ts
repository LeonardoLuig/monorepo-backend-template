import { type UserRole } from '#core/domain/user/entity/UserRole.js';

export type EditUserEntityPayload = {
  name?: string;
  password?: string;
  role?: UserRole;
};
