-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "stripe_caution_id" TEXT DEFAULT '',
ADD COLUMN     "stripe_customer_id" TEXT DEFAULT '',
ADD COLUMN     "stripe_payment_id" TEXT DEFAULT '';
