
import { Outlet } from 'react-router-dom'
import Header from '../componets/Header'
import Modal from '../componets/Modal'
export default function Layout() {
    return (
        <>
            <Header />

            <main className='container mx-auto py-16'>

                <Outlet />
            </main>

            <Modal/>


        </>
    )
}
