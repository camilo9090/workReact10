
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavoritePage from './views/FavoritePage'
import Layout from './layout/Layout'

export default function AppRouter() {
    return (

        <BrowserRouter>

            <Routes >
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<IndexPage />} index />
                    <Route path='/Favorites' element={<FavoritePage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
