import React from 'react'

export const EditarPerfil = () => {
    return (
        <div>
            
        <div _ngcontent-bap-c5="" className="container">
            <div _ngcontent-bap-c5="" className="row">
                <div _ngcontent-bap-c5="" className="col">
                    <h2 _ngcontent-bap-c5="" className=" sub-menu-container p-2 text-center sub-menu-flex-end"><button
                            _ngcontent-bap-c5="" className="btn btn-success" tabindex="0"
                            ng-reflect-router-link="/registrar,-LgTZ1jTWvUP5OWsyTp"><i _ngcontent-bap-c5=""
                                className="fa fa-arrow-left"></i> Regresar </button></h2>
                    <div _ngcontent-bap-c5="" className="row animated fadeIn animated ">
                        <div _ngcontent-bap-c5="" className="col-md-3"><button _ngcontent-bap-c5=""
                                className="btn btn-md btn-block btn-secondary btn-md" disabled="" type="button"><i
                                    _ngcontent-bap-c5="" className="fa fa-edit"></i> Editar Perfil </button><button
                                _ngcontent-bap-c5="" className="btn btn-block btn-primary btn-lg" disabled=""
                                type="button"><i _ngcontent-bap-c5="" className="fa fa-plus"></i> Agregar Reserva
                            </button><button _ngcontent-bap-c5="" className="btn btn-block btn-info btn-lg " disabled=""
                                type="button"><i _ngcontent-bap-c5="" className="fa fa-eye"></i> Mis Reservas </button>
                        </div>
                        <div _ngcontent-bap-c5="" className="row col-md-9">
                            <div _ngcontent-bap-c5="" className=" border border-primary rounded p-2">
                                <h3 _ngcontent-bap-c5="" align="center" className="display-4"> Editar Perfil </h3>
                                <hr _ngcontent-bap-c5=""/>
                                <form _ngcontent-bap-c5="" novalidate="" className="ng-untouched ng-pristine ng-valid">
                                    <div _ngcontent-bap-c5="" className="container">
                                        <div _ngcontent-bap-c5="" className="row">
                                            <div _ngcontent-bap-c5="" className="form-group col"><label
                                                    _ngcontent-bap-c5="">Nombre</label><input _ngcontent-bap-c5=""
                                                    className="form-control ng-untouched ng-pristine" disabled=""
                                                    name="nombreCompleto" placeholder="Firebase ID" type="text"
                                                    ng-reflect-name="nombreCompleto" ng-reflect-is-disabled="disabled"
                                                    ng-reflect-model="JULIAN APAZA"/><small _ngcontent-bap-c5=""
                                                    className="form-text text-muted">Este campo no se puede editar</small>
                                            </div>
                                            <div _ngcontent-bap-c5="" className="form-group col"><label
                                                    _ngcontent-bap-c5="">Usuario</label><input _ngcontent-bap-c5=""
                                                    className="form-control ng-untouched ng-pristine" disabled="" name="id"
                                                    placeholder="Firebase ID" type="text" ng-reflect-name="id"
                                                    ng-reflect-is-disabled="disabled" ng-reflect-model="test1"/><small
                                                    _ngcontent-bap-c5="" className="form-text text-muted">Este campo no se
                                                    puede editar</small></div>
                                            <div _ngcontent-bap-c5="" className="w-100"></div>
                                            <div _ngcontent-bap-c5="" className="form-group col"><label
                                                    _ngcontent-bap-c5="">Teléfono</label><input _ngcontent-bap-c5=""
                                                    className="form-control ng-untouched ng-pristine ng-valid"
                                                    name="telefono" placeholder="Número de Contacto" type="text"
                                                    ng-reflect-name="telefono" ng-reflect-model="47223591"/></div>
                                            <div _ngcontent-bap-c5="" className="form-group col"><label
                                                    _ngcontent-bap-c5="">Correo Electrónico</label><input
                                                    _ngcontent-bap-c5=""
                                                    className="form-control ng-untouched ng-pristine ng-valid" name="email"
                                                    placeholder="Ingrese su email" type="text" ng-reflect-name="email"
                                                    ng-reflect-model="fmrodriguezc1@gmail.com"/></div>
                                        </div>
                                    </div>
                                    <div _ngcontent-bap-c5="" align="center"><button _ngcontent-bap-c5=""
                                            className="btn btn-danger  p-2" type="submit"><i _ngcontent-bap-c5=""
                                                className="fa fa-save"></i> Guardar Cambios </button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><br _ngcontent-bap-c5=""/><br _ngcontent-bap-c5=""/>
    
        </div>
    )
}
