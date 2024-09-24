import { Prisma } from "@prisma/client";
import { z } from "@repo/functions-next";
import {
  findCategoriesID,
  findCategory,
  findCategoryWithRelations,
  findDeliveryCities,
  findLayout,
  findOrder,
  findOrders,
  findPricingAdjustment,
  findPricingAdjustmentHour,
  findPricingAdjustments,
  findPricingAdjustmentSpecificDate,
  findProduct,
  findProductCard,
  findProductDetail,
  findProductPricingAdjustments,
  findProductRelationship,
  findProductsByCategoryID,
  findProductsHomePage,
  findProductsIDByCategory,
  findProductVariantCombination,
  findProductVariantCombinationsWithOption,
  findProductVariants,
  findProductVariantsCombinations,
  findVariantsByIDs,
  findVariantsWithOptions,
  findVariantWithOptions,
} from "./requests-prisma";

export type FindCategoriesID = Prisma.PromiseReturnType<
  typeof findCategoriesID
>;

export type FindCategoryWithRelations = Prisma.PromiseReturnType<
  typeof findCategoryWithRelations
>;

export type FindCategory = Prisma.PromiseReturnType<typeof findCategory>;

export type FindProductsIDByCategory = Prisma.PromiseReturnType<
  typeof findProductsIDByCategory
>;

export type FindProductCard = Prisma.PromiseReturnType<typeof findProductCard>;

export type FindVariantsWithOptions = Prisma.PromiseReturnType<
  typeof findVariantsWithOptions
>;

export type FindVariantWithOptions = Prisma.PromiseReturnType<
  typeof findVariantWithOptions
>;

export const findVariantOptionState = {
  id: "",
  value: "",
  order: 0,
  variant_id: "",
};

export const findVariantWithOptionsState: FindVariantWithOptions = {
  id: "",
  name: "",
  icon: null,
  options: [],
};

export type FindProductRelationship = Prisma.PromiseReturnType<
  typeof findProductRelationship
>;

export type FindPricingAdjustments = Prisma.PromiseReturnType<
  typeof findPricingAdjustments
>;

export type FindPricingAdjustment = Prisma.PromiseReturnType<
  typeof findPricingAdjustment
>;

export type FindOrders = Prisma.PromiseReturnType<typeof findOrders>;

export type FindOrder = Prisma.PromiseReturnType<typeof findOrder>;

export type FindProductVariantCombinationsWithOption = Prisma.PromiseReturnType<
  typeof findProductVariantCombinationsWithOption
>;

export type FindLayout = Prisma.PromiseReturnType<typeof findLayout>;

export type FindProductsByCategoryID = Prisma.PromiseReturnType<
  typeof findProductsByCategoryID
>;

export type FindProduct = Prisma.PromiseReturnType<typeof findProduct>;

export const VariantWithOptionsSchema = z.object({
  id: z.string(),
  name: z.string(),
  options: z.array(
    z.object({
      id: z.string(),
      value: z.string(),
      order: z.number(),
      variant_id: z.string(),
    }),
  ),
});

export const findProductRelationshipState: FindProductRelationship = {
  id: "",
  title: "",
  description: "",
  supplier: "",
  delivery_time: "",
  purchase_price: new Prisma.Decimal(0),
  selling_price: new Prisma.Decimal(0),
  sale: new Prisma.Decimal(0),
  product_images: [],
  product_variants_combinations: [],
  product_variants: [],
  product_variants_options: [],
};

export const categoryState: FindCategory = {
  name: "",
  id: "",
  type: "",
};

// TMP

export type FindProductDetail = Prisma.PromiseReturnType<
  typeof findProductDetail
>;

export type FindProductVariantsCombinations = Prisma.PromiseReturnType<
  typeof findProductVariantsCombinations
>;

export type FindProductVariants = Prisma.PromiseReturnType<
  typeof findProductVariants
>;

export type FindVariantsByIDs = Prisma.PromiseReturnType<
  typeof findVariantsByIDs
>;

export type FindProductVariantCombination = Prisma.PromiseReturnType<
  typeof findProductVariantCombination
>;

export type FindDeliveryCities = Prisma.PromiseReturnType<
  typeof findDeliveryCities
>;

export type FindPricingAdjustmentHour = Prisma.PromiseReturnType<
  typeof findPricingAdjustmentHour
>;

export type FindPricingAdjustmentSpecificDate = Prisma.PromiseReturnType<
  typeof findPricingAdjustmentSpecificDate
>;

export type FindProductsHomePage = Prisma.PromiseReturnType<
  typeof findProductsHomePage
>;

export type FindProductPricingAdjustments = Prisma.PromiseReturnType<
  typeof findProductPricingAdjustments
>;
