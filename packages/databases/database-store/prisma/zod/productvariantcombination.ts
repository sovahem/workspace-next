import { Decimal } from "decimal.js";
import * as z from "zod";
import {
  CompleteOrderProduct,
  CompleteProduct,
  CompleteProductRental,
  CompleteProductVariantOption,
  ProductVariantOptionModel,
  RelatedOrderProductModel,
  RelatedProductModel,
  RelatedProductRentalModel,
  RelatedProductVariantOptionModel,
} from "./index";

// Helper schema for Decimal fields
z.instanceof(Decimal)
  .or(z.string())
  .or(z.number())
  .refine((value) => {
    try {
      return new Decimal(value);
    } catch (error) {
      return false;
    }
  })
  .transform((value) => new Decimal(value));

const DecimalSchema = z.string().or(z.number());

export const ProductVariantCombinationModel = z.object({
  id: z.string().optional(),
  ref: z.string(),
  purchase_price: DecimalSchema,
  selling_price: DecimalSchema,
  week_end_price: DecimalSchema,
  more_than_seven_days_price: DecimalSchema,
  sale: DecimalSchema,
  caution: DecimalSchema,
  id_stripe: z.string().optional(),
  default_price_stripe: z.string().optional(),
  quantity_in_stock: z.number().or(z.string()),
  product_id: z.string().optional(),
  created_at: z.date().optional(),
  last_updated_at: z.date().optional(),
});

export interface CompleteProductVariantCombination
  extends z.infer<typeof ProductVariantCombinationModel> {
  product: CompleteProduct;
  product_variants_options: CompleteProductVariantOption[];
  orders_products: CompleteOrderProduct[];
  product_rentals: CompleteProductRental[];
}

/**
 * RelatedProductVariantCombinationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductVariantCombinationModel: z.ZodSchema<CompleteProductVariantCombination> =
  z.lazy(() =>
    ProductVariantCombinationModel.extend({
      product: RelatedProductModel,
      product_variants_options: RelatedProductVariantOptionModel.array(),
      orders_products: RelatedOrderProductModel.array(),
      product_rentals: RelatedProductRentalModel.array(),
    }),
  );

export const PvcWithPvoModel = z.lazy(() =>
  ProductVariantCombinationModel.extend({
    product_variants_options: ProductVariantOptionModel.array().optional(),
  }),
);
