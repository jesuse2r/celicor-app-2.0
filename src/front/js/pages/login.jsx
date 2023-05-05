import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import user from "../../img/user.jpg";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container col-4">
      <div className="card box d-flex justify-content-center align-items-center border-product">
        <img src={user} className="img"></img>
        <div className="text-center mt-5 yellow">
          <h1>Bienvenido</h1>
          <form>
            <div className="mb-3">
              <h3>
                <i className="fas fa-envelope"></i>
              </h3>
              <input
                type="email"
                className="form-control input"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <h3>
                <i className="fas fa-unlock"></i>
              </h3>
              <input
                type="password"
                className="form-control input"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <button
                className="boton"
                onClick={(event) => actions.handleLogin(event, email, password)}
              >
                Login
              </button>
            </div>
            <div>
              <NavLink to="/demo">Perdiste tu Contraseña?</NavLink>
            </div>
            <div>
              <NavLink to="/register">Registrate</NavLink>
            </div>
          </form>
          <NavLink to="/">Volver</NavLink>
        </div>
      </div>
    </div>
  );
};
