import { StateCreator } from "zustand";
import { Recipes } from "../types";



export type FavoriteSliceType = {

    favorites: Recipes[]
    handledClickFavorite: (recipe: Recipes) => void
    favoriteExist:(id:Recipes['idDrink'])=>boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoriteSliceType> = (set, get) => ({

    favorites: [],
    handledClickFavorite: (recipe) => {
        if (get().favoriteExist(recipe.idDrink)) {
            set((state) => ({

                favorites:state.favorites.filter(favorite=>favorite.idDrink!==recipe.idDrink)
            }))

        } else {

          
            set((state) => ({

                favorites: [...state.favorites, recipe]
            }))
        }
        localStorage.setItem('favorites',JSON.stringify(get().favorites))
    },
    favoriteExist:(id)=>{

        return get().favorites.some(favorite => favorite.idDrink === id)
    },

    loadFromStorage:()=>{
        const storageFavorites=localStorage.getItem('favorites')
        if (storageFavorites) {
            set({
                favorites:JSON.parse(storageFavorites)
            })
        }
    }
})