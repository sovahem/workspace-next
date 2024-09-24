import * as z from "zod"
import { CompleteProduct, RelatedProductModel } from "./index"

export const CategoryModel = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  created_at: z.date(),
  last_updated_at: z.date(),
})

export interface CompleteCategory extends z.infer<typeof CategoryModel> {
  products: CompleteProduct[]
}

/**
 * RelatedCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCategoryModel: z.ZodSchema<CompleteCategory> = z.lazy(() => CategoryModel.extend({
  products: RelatedProductModel.array(),
}))
