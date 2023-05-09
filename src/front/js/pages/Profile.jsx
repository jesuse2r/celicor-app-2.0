import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import user from "../../img/user.jpg";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container col-4">
      <div className="card body1 d-flex justify-content-center">
        <img src={user} className="img2"></img>
        <div className="mt-5 ">
          <h1>Actualizacion de Usuario</h1>
          <form className="form_containe">
            <div className="form_grou">
              <h3 className="mt-4 yellow">Cambio de Email</h3>
              <input
                className="form-control form_inpu"
                onChange={(event) => setEmail(event.target.value)}
              />
              <span className="form_lin"></span>
            </div>
            <div className="form_grou">
              <h3 className="mt-1 yellow">Cambio de Password</h3>
              <input
                className="form-control form_inpu"
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="form_lin"></span>
            </div>
          </form>
          <button
            className="buton mt-3"
            onClick={(event) => handleRedirect(event)}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-outline-primary border border-0 "
            onClick={() => {
              navigate("/");
            }}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
