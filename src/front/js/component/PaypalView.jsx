import React from "react";
import paypalLogo from "../../img/paypal.png"

const PaypalView = () => {
    return (
  
        <>
        <div className="card m-4" style={{width: "18rem"}}>
        <img src={paypalLogo} className="card-img-top" alt="..."/>
        <div className="card-body">
     
          <h6 className="card-subtitle mb-2 text-body-secondary">correo: Jesuse2rr@gmail.com</h6>
          <p className="card-text">nro de telefono: 04242187006</p>
          <p>Por favot enviar Captura de Pantalla</p>
          <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
      </>
    )
}



export default PaypalView