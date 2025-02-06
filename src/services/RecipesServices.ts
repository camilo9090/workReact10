
import axios from 'axios';
import { CategoriesApiResponseSchema, DrinksAPIResponseSchemas } from '../schemas/recipes-schema';
import { SearchFilter } from '../types';

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

    console.log(data);


}