import React, { useContext } from "react";
import { Context } from "../store/appContext";

const FormFacture = (props) => {
  const { store, actions } = useContext(Context);
  const getTotal = () => {
    let total = 0;
    for (let item of store.cartItems) {
      total = total + item.licor.price * item.quantity;
      console.log(total);
    }
    return total;
  };
  return (
    <>
      <div className="card bg-light vh-100  ">
        <h5 className="card-header text-center">Factura</h5>
        <div className="card-body">
          <h5 className="card-title">Orden</h5>
          <p className="card-text">
            {" "}
            <i className="fas fa-calendar-week"></i> Fecha{" "}
          </p>
          <p className="card-text">
            {" "}
            <i className="fas fa-map-marker-alt"></i> Direccion{" "}
          </p>
          <p className="d-flex gap-3">
            {" "}
            <i className="fas fa-info-circle"></i>
            <span>
              <span>
                <h5>Subtotal: {getTotal()} $</h5>
              </span>
              <span>
                <h5>I.V.A (16%): {getTotal() * 0.16}$</h5>
              </span>
              <span>
                <h5>Total $: {getTotal() * 1.16}$</h5>
              </span>
              <span>
                <h5>Total BS: {getTotal() * 25.12} BS</h5>
              </span>
            </span>
          </p>
          <a href="#" className="btn btn-warning ">
            Calificar compra
          </a>
        </div>
      </div>
    </>
  );
};

export default FormFacture;
