/*
  Warnings:

  - The `created_by` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `product_id` on the `ProductImage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "created_by",
ADD COLUMN     "created_by" UUID;

-- AlterTable
ALTER TABLE "ProductImage" DROP COLUMN "product_id",
ADD COLUMN     "product_id" UUID NOT NULL;
