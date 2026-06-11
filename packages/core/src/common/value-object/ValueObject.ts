import { Code } from '@/common/code/Code.js';
import { Exception } from '@/common/exception/Exception.js';
import { ClassValidator } from '@/common/utils/class-validator/ClassValidator.js';

export class ValueObject {
  public async validate(): Promise<void> {
    const details = await ClassValidator.validate(this);
    if (details) {
      throw Exception.create({ code: Code.VALUE_OBJECT_VALIDATION_ERROR, data: details });
    }
  }
}
