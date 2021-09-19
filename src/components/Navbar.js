import React from 'react'
import './navBarCss/navbar.css'
export const Navbar = () => {
    return (
        <navbar>
            <ul>
                <div className="flex-container">
                <div><li><a href="#img">IMG</a></li></div>
                <div><li><a href="#Nosotros">NOSOTROS</a></li></div>
                <div><li><a href="#Servicios">SERVICIOS</a></li></div>
                <div><li><a href="#Clientes">CLIENTES</a></li></div>
                <div><li><a href="#Contactanos">CONTACTANOS</a></li></div>  
                <div><li><a href="#Button">BUTTON</a></li></div>  
                </div>
            </ul>
        </navbar>
    )
}
