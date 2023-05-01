import React from "react";
import visaLogo from "../../img/visa.png"

const CreditView = () => {
    return (
        <>
       
       <div className="border border-black-4 p-4 m-5 ">
        <img src={visaLogo} className="card-img-top w-25 m-5 p-4 " alt="..."/>  
   
       <form className="row g-3 needs-validation m-5 ">
      
      
      
            <div className="col-md-4 position-relative">
           
                <label htmlFor="validationTooltip01" className="form-label">Nombre en la tarjeta</label>
                <input type="text" className="form-control" id="validationTooltip01" required />
                <div className="valid-tooltip">
                    Looks good!
                </div>
              
            </div>
            <div className="col-md-4 position-relative">
                <label htmlFor="validationTooltip02" className="form-label">Numero de la tarjeta de credito</label>
                <input type="text" className="form-control" id="validationTooltip02"  required />
                <div className="valid-tooltip">
                    Looks good!
                </div>
            </div>
           
          
            <div className="col-md-6 position-relative">
                <label htmlFor="validationTooltip03" className="form-label">Vencimiento</label>
                <input type="text" className="form-control" id="validationTooltip03" required />
                <div className="invalid-tooltip">
                    Please provide a valid city.
                </div>
            </div>
       
           
            <div className="col-md-3 position-relative">
                <label htmlFor="validationTooltip05" className="form-label">CVV</label>
                <input type="text" className="form-control" id="validationTooltip05" required />
                <div className="invalid-tooltip">
                    Please provide a valid zip.
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Pagar</button>
            </div>
        </form>
        </div>
        </> 

    )
}






export default CreditView