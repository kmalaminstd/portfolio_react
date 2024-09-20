import { useState } from "react"
import { Link, useLocation } from "react-router-dom"


function Navbar() {
    
    const [toggle, showToggle] = useState(false)
    const location = useLocation()

    
    console.log(location.pathname.split('/')[1]);
    

    const toggleNav = ()=>{
        showToggle(!toggle)
    }



  return (
    <>
    
        <nav className="navbar">
            <div className="container">
                <Link to="#" className="logo">K.M. AL-AMIN</Link>
                <ul className={`${toggle ? "toggle_links" : ''} nav-links`}>
                    <li><Link to="/">Home</Link></li>
                    {
                        location.pathname.split('/')[1] !== 'contact' && location.pathname.split('/')[1] !== 'portfolio-details' && (

                            <>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#work">My Work</a></li>
                            </> 
                        )
                    }
    
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
                <div className="hamburger" onClick={toggleNav}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar