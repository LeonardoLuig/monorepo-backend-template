import argon2 from 'argon2';
import { Matches } from 'class-validator';

import { HASH_PASSWORD_REGEX } from '#core/common/constants/regex.constants.js';
import { ValueObject } from '#core/common/value-object/ValueObject.js';

export class HashPassword extends ValueObject {
  @Matches(HASH_PASSWORD_REGEX, { message: 'Invalid hash password' })
  private _value: string;

  constructor(value: string) {
    super();

    this._value = value;
  }

  public getValue() {
    return this._value;
  }

  public async compare(password: string) {
    return argon2.verify(password, this._value);
  }

  public async hash() {
    this._value = await argon2.hash(this._value);
  }

  public static async create(value: string) {
    const hashPassword = new HashPassword(value);
    await hashPassword.hash();
    await hashPassword.validate();

    return hashPassword;
  }
}
