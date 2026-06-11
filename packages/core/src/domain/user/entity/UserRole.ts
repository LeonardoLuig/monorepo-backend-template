import { IsString } from 'class-validator';

import { Entity } from '@/common/index.js';

export class UserRole extends Entity<string> {
  @IsString()
  private readonly name: string;

  constructor(id: string, name: string) {
    super();

    this.id = id;
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public static async create(id: string, name: string): Promise<UserRole> {
    const userRole = new UserRole(id, name);
    await userRole.validate();

    return userRole;
  }
}
