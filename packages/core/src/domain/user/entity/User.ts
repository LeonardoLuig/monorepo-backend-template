import { IsDate, IsEmail, IsInstance, IsOptional, IsString, IsUUID } from 'class-validator';
import { v7 } from 'uuid';

import { Entity, IRemovableEntity, Nullable } from '@/common/index.js';
import { CreateUserEntityPayload } from '@/domain/user/entity/types/CreateUserEntityPayload.js';
import { EditUserEntityPayload } from '@/domain/user/entity/types/EditUserEntityPayload.js';
import { UserRole } from '@/domain/user/entity/UserRole.js';
import { HashPassword } from '@/domain/user/value-object/HashPassword.js';

export class User extends Entity<string> implements IRemovableEntity {
  @IsUUID('7')
  protected id: string;

  @IsString()
  private name: string;

  @IsEmail()
  private readonly email: string;

  @IsInstance(HashPassword)
  private password: HashPassword;

  @IsInstance(UserRole)
  private role: UserRole;

  @IsDate()
  private readonly createdAt: Date;

  @IsOptional()
  @IsDate()
  private updatedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  private removedAt: Nullable<Date>;

  constructor(payload: CreateUserEntityPayload) {
    super();

    this.id = payload.id ?? v7();

    this.name = payload.name;
    this.email = payload.email;
    this.password = payload.password;
    this.role = payload.role;

    this.createdAt = payload.createdAt ?? new Date();
    this.updatedAt = payload.updatedAt ?? null;
    this.removedAt = payload.removedAt ?? null;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password.getValue();
  }

  public getHashPassword(): HashPassword {
    return this.password;
  }

  public getRole(): UserRole {
    return this.role;
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

  public async edit(payload: EditUserEntityPayload) {
    const currentDate = new Date();

    if (payload.name) {
      this.name = payload.name;
      this.updatedAt = currentDate;
    }
    if (payload.password) {
      this.password = await HashPassword.create(payload.password);
      this.updatedAt = currentDate;
    }
    if (payload.role) {
      this.role = payload.role;
      this.updatedAt = currentDate;
    }

    await this.validate();
  }

  public static async create(payload: CreateUserEntityPayload) {
    const user = new User(payload);
    await user.validate();

    return user;
  }
}
