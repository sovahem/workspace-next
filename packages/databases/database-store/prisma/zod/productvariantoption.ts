import * as z from "zod";
import {
  CompleteProductVariantCombination,
  CompleteVariantOption,
  RelatedProductVariantCombinationModel,
  RelatedVariantOptionModel,
} from "./index";

export const ProductVariantOptionModel = z.object({
  id: z.string().optional(),
  product_variant_combination_id: z.string(),
  variant_option_id: z.string(),
  created_at: z.date().optional(),
  last_updated_at: z.date().optional(),
});

export interface CompleteProductVariantOption
  extends z.infer<typeof ProductVariantOptionModel> {
  product_variant_combination: CompleteProductVariantCombination;
  variant_option: CompleteVariantOption;
}

/**
 * RelatedProductVariantOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductVariantOptionModel: z.ZodSchema<CompleteProductVariantOption> =
  z.lazy(() =>
    ProductVariantOptionModel.extend({
      product_variant_combination: RelatedProductVariantCombinationModel,
      variant_option: RelatedVariantOptionModel,
    }),
  );
