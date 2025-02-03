
import { useEffect, useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'

export default function Header() {


    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])
    const fetchCategories = useAppStore(state => state.fetchCategories)
    const category = useAppStore(state => state.categories)
    useEffect(() => {
        fetchCategories()

    }, [])
    return (
        <header className={isHome ? 'bg-[url(/bg.jpg)] bg-center bg-cover' : 'bg-slate-800'}>

            <div className='mx-auto container px-5 py-16'>
                <div className='flex justify-between items-center'>

                    <div>
                        <img className="w-32 " src="/logo.svg" alt="logo" />
                    </div>
                    <nav className='flex gap-5'>

                        <NavLink to="/"
                            className={({ isActive }) => isActive ? 'text-orange-700 uppercase font-bold' : 'text-white uppercase font-bold'}> Inicio</NavLink>
                        <NavLink to="/Favorites"
                            className={({ isActive }) => isActive ? 'text-orange-700 uppercase font-bold' : 'text-white uppercase font-bold'}> Favoritos</NavLink>

                    </nav>

                </div>

                {isHome && (

                    <form className='md:w-1/2 2xl:w-1/3  bg-orange-600 my-32 p-10 rounded-lg shadow space-y-6 '>

                        <div className='space-y-4'>
                            <label
                                className='block text-white uppercase font-extrabold'
                                htmlFor="ingrediente">Nombre o Ingrediente</label>
                            <input
                                id='ingrediente'
                                type="text"
                                name='ingrediente'
                                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                                placeholder='Buscar Ingrediente'
                            />
                        </div>

                        <div className='space-y-4'>
                            <label
                                className='block text-white uppercase font-extrabold'
                                htmlFor="ingrediente">Categoria</label>
                            <select
                                id='ingrediente'
                                name='ingrediente'
                                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                            >
                                <option value="">--Seleccione</option>
                                {
                                    category.drinks.map(salida => (

                                        <option
                                            key={salida.strCategory}
                                            value={salida.strCategory}>
                                            {salida.strCategory}
                                        </option>
                                    ))


                                }
                            </select>
                        </div>

                        <input
                            type="submit"
                            value='Buscar Recetas'
                            className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white uppercase font-extrabold p-2 w-full rounded-lg'
                        />
                    </form>
                )}
            </div>

        </header>
    )
}
