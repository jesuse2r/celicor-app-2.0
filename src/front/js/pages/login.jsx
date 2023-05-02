import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import user from "../../img/user.jpg";
import { NavLink } from "react-router-dom";

const initialvalue = {
  email: "",
  password: "",
};

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanledClick = async () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(
      "https://3001-4geeksacade-reactflaskh-7ls1dddc4fh.ws-us96b.gitpod.io/api/login",
      opts
    )
      .then((response) => {
        if (response.status === 200) return response.json();
        else alert("hay algun error");
      })
      .then()
      .catch((error) => {
        console.error("hay un error", error);
      });
  };
  return (
    <div className="container col-4">
      <div className="card box d-flex justify-content-center align-items-center">
        <img src={user} className="img"></img>
        <div className="text-center mt-5">
          <h1>Bienvenido</h1>
          <form>
            <div class="mb-3">
              <h3>
                <i class="fas fa-envelope"></i>
              </h3>
              <input
                type="email"
                className="form-control input"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div class="mb-3">
              <h3>
                <i class="fas fa-unlock"></i>
              </h3>
              <input
                type="password"
                className="form-control input"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <diV>
              <button type="submit" className="boton">
                Login
              </button>
            </diV>
            <div>
              <NavLink to="/demo" activeClassName="active">
                Perdiste tu Contraseña?
              </NavLink>
            </div>
            <div>
              <NavLink to="/register" activeClassName="active">
                Registrate
              </NavLink>
            </div>
          </form>
          <NavLink to="/" activeClassName="active">
            Volver
          </NavLink>
        </div>
      </div>
    </div>
  );
};
