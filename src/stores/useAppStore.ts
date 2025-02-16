import {create} from 'zustand'
import { createRecipeSlice, RecipeSliceType } from './recipeSlice'
import {devtools} from 'zustand/middleware'
import {createFavoritesSlice,FavoriteSliceType} from './favoritesSlice'
import { NotificationSliceType,createNotificationSlice } from './notificationSlice'


export const useAppStore=create<RecipeSliceType&FavoriteSliceType&NotificationSliceType>()(devtools((...a)=>({
...createRecipeSlice(...a),
...createFavoritesSlice(...a),
...createNotificationSlice(...a),

})))