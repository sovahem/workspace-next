-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_product_variant_combination_id_fkey";

-- AlterTable
ALTER TABLE "OrderProduct" ALTER COLUMN "product_variant_combination_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_product_variant_combination_id_fkey" FOREIGN KEY ("product_variant_combination_id") REFERENCES "ProductVariantCombination"("id") ON DELETE SET NULL ON UPDATE CASCADE;
