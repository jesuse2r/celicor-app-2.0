import React, { useContext, useState } from "react";
import logo from "../../img/logo.png";
import sede from "../../img/sede.jpg";
import "../../styles/about.css";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container col-4">
      <div className="d-flex align-items-center rounded body3 ">
        <div className="card rounded-3 yellow">
          <img src={logo} className="top" alt="logo" />
          <div className="card-body d-flex justify-content- center">
            <img src={sede} alt="sede" className="m-2 letf rounded-2" />
            <p className="card-text m-2 fw-bold text-center mt-4 fs-5">
              ❝ Celicor Boutique es una empresa dedicada a la venta de todo tipo
              licores contando con una gran variedad para nuestros usuarios,
              contamos con diferentes ubicaciones para que puedan disfrutar de
              nuestro productos sin problema alguno. Lanzamos la web de Celicor
              para que puedas disfrutar de la alta gama que tenemos disponible
              para ti en todo momento con un catalogo y cotizaciones en linea
              para que disfrutes de nuestros productos ❞
            </p>
          </div>
          <button
            type="button"
            className="btn btn-outline-light yellow border border-0 m-4  fs-4"
            onClick={() => {
              navigate("/");
            }}
          >
            Pagina Principal
          </button>
        </div>
      </div>
    </div>
  );
};
