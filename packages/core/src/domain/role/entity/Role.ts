import { IsDate, IsOptional, IsString } from 'class-validator';
import { v7 } from 'uuid';

import { Entity, IRemovableEntity, Nullable } from '@/common/index.js';
import { CreateRoleEntityPayload } from '@/domain/role/entity/types/CreateRoleEntityPayload.js';

export class Role extends Entity<string> implements IRemovableEntity {
  @IsString()
  private name: string;

  @IsDate()
  private readonly createdAt: Date;

  @IsOptional()
  @IsDate()
  private updatedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  private removedAt: Nullable<Date>;

  constructor(payload: CreateRoleEntityPayload) {
    super();

    this.id = payload.id ?? v7();

    this.name = payload.name;

    this.createdAt = payload.createdAt ?? new Date();
    this.updatedAt = payload.updatedAt ?? null;
    this.removedAt = payload.removedAt ?? null;
  }

  public getName(): string {
    return this.name;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Nullable<Date> {
    return this.updatedAt;
  }

  public getRemovedAt(): Nullable<Date> {
    return this.removedAt;
  }

  public async remove() {
    this.removedAt = new Date();
    await this.validate();
  }

  public static async create(payload: CreateRoleEntityPayload) {
    const role = new Role(payload);
    await role.validate();

    return role;
  }
}
