import { validate } from 'class-validator';

import { type Optional } from '#core/common/types/common-types.js';

export interface ClassValidatorError {
  property: string;
  message: string[];
  children: Optional<ClassValidatorError[]>;
}

export interface ClassValidatorDetails {
  context: string;
  errors: ClassValidatorError[];
}

export class ClassValidator {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  public static async validate<TTarget extends object>(
    target: TTarget,
    context?: string,
  ): Promise<Optional<ClassValidatorDetails>> {
    let details: Optional<ClassValidatorDetails>;
    const errors = await validate(target);

    if (errors.length) {
      details = {
        context: context ?? target.constructor.name,
        errors: [],
      };
    }

    return details;
  }
}
