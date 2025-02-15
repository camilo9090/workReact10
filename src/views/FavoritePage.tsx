import { useMemo } from "react"
import DrinkCard from "../componets/DrinkCard"
import { useAppStore } from "../stores/useAppStore"


export default function FavoritePage() {

  const favorites = useAppStore(state => state.favorites)
  const hasFavorites=useMemo(()=>favorites.length,[favorites])
  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 p-20">

        {hasFavorites?(
          favorites.map(recipe => (
            <DrinkCard 
            key={recipe.idDrink}
            drink={recipe}
            
            />
  
          ))
        ):(
          <p className="my-10 text-2xl text-center">Los Favoritos se muestran aquí</p>
        )}
      </div>

    </>
  )
}
