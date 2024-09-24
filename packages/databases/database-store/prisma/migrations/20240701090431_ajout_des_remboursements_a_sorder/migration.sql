-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "stripe_refunds_id" TEXT[] DEFAULT ARRAY[]::TEXT[];
