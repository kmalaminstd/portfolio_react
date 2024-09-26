import { lazy } from "react"
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"

const Navbar = lazy(()=> import('./component/shared/Navbar'))
const TopSocial = lazy(()=> import('./component/shared/TopSocial'))
const Home = lazy(()=> import('./pages/Home'))
const Footer = lazy(()=> import('./component/shared/Footer'))
const Contact = lazy(()=> import('./pages/Contact'))
const Portfolio = lazy(()=> import('./pages/Portfolio'))
const PortfolioDetails = lazy(()=> import('./pages/PortfolioDetails'))
const Notfound = lazy(()=> import('./pages/Notfound'))
import {ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const DynamicRouter = ()=>{
    return(
        <>  
            <Navbar />
            <ScrollRestoration />
            <Outlet />
            <TopSocial />
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <DynamicRouter />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'portfolio',
                element: <Portfolio />
            },
            {
                path: 'portfolio-details/:id',
                element: <PortfolioDetails />
            },
            {
                path: '*',
                element: <Notfound />
            }
        ]
    }
])

function App(){
    return(
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}             
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <RouterProvider router={router} />
        </>
    )
}

export default App