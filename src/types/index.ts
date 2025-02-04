import { z } from 'zod'
import { CategoriesApiResponseSchema, SearchFilterSchema } from '../schemas/recipes-schema'

export type Category=z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter=z.infer<typeof SearchFilterSchema>