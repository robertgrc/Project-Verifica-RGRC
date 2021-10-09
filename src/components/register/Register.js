import React from 'react'
import usuario2 from '../../assets/assets2/usuario2.jpg'
export const Register = () => {
    return (


        <div _ngcontent-wvd-c4="" className="container">
            <div _ngcontent-wvd-c4="" className="row">
                <div _ngcontent-wvd-c4="" className="col-md-12">
                    <div _ngcontent-wvd-c4="" className="container">
                        <h2 _ngcontent-wvd-c4="" className=" sub-menu-container p-2 text-center"> Sistema Solicitud de
                            Verificaciones </h2>
                        <hr _ngcontent-wvd-c4="" className="my-4 " />
                        <h2 _ngcontent-wvd-c4="" className=" "> Bienvenido, JULIAN APAZA </h2>
                        <hr _ngcontent-wvd-c4="" className="my-4 " />
                    </div>

                    <div _ngcontent-wvd-c4="" className="row animated fadeIn faster animated fadeIn faster ">
                        <div _ngcontent-wvd-c4="" className="col-md-3 "><button _ngcontent-wvd-c4="" className="btn btn-md btn-block btn-outline-dark btn-md " type="button " tabindex="0" ng-reflect-router-link="/editarperfil,-LgTZ1jTWvUP5OWs"> Editar Perfil
                        </button><button _ngcontent-wvd-c4="" className="btn btn-block btn-primary btn-lg " type="button " tabindex="0" ng-reflect-router-link="/domicilio,-LgTZ1jTWvUP5OWsyTp">
                                Agregar Reserva </button><button _ngcontent-wvd-c4="" className="btn btn-block btn-secondary btn-lg " type="button "> Mis Reservas </button>
                        </div>

                        <div _ngcontent-wvd-c4="" className="col-md-4 container-img-user"><img _ngcontent-wvd-c4="" alt="Responsive image " className="img-fluid " src={usuario2}/>
                        </div> 
                        <div _ngcontent-wvd-c4="" className="col-md-5 border border-primary rounded p-2 ">
                            <h2 _ngcontent-wvd-c4=""> Oficial de Crédito: </h2>
                            <h3 _ngcontent-wvd-c4="" className="display-4 "> JULIAN APAZA </h3>
                            <hr _ngcontent-wvd-c4="" />
                            <div _ngcontent-wvd-c4="" className="container ">
                                <div _ngcontent-wvd-c4="" className="row ">
                                    <div _ngcontent-wvd-c4="" className="col ">
                                        <dt _ngcontent-wvd-c4="">Telefono</dt>
                                        <dd _ngcontent-wvd-c4="">47223591</dd>
                                    </div>
                                    <div _ngcontent-wvd-c4="" className="col ">
                                        <dt _ngcontent-wvd-c4="">Correo Electronico </dt>
                                        <dd _ngcontent-wvd-c4="">fmrodriguezc1@gmail.com</dd>
                                    </div>
                                    <div _ngcontent-wvd-c4="" className="w-100 "></div>
                                    <div _ngcontent-wvd-c4="" className="col ">
                                        <dt _ngcontent-wvd-c4="">Entidad Bancaria</dt>
                                        <dd _ngcontent-wvd-c4="">BANCO UNION</dd>
                                    </div>
                                    <div _ngcontent-wvd-c4="" className="col "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
