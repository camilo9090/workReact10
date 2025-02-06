import { z } from 'zod'
import { CategoriesApiResponseSchema, DrinkAPIResponseSchema, DrinksAPIResponseSchemas, SearchFilterSchema } from '../schemas/recipes-schema'

export type Category=z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter=z.infer<typeof SearchFilterSchema>
export type Drinks=z.infer<typeof DrinksAPIResponseSchemas>
export type Drink=z.infer<typeof DrinkAPIResponseSchema>