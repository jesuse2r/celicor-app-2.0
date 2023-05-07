import React from "react";
import banescoLogo from "../../img/banesco.png"
import logo from "../../img/logo.png"

const PagomovilView = () => {
    return (
        <>
        <div className="card m-5 w-25 h-75 border-product" >
        <div className="card-body">
        <div className="justify-content-between d-flex">
        <img src={logo} className="card-img-top celicores" alt="..."/>
        <img src={banescoLogo} className="card-img-top licomovil" alt="..."/>
        </div>
          <h5 className="card-title mt-2">Pagomóvil</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Número de Cédula: 23.944.726</h6>
          <p className="card-text">Nombre: Jesús Rodríguez</p>
          <p className="card-text">Número de teléfono: 04242187006</p>
          <p className="card-text">Banco: Banesco</p>
          <p>Por favor enviar captura de pantalla.</p>
          <div className="display-6">
          <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success "><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      </>
    )
}


export default PagomovilView