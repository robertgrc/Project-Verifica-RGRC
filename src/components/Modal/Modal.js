import React from 'react'
import './Modal.css';

export const Modal = () => {
    return (
    <article >
        <div className="modal-content"><button aria-label="Close" className="close"
            data-dismiss="modal" type="button"><span aria-hidden="true"><i
                    className="fas fa-times"></i></span></button>
        <div className="modal-body text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Inicia
                            Sesión</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><i
                                    className="fas fa-star"></i></div>
                            <div className="divider-custom-line"></div>
                        </div><label className="h2 " for="usuario">USUARIO: </label><input
                         className="form-control"
                            data-validation-required-message="Please enter your name." id="usuario"
                            placeholder="Introduce tu Usuario" required="" type="text"
                            ng-reflect-required="required"/><br/><label
                            className="h2" for="password">CONTRASEÑA: </label><input
                            className="form-control"
                            data-validation-required-message="Please enter your name." id="password"
                            placeholder="Intruduce tu Contraseña" required="" type="password"
                            ng-reflect-required="required"/><br/><button
                            className="btn btn-primary btn-lg" data-dismiss="modal" href="#"><i
                            className="fas fa-check-circle fa-fw"></i> INGRESAR </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    )
}
