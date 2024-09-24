import { z } from "@repo/functions-next";
import {
  CompletePricingAdjustment,
  CompleteProduct,
  RelatedPricingAdjustmentModel,
  RelatedProductModel,
} from "./index";

export const ProductPricingAdjustmentModel = z.object({
  id: z.string(),
  pricing_adjustment_id: z.string(),
  product_id: z.string(),
  created_at: z.date(),
  last_updated_at: z.date(),
});

export interface CompleteProductPricingAdjustment
  extends z.infer<typeof ProductPricingAdjustmentModel> {
  pricing_adjustment: CompletePricingAdjustment;
  product: CompleteProduct;
}

/**
 * RelatedProductPricingAdjustmentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductPricingAdjustmentModel: z.ZodSchema<CompleteProductPricingAdjustment> =
  z.lazy(() =>
    ProductPricingAdjustmentModel.extend({
      pricing_adjustment: RelatedPricingAdjustmentModel,
      product: RelatedProductModel,
    }),
  );
