import {  } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Navbar from "./component/shared/Navbar"
import TopSocial from "./component/shared/TopSocial"
import Home from "./pages/Home"
import Footer from "./component/shared/Footer"
import Contact from "./pages/Contact"
import Portfolio from './pages/Portfolio'
import PortfolioDetails from './pages/PortfolioDetails'
import Notfound from './pages/Notfound'
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