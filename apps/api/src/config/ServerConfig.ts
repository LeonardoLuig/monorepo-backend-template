import env from 'env-var';

export class ServerConfig {
  public static readonly PORT = env.get('API_PORT').required().asPortNumber();

  public static readonly HOST = env.get('API_HOST').default('127.0.0.1').asString();

  public static readonly LOG_ENABLE = env.get('API_LOG_ENABLE').default(0).asBool();

  public static readonly ALLOW_ORIGINS = env.get('API_ALLOW_ORIGINS').default('127.0.0.1').asArray();

  public static readonly SESSION_SECRET = env.get('API_SESSION_SECRET').required().asString();

  public static readonly JWT_SECRET = env.get('API_JWT_SECRET').required().asString();

  public static readonly ACCESS_TOKEN_TTL = env.get('API_ACCESS_TOKEN_TTL').required().asString();

  public static readonly REFRESH_TOKEN_TTL = env.get('API_REFRESH_TOKEN_TTL').required().asString();

  public static readonly COOKIE_TTL = env.get('API_COOKIE_TTL').required().asInt();

  public static readonly COOKIE_SECURE = env.get('API_COOKIE_SECURE').asBool();

  public static readonly COOKIE_HTTP_ONLY = env.get('API_COOKIE_HTTP_ONLY').asBool();

  public static readonly COOKIE_SAMESITE = env.get('API_COOKIE_SAMESITE').asBool();
}
