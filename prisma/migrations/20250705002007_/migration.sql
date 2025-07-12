/*
  Warnings:

  - Added the required column `trashed_at` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sales" ADD COLUMN     "trashed_at" TIMESTAMP(3) NOT NULL;
