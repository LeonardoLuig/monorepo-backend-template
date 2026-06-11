import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { type NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, type OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

import { AppModule } from '@/application/modules/AppModule.js';
import { ServerConfig } from '@/config/ServerConfig.js';

export class ServerApplication {
  constructor(private readonly app: NestExpressApplication) {}

  public static async create() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    return new ServerApplication(app);
  }

  private setupDocumentation() {
    const title = 'API Swagger Documentation';
    const description = '';
    const version = '1.0.0';

    const options: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addCookieAuth()
      .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(this.app, options);
    SwaggerModule.setup('documentation', this.app, document);
  }

  private setupMiddlewares() {
    this.app.use(cookieParser());

    // this.app.use(
    //   session({
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    //     store: new RedisStore({ client: this.app.get(RedisClient) }),
    //     secret: ServerConfig.SESSION_SECRET,
    //     resave: false,
    //     saveUninitialized: false,
    //   }),
    // );
  }

  public async run() {
    this.setupMiddlewares();
    this.setupDocumentation();

    await this.app.listen(ServerConfig.PORT, () => {
      Logger.log(`Server running on port ${ServerConfig.PORT}`);
    });
  }
}
