-- DropForeignKey
ALTER TABLE "ProductVariantOption" DROP CONSTRAINT "ProductVariantOption_product_id_fkey";

-- AlterTable
ALTER TABLE "ProductVariantOption" ALTER COLUMN "product_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductVariantOption" ADD CONSTRAINT "ProductVariantOption_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
