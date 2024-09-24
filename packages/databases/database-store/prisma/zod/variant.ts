import { Variant, VariantOption } from "@prisma/client";
import { FindVariantWithOptions } from "src/entities/types-prisma";
import * as z from "zod";
import {
  CompleteProductVariant,
  CompleteVariantOption,
  RelatedProductVariantModel,
  RelatedVariantOptionModel,
  VariantOptionModel,
} from "./index";

export const VariantModel = z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.date(),
  last_updated_at: z.date(),
  icon: z.string().nullish(),
});

export interface CompleteVariant extends z.infer<typeof VariantModel> {
  options: CompleteVariantOption[];
  product_variants: CompleteProductVariant[];
}

/**
 * RelatedVariantModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedVariantModel: z.ZodSchema<CompleteVariant> = z.lazy(() =>
  VariantModel.extend({
    options: RelatedVariantOptionModel.array(),
    product_variants: RelatedProductVariantModel.array(),
  }),
);

export type VariantWithOptionsType = Variant & { options: VariantOption[] };

export const VariantWithOptionsModel: z.ZodSchema<FindVariantWithOptions> =
  z.lazy(() =>
    VariantModel.extend({
      options: VariantOptionModel.array(),
    }),
  );
