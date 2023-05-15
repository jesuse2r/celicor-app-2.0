import React from "react";
import zelleLogo from "../../img/zelle.png"
import logo from "../../img/logo.png"

const ZelleView = () => {
  return (
    <>
      <div className="  m-5 w-25 h-100 " >
        <div className="card-body ">
          <div className="justify-content-between d-flex">
          <img src={logo} className="card-img-top  celicores" alt="..." />
          <img src={zelleLogo} className="card-img-top  celicores" alt="..." />
          </div>
          <h6 className="card-subtitle mb-2 text-body-secondary mt-4">Correo: Jesuse2rr@gmail.com</h6>
          <p className="card-text">Número de teléfono: 04242187006</p>
          <p>Nombre: Jesús Rodríguez</p>
          <p>Por favor enviar captura de pantalla.</p>
          <div className="display-6">
          <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}



export default ZelleView