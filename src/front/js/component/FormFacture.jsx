import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Rating from "./rating.jsx";

const FormFacture = (props) => {
  let today = new Date()
  const { store, actions } = useContext(Context);
  const [total, setTotal] = useState("")
  const getTotal = () => {
    let total = 0;
    for (let item of store.cartItems) {
      total = total + item.licor.price * item.quantity;
      console.log(total);
    }
    return total;
  };
  const totalIva = getTotal() * 0.16
  const totalMasIva= getTotal() * 1.16 
  const totalBolivares=  totalMasIva * 25.12

  return (
    <>
      <div className="card bg-light vh-100  ">
        <h5 className="card-header">Factura</h5>
        <div className="card-body">
          <h5 className="card-title">Orden</h5>
          <p className="card-text">
            {" "}
            <i className="fas fa-calendar-week"></i> Fecha: {today.toLocaleDateString()}
          </p>
          <p className="card-text">
            {" "}
            <i className="fas fa-map-marker-alt"></i> Direccion: {"Av. Fuerzas Armadas, Edificio Ayacucho, Local 10."}
          </p>

          <p className="d-flex gap-3">
            {" "}
            <i className="fas fa-info-circle"></i>
            <span>
              <span>
                <h5>Subtotal: {getTotal().toFixed(2)} $</h5>
              </span>
              <span>
                <h5>I.V.A (16%): {totalIva.toFixed(2)}$</h5>
              </span>
              <span>
                <h5>Total $: {totalMasIva.toFixed(2)}$</h5>
              </span>
              <span>
                <h5>Total BS: {totalBolivares.toFixed(2)} BS</h5>
              </span>
            </span>
          </p>
          <Rating />
        </div>
      </div>
    </>
  );
};

export default FormFacture;
