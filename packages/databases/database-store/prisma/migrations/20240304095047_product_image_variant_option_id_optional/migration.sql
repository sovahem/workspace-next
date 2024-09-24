-- DropForeignKey
ALTER TABLE "ProductImage" DROP CONSTRAINT "ProductImage_variant_option_id_fkey";

-- AlterTable
ALTER TABLE "ProductImage" ALTER COLUMN "variant_option_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_variant_option_id_fkey" FOREIGN KEY ("variant_option_id") REFERENCES "VariantOption"("id") ON DELETE SET NULL ON UPDATE CASCADE;
