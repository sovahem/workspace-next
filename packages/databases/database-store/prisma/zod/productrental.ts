import * as z from "zod"
import { CompleteProductVariantCombination, RelatedProductVariantCombinationModel, CompleteOrder, RelatedOrderModel } from "./index"

export const ProductRentalModel = z.object({
  id: z.string(),
  created_at: z.date(),
  last_updated_at: z.date(),
  product_variant_combination_id: z.string(),
  order_id: z.string(),
  date_from: z.date(),
  date_to: z.date(),
})

export interface CompleteProductRental extends z.infer<typeof ProductRentalModel> {
  product_variant_combination: CompleteProductVariantCombination
  order: CompleteOrder
}

/**
 * RelatedProductRentalModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductRentalModel: z.ZodSchema<CompleteProductRental> = z.lazy(() => ProductRentalModel.extend({
  product_variant_combination: RelatedProductVariantCombinationModel,
  order: RelatedOrderModel,
}))
