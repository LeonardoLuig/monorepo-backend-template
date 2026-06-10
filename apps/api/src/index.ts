import { ServerApplication } from '#api/application/ServerApplication.js';

async function bootstrap() {
  const serverApplication = await ServerApplication.create();
  await serverApplication.run();
}
await bootstrap();
