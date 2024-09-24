import * as z from "zod"
import { CompleteDeliveryCity, RelatedDeliveryCityModel, CompleteOrderProduct, RelatedOrderProductModel, CompleteProductRental, RelatedProductRentalModel } from "./index"

export const OrderModel = z.object({
  id: z.string(),
  lastname: z.string(),
  firstname: z.string(),
  email: z.string(),
  address: z.string(),
  postal_code: z.string(),
  city: z.string(),
  country: z.string(),
  phone: z.string(),
  status: z.string(),
  order_number: z.string().nullish(),
  payment_option: z.string(),
  delivery_city_id: z.string(),
  nif: z.string().nullish(),
  created_at: z.date(),
  last_updated_at: z.date(),
})

export interface CompleteOrder extends z.infer<typeof OrderModel> {
  delivery_city: CompleteDeliveryCity
  orders_products: CompleteOrderProduct[]
  product_rentals: CompleteProductRental[]
}

/**
 * RelatedOrderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOrderModel: z.ZodSchema<CompleteOrder> = z.lazy(() => OrderModel.extend({
  delivery_city: RelatedDeliveryCityModel,
  orders_products: RelatedOrderProductModel.array(),
  product_rentals: RelatedProductRentalModel.array(),
}))
