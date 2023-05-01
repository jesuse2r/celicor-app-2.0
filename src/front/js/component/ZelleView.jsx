import React from "react";
import zelleLogo from "../../img/zelle.png"

const ZelleView = () => {
    return (
        <>
        <div className="card m-4" style={{width: "18rem"}}>
    
        <div className="card-body">
        <img src={zelleLogo} className="card-img-top w-25 mb-4" alt="..."/>
          
          <h6 className="card-subtitle mb-2 text-body-secondary">correo: Jesuse2rr@gmail.com</h6>
          <p className="card-text">nro de telefono: 04242187006</p>
          <p>Nombre: Jesus Rodriguez</p>
         
          <p>Por favor enviar captura de pantalla.</p>
          <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success"><i className="fab fa-whatsapp"></i></a>
        
        </div>
      </div>
      </>
    )
}



export default ZelleView