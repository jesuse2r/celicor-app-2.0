import React from "react";
import banescoLogo from "../../img/banesco.png"

const TransferenciaView = () => {
    return (

        
        <>
        <div className="card m-4" style={{width: "18rem"}}>
        <div className="card-body">
        <img src={banescoLogo} className="card-img-top" alt="..."/>
          <h5 className="card-title">Transferencias Bancarias</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Numero de cuenta: 013423443534634</h6>
          <p className="card-text">Banco: Banesco</p>
          <p className="card-text">Documento de Identidad: 23.944.726</p>
         
          <p>Por favor enviar captura de pantalla</p>
          <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
      </>
    )
}


export default TransferenciaView