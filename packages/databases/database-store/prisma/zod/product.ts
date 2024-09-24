import { Decimal } from "decimal.js";
import { FindProductRelationship } from "src/entities/types-prisma";
import * as z from "zod";
import {
  CompleteCategory,
  CompleteOrderProduct,
  CompleteProductImage,
  CompleteProductPricingAdjustment,
  CompleteProductVariant,
  CompleteProductVariantCombination,
  ProductImageModel,
  ProductPricingAdjustmentModel,
  ProductVariantModel,
  ProductVariantOptionModel,
  PvcWithPvoModel,
  RelatedCategoryModel,
  RelatedOrderProductModel,
  RelatedProductImageModel,
  RelatedProductPricingAdjustmentModel,
  RelatedProductVariantCombinationModel,
  RelatedProductVariantModel,
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

export const ProductModel = z.object({
  id: z.string().optional(),
  category_id: z.string(),
  title: z.string(),
  description: z.string(),
  supplier: z.string(),
  delivery_time: z.string(),
  purchase_price: DecimalSchema,
  selling_price: DecimalSchema,
  sale: DecimalSchema,
  created_at: z.date().optional(),
  last_updated_at: z.date().optional(),
});

export interface CompleteProduct extends z.infer<typeof ProductModel> {
  category: CompleteCategory;
  product_images: CompleteProductImage[];
  product_variants_combinations: CompleteProductVariantCombination[];
  orders_products: CompleteOrderProduct[];
  product_variants: CompleteProductVariant[];
  pricing_adjustments: CompleteProductPricingAdjustment[];
}

/**
 * RelatedProductModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProductModel: z.ZodSchema<CompleteProduct> = z.lazy(() =>
  ProductModel.extend({
    category: RelatedCategoryModel,
    product_images: RelatedProductImageModel.array(),
    product_variants_combinations:
      RelatedProductVariantCombinationModel.array(),
    orders_products: RelatedOrderProductModel.array(),
    product_variants: RelatedProductVariantModel.array(),
    pricing_adjustments: RelatedProductPricingAdjustmentModel.array(),
  }),
);

export const ProductFormModel: z.ZodSchema<FindProductRelationship> = z.lazy(
  () =>
    ProductModel.extend({
      product_variants_options: ProductVariantOptionModel.array(),
      product_images: ProductImageModel.array(),
      product_variants: ProductVariantModel.array(),
      product_variants_combinations: PvcWithPvoModel.array(),
      product_pricing_adjustments: ProductPricingAdjustmentModel.array(),
    }),
);

export const ProductState: z.infer<typeof ProductModel> = {
  id: "",
  category_id: "",
  ean: "",
  title: "",
  description: "",
  supplier: "",
  delivery_time: "",
  purchase_price: 0,
  selling_price: 0,
  sale: 0,
  created_at: new Date(),
  last_updated_at: new Date(),
};

export const ProductFormState: z.infer<typeof ProductFormModel> = {
  ...ProductState,
  product_variants_combinations: [],
  product_images: [],
  product_variants: [],
  product_variants_options: [],
};
