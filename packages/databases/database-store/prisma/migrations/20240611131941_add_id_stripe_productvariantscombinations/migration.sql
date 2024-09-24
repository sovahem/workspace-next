-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "supplier" DROP NOT NULL,
ALTER COLUMN "supplier" SET DEFAULT '',
ALTER COLUMN "delivery_time" DROP NOT NULL,
ALTER COLUMN "delivery_time" SET DEFAULT '';

-- AlterTable
ALTER TABLE "ProductVariantCombination" ADD COLUMN     "id_stripe" TEXT NOT NULL DEFAULT '';
