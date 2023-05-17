import React from "react";
import efectivoLogo from "../../img/efectivo.png"
import "../../styles/home.css";
import logo from "../../img/logo.png"
import ButtonPagar from "./ButtonPagar.jsx";


const EfectivoView = () => {
  return (
    <>
      <div className="bg-light m-5 w-100 h-75" >
        <div className="card-body">
          <div className="d-flex justify-content-around ">
            <img src={logo} className="card-img-top celicores blue" alt="..." />
            <img src={efectivoLogo} className="card-img-top licomovil" alt="..." />
          </div>
          <span className="d-flex justify-content-around">
            <div>
              <h3 className="card-title mt-2">Efectivo</h3>
              <label htmlFor="formFile" className="form-label mt-2">Compartir imagen de los billetes</label>
              <input className="form-control mb-2" type="file" id="formFile" />
              <p>Por favor enviar captura de pantalla.</p>
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


export default EfectivoView