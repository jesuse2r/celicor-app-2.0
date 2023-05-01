import React from "react";
import banescoLogo from "../../img/banesco.png"

const PagomovilView = () => {
    return (

        <>
        <div className="card m-4 " style={{width: "18rem"}}>
        <div className="card-body">
        <img src={banescoLogo} className="card-img-top" alt="..."/>
          <h5 className="card-title">Pagomovil</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Numero de Cedula: 23.944.726</h6>
          <p className="card-text">Numero de telefono: 04242187006</p>
          <p className="card-text">Banco: Banesco</p>
          
          <p>Por favor enviar captura de pantalla</p>
          <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success "><i className="fab fa-whatsapp"></i></a>
      
        </div>
      </div>
      </>
    )
}


export default PagomovilView