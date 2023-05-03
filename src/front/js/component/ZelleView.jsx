import React from "react";
import zelleLogo from "../../img/zelle.png"
import logo from "../../img/logo.png"

const ZelleView = () => {
  return (
    <>
      <div className="card  m-5 w-25 " style={{ width: "18rem", height: "auto" }}>

        <div className="card-body ">
          <div className="justify-content-between d-flex">
          <img src={logo} className="card-img-top w-25 mb-4 " alt="..." />
          <img src={zelleLogo} className="card-img-top w-25 " alt="..." />
          </div>

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