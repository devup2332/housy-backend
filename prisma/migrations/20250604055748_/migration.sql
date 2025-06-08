-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('google', 'email');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "provider" "AuthProvider" NOT NULL DEFAULT 'email';
