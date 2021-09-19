import React from 'react'

export const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container-footer">
                <div className="row">
                    {/* column1 */}
                    <div className="footer-col">
                        <h4>DIRECCIÓN</h4>
                        <ul className="list-unstyled">
                            <li>AV. BLANCO GALINDO ESQ PERU</li>
                            <li>SUPERMALL 3er Piso Of. Nro. 12.</li>
                            <li>Cochabamba, Bolivia</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="footer-col">
                        <h4>TELÉFONO</h4>
                        <ul className="list-unstyled">
                            <li>67507188 - 72214511</li>
                            <ul className="socials">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twiter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>                  
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="footer-col">
                        <h4>VERIFICA S.R.L.</h4>
                        <ul className="list-unstyled">
                            <li>Profesionales Expertos en Verificación.</li>
                                                 
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
