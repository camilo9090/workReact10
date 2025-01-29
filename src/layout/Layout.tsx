
import { Outlet } from 'react-router-dom'
import Header from '../componets/Header'
export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet />

        </>
    )
}
