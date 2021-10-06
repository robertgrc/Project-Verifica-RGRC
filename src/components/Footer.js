import React from 'react'

export const Footer = () => {
    return (
    <div>
            <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">DIRECCIÓN</h4>
                        <p className="lead mb-0">
                            AV. BLANCO GALINDO ESQ PERU 
                            <br />
                            SUPERMALL 3er Piso Of. Nro. 12.
                            <br />
                            Cochabamba, Bolivia
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">TELÉFONO</h4>
                            <p className="lead mb-0">
                                67507188 - 72214511
                            </p>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i
                                className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i
                                className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">VERIFICA S.R.L.</h4>
                        <p className="lead mb-0">
                            Profesionales Expertos en 
                            <br />
                            Servicios de Verificación.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy;WebResponsiva 2021</small></div>
        </div>
    </div>
    )
}
