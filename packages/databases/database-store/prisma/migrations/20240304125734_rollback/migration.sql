/*
  Warnings:

  - Made the column `product_id` on table `ProductVariantOption` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ProductVariantOption" DROP CONSTRAINT "ProductVariantOption_product_id_fkey";

-- AlterTable
ALTER TABLE "ProductVariantOption" ALTER COLUMN "product_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductVariantOption" ADD CONSTRAINT "ProductVariantOption_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
