import { type NestMiddleware } from '@nestjs/common';
import { type RequestHandler } from '@nestjs/common/interfaces/index.js';
import { RedisStore } from 'connect-redis';
import { type NextFunction, type Request, type Response } from 'express';
import session, { type Store } from 'express-session';
import { type RedisClientType } from 'redis';

import { ServerConfig } from '@/config/ServerConfig.js';

type CookieSessionMiddlewareOptions = {
  client: RedisClientType;
};

export class CookieSessionMiddleware implements NestMiddleware {
  private readonly middleware: RequestHandler;

  constructor(private readonly options: CookieSessionMiddlewareOptions) {
    this.middleware = session({
      store: new RedisStore({ client: this.options.client }) as unknown as Store,
      secret: ServerConfig.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }) as RequestHandler;
  }

  public use(req: Request, res: Response, next: NextFunction) {
    this.middleware(req, res, next);
  }
}
