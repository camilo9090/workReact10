import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { Recipes } from '../types';

export default function Modal() {

    const modal = useAppStore(state => state.modal)
    const closeModal = useAppStore(state => state.closeModal)
    const recipe = useAppStore(state => state.recipes)
    const handledClickFavorite = useAppStore(state => state.handledClickFavorite)
    const favoriteExist = useAppStore(state => state.favoriteExist)
    const renderIngredients = () => {

        const ingredients: JSX.Element[] = []

        for (let i = 1; i <= 6; i++) {
            const ingredient = recipe[`strIngredient${i}` as keyof Recipes];
            const measure = recipe[`strMeasure${i}` as keyof Recipes];

            if (ingredient && measure) {
                ingredients.push(

                    <li className='text-lg font-normal' key={i}>
                        {ingredient}-{measure}
                    </li>
                )
            }
        }
        return ingredients
    }
    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                    <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                        {
                                            recipe.strDrink

                                        }

                                        <img
                                            className='mt-5 mx-auto w-96'
                                            src={recipe.strDrinkThumb} alt={recipe.strDrink} />
                                    </Dialog.Title>
                                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Ingredientes y Cantidades
                                        {renderIngredients()}
                                    </Dialog.Title>
                                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Instrucciones
                                    </Dialog.Title>

                                    <p className='text-lg'>{recipe.strInstructions}</p>
                                    <div className='mt-5 flex justify-between gap-4'>
                                        <button
                                            onClick={closeModal}
                                            className=' w-full bg-gray-600 rounded-lg p-2  shadow uppercase text-white font-bold hover:bg-gray-700'>
                                            Cerrar</button>

                                        <button 
                                        onClick={()=>{
                                            handledClickFavorite(recipe)
                                            closeModal()

                                        }}
                                        className=' w-full bg-orange-600 rounded-lg p-2  shadow uppercase text-white font-bold hover:bg-orange-700'>
                                           {favoriteExist(recipe.idDrink)?'Eliminar de Favoritos':'Agregar a Favorito'}</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>


                        </div>


                    </div>
                </Dialog>
            </Transition>
        </>
    )
}