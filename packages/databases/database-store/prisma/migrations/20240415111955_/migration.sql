/*
  Warnings:

  - You are about to drop the column `product_id` on the `ProductRental` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderProductOption" DROP CONSTRAINT "OrderProductOption_order_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductRental" DROP CONSTRAINT "ProductRental_product_id_fkey";

-- AlterTable
ALTER TABLE "ProductRental" DROP COLUMN "product_id",
ADD COLUMN     "product_variant_combination_id" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "ProductRental" ADD CONSTRAINT "ProductRental_product_variant_combination_id_fkey" FOREIGN KEY ("product_variant_combination_id") REFERENCES "ProductVariantCombination"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProductOption" ADD CONSTRAINT "OrderProductOption_order_product_id_fkey" FOREIGN KEY ("order_product_id") REFERENCES "OrderProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
