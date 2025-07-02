-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "created_by" TEXT;

-- CreateTable
CREATE TABLE "ProductImage" (
    "id" UUID NOT NULL,
    "product_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);
