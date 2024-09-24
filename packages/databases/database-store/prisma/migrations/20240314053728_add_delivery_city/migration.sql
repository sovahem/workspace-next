/*
  Warnings:

  - Added the required column `delivery_city_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `product_id` on table `OrderProduct` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_variant_combination_id` on table `OrderProduct` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_product_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_product_variant_combination_id_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "delivery_city_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OrderProduct" ALTER COLUMN "product_id" SET NOT NULL,
ALTER COLUMN "product_variant_combination_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "DeliveryCity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shipping_fees" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeliveryCity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryCity_name_key" ON "DeliveryCity"("name");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_delivery_city_id_fkey" FOREIGN KEY ("delivery_city_id") REFERENCES "DeliveryCity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_product_variant_combination_id_fkey" FOREIGN KEY ("product_variant_combination_id") REFERENCES "ProductVariantCombination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
