-- AlterTable
ALTER TABLE "ProductVariantCombination" ADD COLUMN     "more_than_seven_days_price" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "week_end_price" DECIMAL(65,30) NOT NULL DEFAULT 0;
