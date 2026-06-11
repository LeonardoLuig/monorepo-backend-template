import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CoreApiResponse } from '@/application/common/CoreApiResponse.js';

@Controller('health-check')
@ApiTags('Application Health Check')
export class HealthController {
  @Get()
  public healthCheck() {
    return CoreApiResponse.success();
  }
}
