import { z } from 'zod'
import { CategoriesApiResponseSchema } from '../schemas/recipes-schema'

export type Category=z.infer<typeof CategoriesApiResponseSchema>