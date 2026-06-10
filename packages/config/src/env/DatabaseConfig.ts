import { get } from 'env-var';

export class DatabaseConfig {
  public static readonly URL = get('DATABASE_URL').required().asString();
}
