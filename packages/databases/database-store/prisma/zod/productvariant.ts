import * as z from "zod";
import {
  CompleteProduct,
  CompleteVariant,
  RelatedProductModel,
  RelatedVariantModel,
} from "./index";

export const ProductVariantModel = z.object({
  id: z.string().optional(),
  variant_id: z.string(),
  product_id: z.string().optional(),
  created_at: z.date().optional(),
  last_updated_at: z.date().optional(),
});

export interface CompleteProductVariant
  extends z.infer<typeof ProductVariantModel> {
  variant: CompleteVariant;
  product: CompleteProduct;
}

/**
 * RelatedProductVariantModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductVariantModel: z.ZodSchema<CompleteProductVariant> =
  z.lazy(() =>
    ProductVariantModel.extend({
      variant: RelatedVariantModel,
      product: RelatedProductModel,
    }),
  );
