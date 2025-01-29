
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavoritePage from './views/FavoritePage'

export default function AppRouter() {
    return (

        <BrowserRouter>

            <Routes>
                <Route path='/' element={<IndexPage/>} />
                <Route path='/Favorites' element={<FavoritePage/>} />
            </Routes>
        </BrowserRouter>

    )
}
