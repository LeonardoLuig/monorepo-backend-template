import { Code } from '@/common/code/Code.js';
import { Exception } from '@/common/exception/Exception.js';
import { type Optional } from '@/common/types/common-types.js';
import { ClassValidator, type ClassValidatorDetails } from '@/common/utils/class-validator/ClassValidator.js';

export class Entity<TIdentity extends string | number> {
  protected id: Optional<TIdentity>;

  public getId(): TIdentity {
    if (!this.id) {
      throw Exception.create({
        code: Code.ENTITY_VALIDATION_ERROR,
        overrideMessage: `${this.constructor.name}: ID is empty.`,
      });
    }

    return this.id;
  }

  public async validate(): Promise<void> {
    const details: Optional<ClassValidatorDetails> = await ClassValidator.validate(this);
    if (details) {
      throw Exception.create({
        code: Code.ENTITY_VALIDATION_ERROR,
        data: details,
      });
    }
  }
}
