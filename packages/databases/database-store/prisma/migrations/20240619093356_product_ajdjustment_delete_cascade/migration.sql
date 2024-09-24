-- DropForeignKey
ALTER TABLE "ProductPricingAdjustment" DROP CONSTRAINT "ProductPricingAdjustment_pricing_adjustment_id_fkey";

-- AddForeignKey
ALTER TABLE "ProductPricingAdjustment" ADD CONSTRAINT "ProductPricingAdjustment_pricing_adjustment_id_fkey" FOREIGN KEY ("pricing_adjustment_id") REFERENCES "PricingAdjustment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
