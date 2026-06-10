import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ApiResponse } from '#api/application/common/ApiResponse.js';

@Controller('health-check')
@ApiTags('Application Health Check')
export class HealthController {
  @Get()
  public healthCheck() {
    return ApiResponse.success();
  }
}
