import React from 'react'
import logo3 from '../../assets/assets2/logo3.jpg'

export const AgregarReserva = () => {
    return (
        <div>
             
        <div _ngcontent-wvd-c6="" className="container-fluid">
            <div _ngcontent-wvd-c6="" className="row sub-menu-container ocultar-al-imprimir">
                <div _ngcontent-wvd-c6="" className="col-md-6 vertical-center">
                    <h5 _ngcontent-wvd-c6="" className="margin-block-end-zero">Fecha Actual: 06-Octubre-2021</h5>
                </div>
                <div _ngcontent-wvd-c6="" className="col-md-6 sub-menu-flex-end"><button _ngcontent-wvd-c6=""
                        className="btn btn-success"><i _ngcontent-wvd-c6="" className="fa fa-arrow-left"></i> Regresar </button>
                </div>
       
            </div>
            <hr _ngcontent-wvd-c6="" className="my-4 ocultar-al-imprimir"/>
            <form _ngcontent-wvd-c6="" className="form-horizontal ng-untouched ng-pristine ng-invalid"
                id="element-to-export" novalidate="">
                <div _ngcontent-wvd-c6="">
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="col-md-12">
                            <h1 _ngcontent-wvd-c6=""> VERIFICACION DOMICILIARIA </h1>
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report logo-form logo-form-left"><a
                                        _ngcontent-wvd-c6="" className="navbar-brand js-scroll-trigger">
                                        <img _ngcontent-wvd-c6="" src={logo3} width="250"/></a> 
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report logo-form">
                                    <h1 _ngcontent-wvd-c6="" className="logo-header-text"> BANCO UNION </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="col-md-5 right-pad-zero">
                            <div _ngcontent-wvd-c6="" className="row data-container big-name-cont">
                                <h1 _ngcontent-wvd-c6="" className="very-big-font">
                                    
                                </h1>
                            </div>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-7 pad-zero">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-12">
                                    <div _ngcontent-wvd-c6="" className="page-header">
                                        <h1 _ngcontent-wvd-c6="" className="margin-title-small"> IDENTIFICACIÓN DEL CLIENTE
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-wvd-c6="" className="row data-container top-bottom-pad-zero">
                                <div _ngcontent-wvd-c6="" className="row">
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                        <h6 _ngcontent-wvd-c6="" className="margin-bottom-zero">NOMBRE CLIENTE O EMPRESA:
                                        </h6>
                                    </div>
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                        <h6 _ngcontent-wvd-c6="" className="margin-bottom-zero">NOMBRE DE USUARIO:</h6>
                                    </div>
                                </div>
                                <div _ngcontent-wvd-c6="" className="row">
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report padding-rigth-small"><input
                                            _ngcontent-wvd-c6="" className="form-control ng-untouched ng-pristine"
                                            disabled="" name="banco" type="text" ng-reflect-name="banco"
                                            ng-reflect-is-disabled="" ng-reflect-model="BANCO UNION"/></div>
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report padding-rigth-small"><input
                                            _ngcontent-wvd-c6="" className="form-control ng-untouched ng-pristine"
                                            disabled="" name="nombreUsuario" type="text" ng-reflect-name="nombreUsuario"
                                            ng-reflect-is-disabled="disabled" ng-reflect-model="JULIAN APAZA"/></div>
                                </div>
                                <div _ngcontent-wvd-c6="" className="row">
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                        <h6 _ngcontent-wvd-c6="" className="margin-bottom-zero">CIUDAD:</h6>
                                    </div>
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                        <h6 _ngcontent-wvd-c6="" className="margin-bottom-zero">TIPO DE INFORME:</h6>
                                    </div>
                                </div>
                                <div _ngcontent-wvd-c6="" className="row">
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report padding-rigth-small"><input
                                            _ngcontent-wvd-c6="" className="form-control ng-untouched ng-pristine ng-valid"
                                            name="clienteCiudad" type="text" ng-reflect-name="clienteCiudad"/></div>
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report padding-rigth-small"><input
                                            _ngcontent-wvd-c6="" className="form-control ng-untouched ng-pristine ng-valid"
                                            name="clienteTipoInforme" type="text" ng-reflect-name="clienteTipoInforme"/>
                                    </div>
                                </div>
                                <div _ngcontent-wvd-c6="" className="row">
                                    <div _ngcontent-wvd-c6="" className="col-md-4 col-report">
                                        <h6 _ngcontent-wvd-c6="">FECHA (dd/mm/aaaa):</h6>
                                    </div>
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report"><input _ngcontent-wvd-c6=""
                                            className="form-control ng-untouched ng-pristine" disabled=""
                                            name="clienteFechaInforme" type="text" ng-reflect-name="clienteFechaInforme"
                                            ng-reflect-is-disabled="" ng-reflect-model="06-10-2021 17:38:56"/></div>
                                </div>
                            </div>
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-12">
                                    <div _ngcontent-wvd-c6="" className="page-header">
                                        <h1 _ngcontent-wvd-c6="" className="margin-title-small"> OBJETO DEL INFORME </h1>
                                    </div>
                                </div>
                            </div>
                            <div _ngcontent-wvd-c6="" className="row data-container top-bottom-pad-zero bottom-pad-small">
                                <div _ngcontent-wvd-c6="" className="row">
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                        <h6 _ngcontent-wvd-c6="" className="margin-bottom-zero">MOTIVO DE LA VERIFICACION:
                                        </h6>
                                    </div>
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                        <h6 _ngcontent-wvd-c6="" className="margin-bottom-zero">CALIDAD DE LA PERSONA A
                                            VERIFICAR:</h6>
                                    </div>
                                </div>
                                <div _ngcontent-wvd-c6="" className="row">
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report padding-rigth-small"><input
                                            _ngcontent-wvd-c6="" className="form-control ng-untouched ng-pristine ng-valid"
                                            name="motivoVerificacion" type="text" ng-reflect-name="motivoVerificacion"/>
                                    </div>
                                    <div _ngcontent-wvd-c6="" className="col-md-6 col-report padding-rigth-small"><input
                                            _ngcontent-wvd-c6="" className="form-control ng-untouched ng-pristine ng-valid"
                                            name="verificarCalidadPersonaVerificar" type="text"
                                            ng-reflect-name="verificarCalidadPersonaVerific"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div _ngcontent-wvd-c6="" className="row">
                    <div _ngcontent-wvd-c6="" className="col-md-12">
                        <div _ngcontent-wvd-c6="" className="page-header">
                            <h1 _ngcontent-wvd-c6=""> DATOS A VERIFICAR </h1>
                        </div>
                    </div>
                </div>
                <div _ngcontent-wvd-c6="" className="row data-container">
                    <div _ngcontent-wvd-c6="" className="row ">
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                            <h6 _ngcontent-wvd-c6="">1er NOMBRE:</h6>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                            <h6 _ngcontent-wvd-c6="">2do NOMBRE:</h6>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                            <h6 _ngcontent-wvd-c6="">3er NOMBRE:</h6>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                            <h6 _ngcontent-wvd-c6="">PRIMER APELLIDO</h6>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                            <h6 _ngcontent-wvd-c6="">SEGUNDO APELLIDO:</h6>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                            <h6 _ngcontent-wvd-c6="">APELLIDO DE CASADA:</h6>
                        </div>
                    </div>
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report"><input _ngcontent-wvd-c6=""
                                className="form-control ng-untouched ng-pristine ng-valid" name="verificarPrimerNombre"
                                type="text" ng-reflect-name="verificarPrimerNombre"/></div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report"><input _ngcontent-wvd-c6=""
                                className="form-control ng-untouched ng-pristine ng-valid" name="verificarSegundoNombre"
                                type="text" ng-reflect-name="verificarSegundoNombre"/></div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report"><input _ngcontent-wvd-c6=""
                                className="form-control ng-untouched ng-pristine ng-valid" name="verificarTercerNombre"
                                type="text" ng-reflect-name="verificarTercerNombre"/></div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report"><input _ngcontent-wvd-c6=""
                                className="form-control ng-untouched ng-pristine ng-valid" name="verificarPrimerApellido"
                                type="text" ng-reflect-name="verificarPrimerApellido"/></div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report"><input _ngcontent-wvd-c6=""
                                className="form-control ng-untouched ng-pristine ng-valid" name="verificarSegundoApellido"
                                type="text" ng-reflect-name="verificarSegundoApellido"/></div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report"><input _ngcontent-wvd-c6=""
                                className="form-control ng-untouched ng-pristine ng-valid" name="verificarApellidoCasada"
                                type="text" ng-reflect-name="verificarApellidoCasada"/></div>
                    </div>
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-4">
                                    <h6 _ngcontent-wvd-c6="">N° C.I. DEL TITULAR:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-8"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarCiTitular"
                                        type="text" ng-reflect-name="verificarCiTitular"/></div>
                            </div>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-3 col-report">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                                    <h6 _ngcontent-wvd-c6="">EXT:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-10"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid"
                                        name="verificarCiExtension" type="text" ng-reflect-name="verificarCiExtension"/>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-3 col-report">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                                    <h6 _ngcontent-wvd-c6="">NIT:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-10"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarNit"
                                        type="text" ng-reflect-name="verificarNit"/></div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="row col-md-6 col-report">
                            <div _ngcontent-wvd-c6="" className="col-md-4">
                                <h6 _ngcontent-wvd-c6="">ESTADO CIVIL:</h6>
                            </div>
                            <div _ngcontent-wvd-c6="" className="col-md-8"><input _ngcontent-wvd-c6=""
                                    className="form-control ng-untouched ng-pristine ng-valid" name="verificarEstadoCivil"
                                    type="text" ng-reflect-name="verificarEstadoCivil"/></div>
                        </div>
                    </div>
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="col-md-8 col-report">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-3 ">
                                    <h6 _ngcontent-wvd-c6="">DIRECCION DOMICILIO(Dpto.):</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-9 "><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarDireccion"
                                        type="text" ng-reflect-name="verificarDireccion"/></div>
                            </div>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-4">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-3 col-report">
                                    <h6 _ngcontent-wvd-c6="">CIUDAD:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-9"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarCiudad"
                                        type="text" ng-reflect-name="verificarCiudad"/></div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-4">
                                    <h6 _ngcontent-wvd-c6="">BARRIO:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-8"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarBarrio"
                                        type="text" ng-reflect-name="verificarBarrio"/></div>
                            </div>
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-4">
                                    <h6 _ngcontent-wvd-c6="">CALLE/AV./PJE.:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-8"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarCalle"
                                        type="text" ng-reflect-name="verificarCalle"/></div>
                            </div>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-3 col-report">
                                    <h6 _ngcontent-wvd-c6="">UV:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-9 col-report"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarUv"
                                        type="text" ng-reflect-name="verificarUv"/></div>
                            </div>
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-3 col-report">
                                    <h6 _ngcontent-wvd-c6="">N°:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-9 col-report"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarNumero"
                                        type="text" ng-reflect-name="verificarNumero"/></div>
                            </div>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-4">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-3 col-report">
                                    <h6 _ngcontent-wvd-c6="">MZ:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-9"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarMz"
                                        type="text" ng-reflect-name="verificarMz"/></div>
                            </div>
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-3 col-report">
                                    <h6 _ngcontent-wvd-c6="" className="large-text">COD. MED.LUZ:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-9"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid"
                                        name="verificarMedidorLuz" type="text" ng-reflect-name="verificarMedidorLuz"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-4">
                                    <h6 _ngcontent-wvd-c6="">ENTRE CALLE/AV./PJE:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-8"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid"
                                        name="verificarEntreCalle" type="text" ng-reflect-name="verificarEntreCalle"/>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-4">
                                    <h6 _ngcontent-wvd-c6="">Y CALLE / AV. / PJE.:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-8"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarYCalle"
                                        type="text" ng-reflect-name="verificarYCalle"/></div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="col-md-12">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-2 col-report">
                                    <h6 _ngcontent-wvd-c6="">REFERENCIA (de la dirección):</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-10 col-report"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid"
                                        name="verificarReferencia" type="text" ng-reflect-name="verificarReferencia"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div _ngcontent-wvd-c6="" className="row">
                        <div _ngcontent-wvd-c6="" className="col-md-4">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                    <h6 _ngcontent-wvd-c6="">EDIFICIO:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarEdificio"
                                        type="text" ng-reflect-name="verificarEdificio"/></div>
                            </div>
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                    <h6 _ngcontent-wvd-c6="">TELEFONO(S):</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarTelefono"
                                        type="text" ng-reflect-name="verificarTelefono"/></div>
                            </div>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-4">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                    <h6 _ngcontent-wvd-c6="">PISO:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid" name="verificarPiso"
                                        type="text" ng-reflect-name="verificarPiso"/></div>
                            </div>
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report">
                                    <h6 _ngcontent-wvd-c6="">CELULAR:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-6 col-report"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-invalid" name="verificarCelular"
                                        required="" type="text" ng-reflect-required=""
                                        ng-reflect-name="verificarCelular"/></div>
                            </div>
                        </div>
                        <div _ngcontent-wvd-c6="" className="col-md-4 col-report">
                            <div _ngcontent-wvd-c6="" className="row">
                                <div _ngcontent-wvd-c6="" className="col-md-5 col-report">
                                    <h6 _ngcontent-wvd-c6="">DEPARTAMENTO:</h6>
                                </div>
                                <div _ngcontent-wvd-c6="" className="col-md-7 col-report"><input _ngcontent-wvd-c6=""
                                        className="form-control ng-untouched ng-pristine ng-valid"
                                        name="verificarDepartamento" type="text"
                                        ng-reflect-name="verificarDepartamento"/></div>
                            </div>
                        </div>
                    </div>
                </div><br _ngcontent-wvd-c6=""/>              
            </form>
        </div>
    
        </div>
    )
}
