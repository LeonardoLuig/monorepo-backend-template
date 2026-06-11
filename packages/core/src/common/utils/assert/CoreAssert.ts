import { type Nullable, type Optional } from '@/common/types/common-types.js';

export class CoreAssert {
  public static isTrue(expression: boolean, exception: Error): void {
    if (!expression) throw exception;
  }

  public static isFalse(expression: boolean, exception: Error): void {
    if (expression) throw exception;
  }

  public static notEmpty<T>(value: Optional<Nullable<T>>, exception: Error): T {
    if (value === undefined || value === null) throw exception;

    return value;
  }
}
