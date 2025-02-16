import { StateCreator } from "zustand";
import { Recipes } from "../types";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { RecipeSliceType } from "./recipeSlice";



export type FavoriteSliceType = {

    favorites: Recipes[]
    handledClickFavorite: (recipe: Recipes) => void
    favoriteExist: (id: Recipes['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoriteSliceType&NotificationSliceType,[],[],FavoriteSliceType> = (set, get,api) => ({

    favorites: [],
    handledClickFavorite: (recipe) => {
        if (get().favoriteExist(recipe.idDrink)) {
            set((state) => ({

                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotification(
                { text: 'Se Elimino correctamente', error: false })
        } else {


            set((state) => ({

                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set,get,api).showNotification(
                { text: 'Se Agrego correctamente', error: false })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExist: (id) => {

        return get().favorites.some(favorite => favorite.idDrink === id)
    },

    loadFromStorage: () => {
        const storageFavorites = localStorage.getItem('favorites')
        if (storageFavorites) {
            set({
                favorites: JSON.parse(storageFavorites)
            })
        }
    }
})