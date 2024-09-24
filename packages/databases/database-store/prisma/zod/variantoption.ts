import * as z from "zod";
import {
  CompleteProductImage,
  CompleteProductVariantOption,
  CompleteVariant,
  RelatedProductImageModel,
  RelatedProductVariantOptionModel,
  RelatedVariantModel,
} from "./index";

export const VariantOptionModel = z.object({
  id: z.string(),
  value: z.string(),
  order: z.number().int().nullish(),
  variant_id: z.string(),
  created_at: z.date(),
  last_updated_at: z.date(),
});

export interface CompleteVariantOption
  extends z.infer<typeof VariantOptionModel> {
  variant: CompleteVariant;
  product_images: CompleteProductImage[];
  product_variants_options: CompleteProductVariantOption[];
}

/**
 * RelatedVariantOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVariantOptionModel: z.ZodSchema<CompleteVariantOption> =
  z.lazy(() =>
    VariantOptionModel.extend({
      variant: RelatedVariantModel,
      product_images: RelatedProductImageModel.array(),
      product_variants_options: RelatedProductVariantOptionModel.array(),
    }),
  );

export type VariantOptionType = z.infer<typeof VariantOptionModel>;

export const VariantOptionState: VariantOptionType = {
  id: "",
  value: "",
  order: 0,
  variant_id: "",
  created_at: new Date(),
  last_updated_at: new Date(),
};
