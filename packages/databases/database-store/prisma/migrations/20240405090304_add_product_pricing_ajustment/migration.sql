-- CreateTable
CREATE TABLE "ProductPricingAdjustment" (
    "id" TEXT NOT NULL,
    "pricing_adjustment_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductPricingAdjustment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductPricingAdjustment" ADD CONSTRAINT "ProductPricingAdjustment_pricing_adjustment_id_fkey" FOREIGN KEY ("pricing_adjustment_id") REFERENCES "PricingAdjustment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPricingAdjustment" ADD CONSTRAINT "ProductPricingAdjustment_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
