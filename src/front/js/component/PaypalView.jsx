import React from "react";
import paypalLogo from "../../img/paypal.png"
import logo from "../../img/logo.png"

const PaypalView = () => {
    return (
  
        <>
        <div className=" card m-5 w-25 h-75 ">
        <div className="justify-content-between d-flex">
        <img src={logo} className="card-img-top celicores m-2" alt="..." />
        <img src={paypalLogo} className="card-img-top celicores" alt="..."/>
        </div>
        <div className="card-body">
        
     
          <h6 className="card-subtitle mb-2 text-body-secondary">Correo: Jesuse2rr@gmail.com</h6>
          <p className="card-text">Nombre: Jesús Rodríguez</p>
          <p className="card-text">Número  de teléfono: 04242187006</p>
          <p>Por favor enviar captura de pantalla.</p>
         
         <div className="display-6">
          <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      </>
    )
}



export default PaypalView