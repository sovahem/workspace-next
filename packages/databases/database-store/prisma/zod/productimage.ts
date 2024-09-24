import * as z from "zod";
import {
  CompleteProduct,
  CompleteVariantOption,
  RelatedProductModel,
  RelatedVariantOptionModel,
} from "./index";

export const ProductImageModel = z.object({
  id: z.string().optional(),
  filename: z.string(),
  is_main: z.boolean().optional(),
  variant_option_id: z.string().nullable().optional(),
  product_id: z.string().optional(),
  created_at: z.date().optional(),
  last_updated_at: z.date().optional(),
  type: z.string().default("img").optional(),
});

export interface CompleteProductImage
  extends z.infer<typeof ProductImageModel> {
  variant_option?: CompleteVariantOption | null;
  product: CompleteProduct;
}

/**
 * RelatedProductImageModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductImageModel: z.ZodSchema<CompleteProductImage> =
  z.lazy(() =>
    ProductImageModel.extend({
      variant_option: RelatedVariantOptionModel.nullish(),
      product: RelatedProductModel,
    }),
  );
