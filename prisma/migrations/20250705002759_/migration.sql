/*
  Warnings:

  - You are about to drop the column `business_id` on the `Categories` table. All the data in the column will be lost.
  - You are about to drop the column `business_id` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `business_id` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `business_id` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Business` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `company_id` to the `Categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "business_id",
ADD COLUMN     "company_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "business_id",
ADD COLUMN     "company_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "business_id",
ADD COLUMN     "company_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "business_id",
ADD COLUMN     "company_id" UUID NOT NULL;

-- DropTable
DROP TABLE "Business";

-- CreateTable
CREATE TABLE "Company" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "logo_url" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "owner_id" UUID NOT NULL,
    "sector" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
