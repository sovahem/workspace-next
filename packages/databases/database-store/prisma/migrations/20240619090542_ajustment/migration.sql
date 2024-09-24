-- AlterTable
ALTER TABLE "ProductPricingAdjustment" ADD COLUMN     "adjustment_value_type" TEXT NOT NULL DEFAULT 'fixed',
ADD COLUMN     "rank" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "value" DECIMAL(65,30) NOT NULL DEFAULT 0;
