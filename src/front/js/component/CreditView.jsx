import React from "react";
import visaLogo from "../../img/visa.png";
import logo from "../../img/logo.png";
import ButtonPagar from "./ButtonPagar.jsx";

const CreditView = () => {
  return (
    <>
      <div className="bg-light m-5 w-100 h-75 ">
        <div className="card-body ">
          <div className="justify-content-between d-flex ">
            <img src={logo} className="card-img-top celicor " alt="..." />
            <img src={visaLogo} className="card-img-top  celicor" alt="..." />
          </div>
          <span className="d-flex justify-content-around">
            <div>
              <form className="row  needs-validation m-5  ">
                <div className="col-md-12 position-relative">
                  <label htmlFor="validationTooltip01" className="form-label">
                    Nombre en la tarjeta
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltip01"
                    required
                  />
                </div>
                <div className="col-md-12 position-relative">
                  <label htmlFor="validationTooltip02" className="form-label">
                    Número de la tarjeta de crédito
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltip02"
                    required
                  />
                </div>
                <div className="col-md-6 position-relative">
                  <label htmlFor="validationTooltip03" className="form-label">
                    Vencimiento
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltip03"
                    required
                  />
                </div>
                <div className="col-md-6 position-relative ">
                  <label htmlFor="validationTooltip05" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationTooltip05"
                    required
                  />
                </div>
                <div className="col-12 mt-3 justify-content-center d-flex">
                  <button className="btn btn-primary " type="submit">
                    Pagar
                  </button>
                </div>
              </form>
              <p>Por favor enviar captura de pantalla.</p>
              <div className=" display-6  d-flex gap-5">
                <a
                  href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent="
                  className="card-link text-success  "
                >
                  <i className=" whatssapLogo  fab fa-whatsapp"></i>
                </a>
                <ButtonPagar />
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default CreditView;
