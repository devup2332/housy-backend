-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brand" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "color" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "height" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "length" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "min_stock" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "sku" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "weight" DECIMAL(10,2) NOT NULL DEFAULT 0,
ADD COLUMN     "width" DECIMAL(10,2) NOT NULL DEFAULT 0;
