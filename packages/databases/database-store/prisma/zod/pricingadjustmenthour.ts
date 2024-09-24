import * as z from "zod"
import { CompletePricingAdjustment, RelatedPricingAdjustmentModel } from "./index"

export const PricingAdjustmentHourModel = z.object({
  id: z.string(),
  pricing_adjustment_id: z.string(),
  start_hour: z.string(),
  end_hour: z.string(),
  created_at: z.date(),
  last_updated_at: z.date(),
})

export interface CompletePricingAdjustmentHour extends z.infer<typeof PricingAdjustmentHourModel> {
  pricing_adjustment: CompletePricingAdjustment
}

/**
 * RelatedPricingAdjustmentHourModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPricingAdjustmentHourModel: z.ZodSchema<CompletePricingAdjustmentHour> = z.lazy(() => PricingAdjustmentHourModel.extend({
  pricing_adjustment: RelatedPricingAdjustmentModel,
}))
