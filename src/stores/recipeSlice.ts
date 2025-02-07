import { StateCreator } from "zustand"
import { getCategories, getRecipeById, searchRecipes } from "../services/RecipesServices"
import type { Category, Drink, Drinks, Recipes, SearchFilter } from "../types"



export type RecipeSliceType = {
    categories: Category
    drinks: Drinks
    recipes: Recipes
    modal:boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal:()=>void
}
export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({

    categories: {
        drinks: []
    },
    drinks: {

        drinks: []
    },
    recipes: {} as Recipes
    ,
    modal:false
    ,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({ categories })

    },
    searchRecipes: async (filters) => {

        const drinks = await searchRecipes(filters)
        set({ drinks })

    },
    selectRecipe: async (id) => {
        const recipes = await getRecipeById(id)
        set({ 
            recipes,
            modal:true
        
        })
    },
    closeModal:()=> {

      set({

        modal:false,
        recipes:{} as Recipes
      })

        
    }
})