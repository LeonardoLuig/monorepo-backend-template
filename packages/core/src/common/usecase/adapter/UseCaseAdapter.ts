import { Code } from '#core/common/code/Code.js';
import { Exception } from '#core/common/exception/Exception.js';
import { ClassValidator } from '#core/common/utils/class-validator/ClassValidator.js';

export abstract class UseCaseAdapter {
  public async validate(): Promise<void> {
    const details = await ClassValidator.validate(this);
    if (details) {
      throw Exception.create({
        code: Code.USE_CASE_PORT_VALIDATON_ERROR,
        data: details,
      });
    }
  }
}
