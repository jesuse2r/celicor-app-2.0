import React from "react";
import efectivoLogo from "../../img/efectivo.png"
import "../../styles/home.css";
import logo from "../../img/logo.png"


const EfectivoView = () => {
    return (

      <>
      <div className="card m-5 w-25 " style={{width: "18rem", height:"auto"}}>
      <div className="card-body">
      <div className="justify-content-between d-flex">
      <img src={logo} className="card-img-top w-25 mb-4 " alt="..."/>
  
        <img src={efectivoLogo} className=" w-25 h-25" alt="..."/>
      </div>
      <label htmlFor="formFile" className="form-label">Compartir imagen de los billetes</label>
        <input className="form-control" type="file" id="formFile"/>
        
        <p>Por favor enviar captura de pantalla</p>
        <a href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent=" className="card-link text-success "><i className="fab fa-whatsapp"></i></a>
    
      </div>
    </div>
    </>









      
       
    )
}


export default EfectivoView