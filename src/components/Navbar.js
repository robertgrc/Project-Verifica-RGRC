import React from 'react'
import './navBarCss/navbar.css'
import logo from '../assets/images/logo3.jpg'


export const Navbar = () => {
    let hiden = 'hiden'
    const openModal = () => {
        hiden = "";
        console.log(hiden)

    }
    console.log("****")
  
    return (
       <div>
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <img className="img-logo" src={logo} alt="" /> 
                                        
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                    href="#portfolio">NOSOTROS</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                    href="#about">SERVICIOS</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                    href="#contact">CLIENTES</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                                    href="#contact">CONTACTANOS</a></li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <button className="btn btn-lg btn-outline-light btn-primary"
                                    data-target="#loginModal" data-toggle="modal" onClick={openModal}> Ingresar </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
       </div>
        
    
    )
}