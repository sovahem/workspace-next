/*
  Warnings:

  - You are about to drop the column `product_id` on the `ProductVariantOption` table. All the data in the column will be lost.
  - You are about to drop the column `variant_id` on the `ProductVariantOption` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductVariantOption" DROP CONSTRAINT "ProductVariantOption_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductVariantOption" DROP CONSTRAINT "ProductVariantOption_variant_id_fkey";

-- AlterTable
ALTER TABLE "ProductVariantOption" DROP COLUMN "product_id",
DROP COLUMN "variant_id";
