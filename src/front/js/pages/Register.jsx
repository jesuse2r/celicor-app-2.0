import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import user from "../../img/user.jpg";
import { NavLink } from "react-router-dom";
const initialvalue = {
  email: "",
  password: "",
};

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

  const hanledClick = async () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: value,
        document_id: document_id,
        phone: phone,
        address: address,
        role: role,
      }),
    };

    fetch(
      "https://3001-4geeksacade-reactflaskh-7ls1dddc4fh.ws-us96b.gitpod.io/api/register",
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
      <div className="card body d-flex justify-content-center">
        <div className="mt-5">
          <h1 className>Crear una Cuenta</h1>
          <form className="form_container">
            <div className="form_group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                className="form_input"
              />
              <label for="exampleInputEmail1" className="form_label">
                Email
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                className="form_input"
              />
              <label for="exampleInputEmail1" className="form_label">
                Password
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                className="form_input"
              />
              <label for="exampleInputEmail1" className="form_label">
                Name
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                className="form_input"
              />
              <label for="exampleInputEmail1" className="form_label">
                Cedula
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                className="form_input"
              />
              <label for="exampleInputEmail1" className="form_label">
                Telefono
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                className="form_input"
              />
              <label for="exampleInputEmail1" className="form_label">
                Direccion
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                className="form_input"
              />
              <label for="exampleInputEmail1" className="form_label">
                Role
              </label>
              <span className="form_line"></span>
            </div>
          </form>
          <div className="m-3">
            <button type="submit" className="boton">
              Login
            </button>
            <NavLink to="/" ClassName="active">
              Volver
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
