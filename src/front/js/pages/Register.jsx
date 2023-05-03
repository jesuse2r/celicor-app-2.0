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
  const [document_id, setDocument_id] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="container col-4">
      <div className="card body d-flex justify-content-center">
        <div className="mt-5">
          <h1 className>Registro de Usuario</h1>
          <form className="form_container">
            <div className="form_group">
              <input
                className="form-control form_input"
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Password
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                className="form-control form_input"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Name
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                className="form-control form_input"
                value={document_id}
                onChange={(event) => setDocument_id(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Cedula
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                className="form-control form_input"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Telefono
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                className="form-control form_input"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Direccion
              </label>
              <span className="form_line"></span>
            </div>
            <div className="form_group">
              <input
                className="form-control form_input"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Role
              </label>
              <span className="form_line"></span>
            </div>
          </form>
          <div className="m-3">
            <button
              className="boton"
              onClick={(event) =>
                actions.handleRegister(
                  event,
                  email,
                  password,
                  name,
                  document_id,
                  phone,
                  address,
                  role
                )
              }
            >
              Register
            </button>
            <NavLink to="/">Volver</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
