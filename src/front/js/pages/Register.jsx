import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleRedirect = async (event) => {
    event.preventDefault();
    const response = await actions.handleRegister(
      email,
      password,
      name,
      document_id,
      phone,
      address,
      role
    );
    if (response == true) {
      navigate("/");
    }
  };

  return (
    <div className="container col-4 ">
      <div className="card body d-flex justify-content-center ">
        <div className="mt-5 yellow">
          <h1>Registro de Usuario</h1>
          <form className="form_container yellow">
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
                placeholder="  "
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
                placeholder="  "
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
                placeholder="  "
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
                placeholder="  "
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
                placeholder="  "
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
                placeholder="  "
                onChange={(event) => setRole(event.target.value)}
              />
              <label htmlFor="exampleInputEmail1" className="form_label">
                Rol
              </label>
              <span className="form_line"></span>
            </div>
          </form>
          <div className="m-3">
            <button
              className="boton my-2"
              onClick={(event) => handleRedirect(event)}
            >
              Registrate
            </button>
            <button
              type="button"
              className="btn btn-outline-light yellow border border-0 "
              onClick={() => {
                navigate("/");
              }}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
