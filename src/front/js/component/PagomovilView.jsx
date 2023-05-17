import React from "react";
import banescoLogo from "../../img/banesco.png"
import logo from "../../img/logo.png"
import ButtonPagar from "./ButtonPagar.jsx";

const PagomovilView = () => {
  return (
    <>
      <div className="bg-light m-5 w-100 h-75" >
        <div className="card-body">
          <div className="d-flex justify-content-around ">
            <img src={logo} className="card-img-top celicores blue" alt="..." />
            <img src={banescoLogo} className="card-img-top licomovil" alt="..." />
          </div>
          <span className="d-flex justify-content-around">
            <div>
              <h3 className="card-title mt-2">Pagomóvil</h3>
              <span className="fs-5">
                <p className="card-subtitle mb-2 text-body-secondary">Número de Cédula: 23.944.726</p>
                <p className="card-text">Nombre: Jesús Rodríguez</p>
                <p className="card-text">Número de teléfono: 04242187006</p>
                <p className="card-text">Banco: Banesco</p>
                <p>Por favor enviar captura de pantalla.</p>
              </span>
              <div className="display-6 d-flex justify-content-between">
                <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success "><i className="fab fa-whatsapp"></i></a>
                <ButtonPagar />
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  )
}


export default PagomovilView