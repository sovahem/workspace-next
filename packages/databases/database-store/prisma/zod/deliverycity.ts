import * as z from "zod"
import { Decimal } from "decimal.js"
import { CompleteOrder, RelatedOrderModel } from "./index"

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

export const DeliveryCityModel = z.object({
  id: z.string(),
  name: z.string(),
  shipping_fees: z.number(),
  created_at: z.date(),
  last_updated_at: z.date(),
})

export interface CompleteDeliveryCity extends z.infer<typeof DeliveryCityModel> {
  orders: CompleteOrder[]
}

/**
 * RelatedDeliveryCityModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDeliveryCityModel: z.ZodSchema<CompleteDeliveryCity> = z.lazy(() => DeliveryCityModel.extend({
  orders: RelatedOrderModel.array(),
}))
