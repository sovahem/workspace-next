/*
  Warnings:

  - You are about to drop the column `adjustment_value_type` on the `ProductPricingAdjustment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductPricingAdjustment" DROP COLUMN "adjustment_value_type",
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'fixed';
