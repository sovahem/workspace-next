import * as z from "zod"
import { Decimal } from "decimal.js"
import { CompleteOrder, RelatedOrderModel, CompleteProduct, RelatedProductModel, CompleteProductVariantCombination, RelatedProductVariantCombinationModel, CompleteOrderProductOption, RelatedOrderProductOptionModel } from "./index"

// Helper schema for Decimal fields
z
  .instanceof(Decimal)
  .or(z.string())
  .or(z.number())
  .refine((value) => {
    try {
      return new Decimal(value)
    } catch (error) {
      return false
    }
  })
  .transform((value) => new Decimal(value))

export const OrderProductModel = z.object({
  id: z.string(),
  order_id: z.string(),
  product_id: z.string(),
  product_variant_combination_id: z.string(),
  price: z.number(),
  quantity: z.number().int(),
  sale: z.number(),
  name: z.string(),
  created_at: z.date(),
  last_updated_at: z.date(),
})

export interface CompleteOrderProduct extends z.infer<typeof OrderProductModel> {
  order: CompleteOrder
  product: CompleteProduct
  product_variant_combination: CompleteProductVariantCombination
  orders_products_options: CompleteOrderProductOption[]
}

/**
 * RelatedOrderProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrderProductModel: z.ZodSchema<CompleteOrderProduct> = z.lazy(() => OrderProductModel.extend({
  order: RelatedOrderModel,
  product: RelatedProductModel,
  product_variant_combination: RelatedProductVariantCombinationModel,
  orders_products_options: RelatedOrderProductOptionModel.array(),
}))
