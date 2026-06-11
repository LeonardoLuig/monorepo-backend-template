import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

import { UseCaseAdapter } from '@/common/usecase/adapter/UseCaseAdapter.js';
import { TimePaginationUseCasePort } from '@/common/usecase/port/TimePaginationUseCasePort.js';

export abstract class TimePaginationUseCaseAdapter extends UseCaseAdapter implements TimePaginationUseCasePort {
  @IsString()
  public since: string;

  @IsString()
  public until: string;

  @IsNumber()
  @Type(() => Number)
  public limit: number;
}
