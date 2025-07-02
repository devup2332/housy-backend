export default {
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret_key',
  SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET || 'default_secret_key',
  DATABASE_URL: process.env.DATABASE_URL || '',
  POSTGRES_USER: process.env.POSTGRES_USER || '',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '',
  POSTGRES_DB: process.env.POSTGRES_DB || '',
  POSTGRES_PORT: Number(process.env.POSTGRES_PORT) || 3000,
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
};
