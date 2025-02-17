
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import Layout from './layout/Layout'
const FavoritePage = lazy(() => import('./views/FavoritePage'))
export default function AppRouter() {
    return (

        <BrowserRouter>

            <Routes >
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<IndexPage />} index />
                    <Route path='/Favorites' element={
                        <Suspense fallback="Cargando...">
                            <FavoritePage/>
                        </Suspense>

                    } />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
