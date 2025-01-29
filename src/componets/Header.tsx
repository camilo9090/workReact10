
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <header className='bg-slate-800'>

            <div className='mx-auto container px-5 py-16'>
                <div className='flex justify-between items-center'>

                    <div>
                        <img className="w-32 " src="/logo.svg" alt="logo" />
                    </div>
                    <nav className='flex gap-5'>

                        <NavLink to="/"
                            className={({isActive})=>isActive? 'text-orange-700 uppercase font-bold':'text-white uppercase font-bold'}> Inicio</NavLink>
                        <NavLink to="/Favorites"
                            className={({isActive})=>isActive? 'text-orange-700 uppercase font-bold':'text-white uppercase font-bold'}> Favoritos</NavLink>

                    </nav>
                </div>
            </div>
        </header>
    )
}
