import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import user from "../../img/user.jpg";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleRedirect = async (event) => {
    event.preventDefault();
    const response = await actions.handleLogin(email, password);
    if (response == true) {
      Navigate("/");
    }
  };

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
                onClick={(event) => handleRedirect(event)}
              >
                Login
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-light yellow border border-0 "
                onClick={() => {
                  Navigate("/register");
                }}
              >
                Registrate
              </button>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-outline-light yellow border border-0 "
            onClick={() => {
              Navigate("/");
            }}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};
