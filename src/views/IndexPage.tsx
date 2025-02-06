


import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../componets/DrinkCard"

export default function IndexPage() {
  const drinks = useAppStore(state => (state.drinks))
  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])
  return (
    <>
      <h1 className="text-6xl font-extrabold pl-10">Recetas</h1>

      {hasDrinks ? (

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10 p-20">

          {drinks.drinks.map((drink) => (

            <DrinkCard
              key={drink.idDrink}
              drink={drink}
            />

          ))}

        </div>


      ) :
        <p className="my-10 text-center text-2xl">Sin resultados para mostrar</p>
      }
    </>
  )
}
