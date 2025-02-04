import { StateCreator } from "zustand"
import { getCategories, searchRecipes } from "../services/RecipesServices"
import type { Category, SearchFilter } from "../types"



export type RecipeSliceType = {
    categories: Category
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}
export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({

    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({ categories })

    },
    searchRecipes: async (filters) => {

        await searchRecipes(filters)

    }
})