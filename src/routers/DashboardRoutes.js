import React from 'react'
import { Navbar } from '../components/Navbar'
import {Switch, Route, Redirect} from 'react-router-dom'
import { Register } from '../components/register/Register'
import { Modal } from '../components/Modal/Modal'
import { Reservas } from '../components/reservas/Reservas'
import { AgregarReserva } from '../components/agregarReservas/AgregarReserva'
import { Footer } from '../components/Footer'
import { LoginScreen } from '../components/login/LoginScreen'
import { EditarPerfil } from '../components/editarPerfil/EditarPerfil'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Navbar/>
                <Switch >                   
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/modal" component={Modal} />
                    <Route exact path="/reservas" component={Reservas} />
                    <Route exact path="/addreserva" component={AgregarReserva} />
                    <Route exact path="/editarperfil" component={EditarPerfil} />
                    <Route exact path="/loginscreen" component={LoginScreen} />
                    <Route exact path="/" component={Modal} />

                    <Redirect to="/LoginScreen" />              
                </Switch>
                <Footer />
            </div>
        </>
    )
}
