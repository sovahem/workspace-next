import * as z from "zod"

export const LayoutModel = z.object({
  id: z.string(),
  logo: z.string(),
  logo_2: z.string(),
  banner_desk: z.string(),
  banner_mob: z.string(),
  email: z.string(),
  announcement_1: z.string().nullish(),
  announcement_2: z.string().nullish(),
  footer_message: z.string().nullish(),
  terms_of_service_label: z.string().nullish(),
  terms_of_service: z.string().nullish(),
  privacy_policy_label: z.string().nullish(),
  privacy_policy: z.string().nullish(),
  refund_policy_label: z.string().nullish(),
  refund_policy: z.string().nullish(),
  consent_cookie_title: z.string(),
  consent_cookie_text: z.string(),
  consent_cookie_label_link: z.string(),
  consent_confirm_label: z.string(),
  consent_reject_label: z.string(),
  message_1: z.string().nullish(),
  message_2: z.string().nullish(),
  instagram: z.string().nullish(),
  tiktok: z.string().nullish(),
  facebook: z.string().nullish(),
  created_at: z.date(),
  last_updated_at: z.date(),
})
