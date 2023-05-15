import React from "react";
import efectivoLogo from "../../img/efectivo.png"
import "../../styles/home.css";
import logo from "../../img/logo.png"


const EfectivoView = () => {
    return (
      <>
      <div className="bg-light m-5 w-25 h-75 ">
      <div className="card-body">
      <div className="justify-content-between d-flex">
      <img src={logo} className="card-img-top celicores" alt="..."/>
        <img src={efectivoLogo} className="licomovil" alt="..."/>
      </div>
      <label htmlFor="formFile" className="form-label mt-2">Compartir imagen de los billetes</label>
        <input className="form-control mb-2" type="file" id="formFile"/>
        <p>Por favor enviar captura de pantalla.</p>
        <div className="display-6">
        <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success "><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
    </>









      
       
    )
}


export default EfectivoView