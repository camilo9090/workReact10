import { StateCreator } from "zustand"
import { getCategories, searchRecipes } from "../services/RecipesServices"
import type { Category, Drinks, SearchFilter } from "../types"



export type RecipeSliceType = {
    categories: Category
    drinks:Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}
export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({

    categories: {
        drinks: []
    },
    drinks:{

        drinks:[]
    }
    ,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({ categories })

    },
    searchRecipes: async (filters) => {

       const drinks= await searchRecipes(filters)
       set({drinks})

    }
})