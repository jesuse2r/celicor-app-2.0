import React from "react";
import efectivoLogo from "../../img/efectivo.png"

const EfectivoView = () => {
    return (
<>
        <img src={efectivoLogo} className="card-img-top w-25" alt="..."/>
        <div className="mb-3 m-4">
      
        <label htmlFor="formFile" className="form-label">Compartir imagen de los billetes</label>
        <input className="form-control" type="file" id="formFile"/>
      </div>
      </>
    )
}


export default EfectivoView