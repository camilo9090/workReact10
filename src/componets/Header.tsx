
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'

export default function Header() {

    const [serachFilters, setSearchFilters] = useState({

        ingredient: '',
        category: ''
    })
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])
    const fetchCategories = useAppStore(state => state.fetchCategories)
    const category = useAppStore(state => state.categories)
    const searchRecipes = useAppStore(state => state.searchRecipes)
    useEffect(() => {
        fetchCategories()

    }, [])

    const handledChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearchFilters({
            ...serachFilters, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        //validar
        if (Object.values(serachFilters).includes('')) {
            
            console.log('No se puede enviar');
            return

        }
        //consultar
        searchRecipes(serachFilters)
    }
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

                    <form className='md:w-1/2 2xl:w-1/3  bg-orange-600 my-32 p-10 rounded-lg shadow space-y-6 '
                        onSubmit={handleSubmit}
                    >

                        <div className='space-y-4'>
                            <label
                                className='block text-white uppercase font-extrabold'
                                htmlFor="ingredient">Nombre o Ingrediente</label>
                            <input
                                id='ingredient'
                                type="text"
                                name='ingredient'
                                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                                placeholder='Buscar Ingrediente'
                                onChange={handledChange}
                                value={serachFilters.ingredient}
                            />
                        </div>

                        <div className='space-y-4'>
                            <label
                                className='block text-white uppercase font-extrabold'
                                htmlFor="category">Categoria</label>
                            <select
                                id='category'
                                name='category'
                                className='p-3 w-full rounded-lg focus:outline-none bg-white'
                                onChange={handledChange}
                                value={serachFilters.category}
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
