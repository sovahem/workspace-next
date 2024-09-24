import {
  Layout,
  PricingAdjustment,
  PricingAdjustmentHour,
  PricingAdjustmentSpecificDate,
  ProductImage,
  ProductPricingAdjustment,
  ProductVariant,
} from "@prisma/client";
import { VariantWithOptionsType } from "prisma/zod/variant";

import { FindPricingAdjustment } from "./types-prisma";

export const LayoutState: Layout = {
  id: "",
  logo: "",
  logo_2: "",
  banner_desk: "",
  banner_mob: "",
  email: "",
  announcement_1: null,
  announcement_2: null,
  footer_message: null,
  terms_of_service_label: null,
  terms_of_service: null,
  privacy_policy_label: null,
  privacy_policy: null,
  refund_policy_label: null,
  refund_policy: null,
  consent_cookie_title: "",
  consent_cookie_text: "",
  consent_cookie_label_link: "",
  consent_confirm_label: "",
  consent_reject_label: "",
  message_1: null,
  message_2: null,
  instagram: null,
  tiktok: null,
  facebook: null,
  created_at: new Date(),
  last_updated_at: new Date(),
};

export const ProductImageState: ProductImage = {
  id: "",
  type: "",
  filename: "",
  is_main: false,
  variant_option_id: null,
  product_id: "",
  created_at: new Date(),
  last_updated_at: new Date(),
};

export const VariantWithOptionsState: VariantWithOptionsType = {
  id: "",
  name: "",
  created_at: new Date(),
  last_updated_at: new Date(),
  icon: null,
  options: [],
};

export const ProductVariantState: ProductVariant = {
  id: "",
  variant_id: "",
  product_id: "",
  created_at: new Date(),
  last_updated_at: new Date(),
};

export const findPricingAdjustmentState: FindPricingAdjustment = {
  id: "",
  name: "",
  type: "",
  months: [],
  days: [],
  hours: [],
  specifics_date: [],
};

export const PricingAdjustmentHourState: PricingAdjustmentHour = {
  id: "",
  pricing_adjustment_id: "",
  start_hour: "",
  end_hour: "",
  created_at: new Date(),
  last_updated_at: new Date(),
};

export const PricingAdjustmentSpecificDateState: PricingAdjustmentSpecificDate =
  {
    id: "",
    pricing_adjustment_id: "",
    from: null,
    to: null,
    created_at: new Date(),
    last_updated_at: new Date(),
  };

export const PricingAdjustmentState: PricingAdjustment = {
  id: "",
  name: "",
  type: "",
  months: [],
  days: [],
  created_at: new Date(),
  last_updated_at: new Date(),
};

export const ProductPricingAdjustmentState: ProductPricingAdjustment = {
  id: "",
  pricing_adjustment_id: "",
  product_id: "",
  type: "fixed",
  rank: 0,
  value: "1",
  created_at: new Date(),
  last_updated_at: new Date(),
};
