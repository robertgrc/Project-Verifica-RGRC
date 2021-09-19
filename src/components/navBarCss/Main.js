import React from 'react'

export const Main = () => {
    return (
        <div>
            <div>
                <sidebar>
                    {/* <header className="header-main"> ACERCA DE NOSOTROS</header> */}
                    {/* <img /> */}
                    <h2>Misión</h2>
                    <h3>VERIFICA SRL, es una empresa de servicios especialista en verificaciones
                        domiciliarias, Laborales, siendo nuestros principales clientes: entidades
                        financieras, públicas y personas particulares de nuestro medio.</h3>
                    <h2>Visión</h2>
                    <h3>VERIFICA SRL, ser un referente a nivel departamental y nacional en el
                        servicio de verificaciones domiciliarias y laborales, brindando un servicio
                        de calidad y eficiencia a entidades bancarias, instituciones públicas y personas particulares.</h3>
                </sidebar>
            </div>
            <div>
                {/* <header className="header-main">Nuestros Servicios</header> */}
                <h2>Verificación Domiciliaria</h2>
                <p1>La verificación de Domicilio permite:
                    Confirmar Datos de Solicitantes de crédito.
                    Confirmar Datos de Postulantes a puestos de trabajo.
                    Confirmar Registro de Proveedores.
                    Actualizar datos domiciliarios de personas.
                </p1>

                <h2>Verificación Laboral</h2>
                <p1>La verificación laboral confirma y verifica por cuenta 
                    del cliente los Antecedentes laborales proporcionados por una persona natural,
                    en las direcciones indicadas; comprobando además otras características 
                    laborales de la mismaVerificación Laboral
                </p1>

            </div>
            <div>
                {/* <header className="header-main">Nuestros Clientes</header> */}
                <h2>Clientes1</h2>
                <h2>Clientes2</h2>
                <h2>Clientes3</h2>
            </div>
        </div>
    )
}
