import { DatabaseConfig } from '@packages/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: ['./src/core/infrastructure/drizzle/schema/*.ts'],
  out: './src/core/infrastructure/drizzle/migration',
  dbCredentials: {
    url: DatabaseConfig.URL,
  },
  migrations: {
    table: 'migrations',
    schema: 'public',
  },
});
