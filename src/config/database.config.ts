export const databaseConfig = {
  DATABASE_URL: process.env.DATABASE_URL || '',
  DATABASE_USER: process.env.POSTGRES_USER || '',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '',
  DATABASE_DB: process.env.POSTGRES_DB || '',
  DATABASE_PORT: Number(process.env.POSTGRES_PORT) || 3000,
  DATABASE_HOST: process.env.POSTGRES_HOST || 'localhost',
};
