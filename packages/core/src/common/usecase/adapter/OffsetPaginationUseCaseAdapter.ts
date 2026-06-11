import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

import { UseCaseAdapter } from '@/common/usecase/adapter/UseCaseAdapter.js';
import { OffsetPaginationUseCasePort } from '@/common/usecase/port/OffsetPaginationUseCasePort.js';

export abstract class OffsetPaginationUseCaseAdapter extends UseCaseAdapter implements OffsetPaginationUseCasePort {
  @IsNumber()
  @Type(() => Number)
  public page: number;

  @IsNumber()
  @Type(() => Number)
  public limit: number;
}
