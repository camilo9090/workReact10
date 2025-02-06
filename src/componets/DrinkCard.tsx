import { Drink } from "../types"

type DrinkCardProps = {

  drink: Drink

}
export default function DrinkCard({ drink }: DrinkCardProps) {
  return (



    <div className="border shadow-lg">

      <div className="overflow-hidden">

        <img
          className="hover:scale-125 transition-transform hover:rotate-2"
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`} />
      </div>
      <div className="p-5">
        <h2 className="text-2xl line-clamp-2 font-black">{drink.strDrink}</h2>

        <button className="mt-5 bg-orange-500 hover:bg-orange-600 w-full p-3 font-bold rounded-lg text-white">Ver receta</button>
      </div>


    </div>
  )
}
