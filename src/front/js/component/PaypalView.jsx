import React from "react";
import paypalLogo from "../../img/paypal.png";
import logo from "../../img/logo.jpg";
import ButtonPagar from "./ButtonPagar.jsx";

const PaypalView = () => {
  return (
    <>
      <div className="bg-light m-5 w-100 h-75" >
        <div className="card-body">
          <div className="d-flex justify-content-around ">
            <img src={logo} className="card-img-top celicores blue" alt="..." />
            <img src={paypalLogo} className="card-img-top licomovil" alt="..." />
          </div>
          <span className="d-flex justify-content-around">
            <div>
              <h3 className="card-title mt-2">Paypal</h3>
              <span className="fs-5">
                <p className="card-subtitle mb-2 text-body-secondary">Correo: Jesuse2rr@gmail.com</p>
                <p className="card-text">Nombre: Jesús Rodríguez</p>
                <p className="card-text">Número de teléfono: 04242187006</p>
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


export default PaypalView;
