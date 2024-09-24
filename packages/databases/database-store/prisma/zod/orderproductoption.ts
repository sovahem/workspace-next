import * as z from "zod"
import { CompleteOrderProduct, RelatedOrderProductModel } from "./index"

export const OrderProductOptionModel = z.object({
  id: z.string(),
  order_product_id: z.string(),
  option_name: z.string(),
  option_value: z.string(),
  created_at: z.date(),
  last_updated_at: z.date(),
})

export interface CompleteOrderProductOption extends z.infer<typeof OrderProductOptionModel> {
  order_product: CompleteOrderProduct
}

/**
 * RelatedOrderProductOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrderProductOptionModel: z.ZodSchema<CompleteOrderProductOption> = z.lazy(() => OrderProductOptionModel.extend({
  order_product: RelatedOrderProductModel,
}))
