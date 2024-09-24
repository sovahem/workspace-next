/*
  Warnings:

  - You are about to alter the column `shipping_fees` on the `DeliveryCity` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `price` on the `OrderProduct` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `sale` on the `OrderProduct` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `purchase_price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `selling_price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `sale` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `value` on the `ProductPricingAdjustment` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `purchase_price` on the `ProductVariantCombination` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `selling_price` on the `ProductVariantCombination` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `sale` on the `ProductVariantCombination` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `caution` on the `ProductVariantCombination` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "DeliveryCity" ALTER COLUMN "shipping_fees" SET DEFAULT 0,
ALTER COLUMN "shipping_fees" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "OrderProduct" ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "sale" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "purchase_price" SET DEFAULT 0,
ALTER COLUMN "purchase_price" SET DATA TYPE INTEGER,
ALTER COLUMN "selling_price" SET DATA TYPE INTEGER,
ALTER COLUMN "sale" SET DEFAULT 0,
ALTER COLUMN "sale" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "ProductPricingAdjustment" ALTER COLUMN "value" SET DEFAULT 0,
ALTER COLUMN "value" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "ProductVariantCombination" ALTER COLUMN "purchase_price" SET DEFAULT 0,
ALTER COLUMN "purchase_price" SET DATA TYPE INTEGER,
ALTER COLUMN "selling_price" SET DATA TYPE INTEGER,
ALTER COLUMN "sale" SET DEFAULT 0,
ALTER COLUMN "sale" SET DATA TYPE INTEGER,
ALTER COLUMN "caution" SET DEFAULT 0,
ALTER COLUMN "caution" SET DATA TYPE INTEGER;
