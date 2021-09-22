import React from 'react'
import './navBarCss/navbar.css'
// import image3 from '../../assets/img/portfolio/logo3'


export const Navbar = () => {

  
    return (
       
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                    <div className="container">
                        {/* <img class="img-logo" src="./assets/img/logo3.jpg" /> */}
                        {/* <img 
                            src={image3}
                            alt=""
                            className="img-logo"
                        /> */}
                       
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
                                    <button _ngcontent-emq-c1="" className="btn btn-lg btn-outline-light btn-primary"
                                        data-target="#loginModal" data-toggle="modal"> Ingresar </button>
                                </li>

                            </ul>
                        </div>

                    </div>
                </nav>
        
    
    )
}