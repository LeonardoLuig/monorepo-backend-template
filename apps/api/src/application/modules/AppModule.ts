import { Module } from '@nestjs/common';

import { HealthController } from '#api/application/controllers/HealthController.js';

@Module({
  imports: [],
  controllers: [HealthController],
})
export class AppModule {}
