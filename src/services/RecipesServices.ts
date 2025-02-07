
import axios from 'axios';
import { CategoriesApiResponseSchema, DrinksAPIResponseSchemas, RecipeAPIResponseSchema } from '../schemas/recipes-schema';
import { Drink, SearchFilter } from '../types';

export async function getCategories() {

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const { data } = await axios.get(url)
    const result = CategoriesApiResponseSchema.safeParse(data)

    if (result.success) {
        return result.data
    }

}

export async function searchRecipes(filters: SearchFilter) {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await axios.get(url)
    const result = DrinksAPIResponseSchemas.safeParse(data)

    if (result.success) {
        return result.data
    }




}

export async function getRecipeById(id: Drink['idDrink']) {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

    const { data } = await axios.get(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])

    if (result.success) {

        return result.data
    }



}