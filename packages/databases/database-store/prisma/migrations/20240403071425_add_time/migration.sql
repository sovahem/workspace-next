-- CreateTable
CREATE TABLE "PricingAdjustment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'repeat',
    "months" INTEGER[],
    "days" INTEGER[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingAdjustment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingAdjustmentHour" (
    "id" TEXT NOT NULL,
    "pricing_adjustment_id" TEXT NOT NULL,
    "start_hour" TEXT NOT NULL,
    "end_hour" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingAdjustmentHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PricingAdjustmentSpecificDate" (
    "id" TEXT NOT NULL,
    "pricing_adjustment_id" TEXT NOT NULL,
    "from" TIMESTAMP(3),
    "to" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingAdjustmentSpecificDate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PricingAdjustmentHour" ADD CONSTRAINT "PricingAdjustmentHour_pricing_adjustment_id_fkey" FOREIGN KEY ("pricing_adjustment_id") REFERENCES "PricingAdjustment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingAdjustmentSpecificDate" ADD CONSTRAINT "PricingAdjustmentSpecificDate_pricing_adjustment_id_fkey" FOREIGN KEY ("pricing_adjustment_id") REFERENCES "PricingAdjustment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
