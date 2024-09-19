import {  } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Navbar from "./component/shared/Navbar"
import TopSocial from "./component/shared/TopSocial"
import Home from "./pages/Home"
import Footer from "./component/shared/Footer"
import Contact from "./pages/Contact"
import Portfolio from './pages/Portfolio'




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
            }
        ]
    }
])

function App(){
    return(
        <>
            
            <RouterProvider router={router} />
        </>
    )
}

export default App