-- DropForeignKey
ALTER TABLE "VariantOption" DROP CONSTRAINT "VariantOption_variant_id_fkey";

-- AddForeignKey
ALTER TABLE "VariantOption" ADD CONSTRAINT "VariantOption_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "Variant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
