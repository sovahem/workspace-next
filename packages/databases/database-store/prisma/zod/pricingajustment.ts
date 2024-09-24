import { z } from "@repo/functions-next";
import {
  CompletePricingAdjustmentHour,
  CompletePricingAdjustmentSpecificDate,
  CompleteProductPricingAdjustment,
  RelatedPricingAdjustmentHourModel,
  RelatedPricingAdjustmentSpecificDateModel,
  RelatedProductPricingAdjustmentModel,
} from "./index";

export const PricingAdjustmentModel = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  months: z.number().int().array(),
  days: z.number().int().array(),
  created_at: z.date(),
  last_updated_at: z.date(),
});

export interface CompletePricingAdjustment
  extends z.infer<typeof PricingAdjustmentModel> {
  hours: CompletePricingAdjustmentHour[];
  specifics_date: CompletePricingAdjustmentSpecificDate[];
  product_pricing_adjustments: CompleteProductPricingAdjustment[];
}

/**
 * RelatedPricingAdjustmentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPricingAdjustmentModel: z.ZodSchema<CompletePricingAdjustment> =
  z.lazy(() =>
    PricingAdjustmentModel.extend({
      hours: RelatedPricingAdjustmentHourModel.array(),
      specifics_date: RelatedPricingAdjustmentSpecificDateModel.array(),
      product_pricing_adjustments: RelatedProductPricingAdjustmentModel.array(),
    }),
  );
