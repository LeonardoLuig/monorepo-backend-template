import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

import { UseCaseAdapter } from '#core/common/usecase/adapter/UseCaseAdapter.js';
import { type CursorPaginationUseCasePort } from '#core/common/usecase/port/CursorPaginationUseCasePort.js';

export abstract class CursorPaginationUseCaseAdapter extends UseCaseAdapter implements CursorPaginationUseCasePort {
  @IsString()
  public cursor: string;

  @IsNumber()
  @Type(() => Number)
  public limit: number;
}
