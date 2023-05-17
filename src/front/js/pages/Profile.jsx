import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import user from "../../img/user.jpg";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [new_email, setNew_email] = useState("");
  const [password, setPassword] = useState("");
  const [new_password, setNew_password] = useState("");
  const Navigate = useNavigate();

  const handleRedirect = async (event) => {
    event.preventDefault();
    const response = await actions.handleChange_Password(
      email,
      new_email,
      password,
      new_password
    );
    if (response == true) {
      Navigate("/");
    }
  };

  return (
    <div className="container col-4 ">
      <div className="card body1 d-flex justify-content-center">
        <img src={user} className="img2"></img>
        <div className="mt-5 ">
          <h1 className="yellow">Actualizacion de Usuario</h1>
          <form className="form_containe">
            <div className="form_group">
              <input
                className="form-control form_input"
                placeholder="  "
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Email
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                className="form-control form_input"
                placeholder="  "
                value={new_email}
                onChange={(event) => setNew_email(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Nuevo email
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                className="form-control form_input"
                placeholder="  "
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Contraseña
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                className="form-control form_input"
                placeholder="  "
                value={new_password}
                onChange={(event) => setNew_password(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Nueva Contraseña
              </label>
              <span className="form_line"></span>
            </div>
          </form>
          <button
            className="buton mt-3"
            onClick={(event) => handleRedirect(event)}
          >
            Actualizar Datos
          </button>
          <button
            type="button"
            className="btn btn-outline-light yellow border border-0"
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
