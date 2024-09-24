import { z } from "@repo/functions-next";

import {
  CompletePricingAdjustment,
  RelatedPricingAdjustmentModel,
} from "./index";

export const PricingAdjustmentSpecificDateModel = z.object({
  id: z.string(),
  pricing_adjustment_id: z.string(),
  from: z.date().nullish(),
  to: z.date().nullish(),
  created_at: z.date(),
  last_updated_at: z.date(),
});

export interface CompletePricingAdjustmentSpecificDate
  extends z.infer<typeof PricingAdjustmentSpecificDateModel> {
  pricing_adjustment: CompletePricingAdjustment;
}

/**
 * RelatedPricingAdjustmentSpecificDateModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPricingAdjustmentSpecificDateModel: z.ZodSchema<CompletePricingAdjustmentSpecificDate> =
  z.lazy(() =>
    PricingAdjustmentSpecificDateModel.extend({
      pricing_adjustment: RelatedPricingAdjustmentModel,
    }),
  );
