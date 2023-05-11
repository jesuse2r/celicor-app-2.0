import React, { useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import whisky from "../../img/oldparr.png";


const FormPay = (props) => {
  const { store, actions } = useContext(Context);
  const [metodoPago, setMetodoPago] = useState("")
  const setValue = {
    pagomovil: false,
    tarjetaDeCredito: false,
    zelle: false,
    paypal: false,
    transferencia: false,
    efectivo: false
  }
  const handlePay = (e) => {
    props.setHandleCredit({ ...setValue, [metodoPago]: true });
  }
  if (store.cartItems.length == 0){
    return(
      <h2>no tienes elementos en el carrito</h2>
    )
  }
  return (
    <div className="text-center">
      <div className="m-5 border-product p-4 card w-75 text-center">
        <div className="yellow">
          <h1 className="text-center">Resumen del pedido</h1>
        </div>
        {store.cartItems.length == 0 && (
          <h2>No tienes elementos en el carrito</h2>
        )}
        {store.cartItems.map((cartItem) => {
          return (
            <div  key={`cartitems${cartItem.id}`}className="">
              <div className="row mb-4 d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img src={whisky} className="img-fluid rounded-3" alt="foto producto"></img>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h4 className="text-muted">{cartItem.licor.category}</h4>
                  <h5 className="text-black mb-0">{cartItem.licor.name}</h5>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button className="btn px-2 yellow"><i className="fas fa-minus"></i></button>
                  <input value={cartItem.quantity}className="form-control form-control-sm" />
                  <button className="btn px-2 yellow"><i className="fas fa-plus"></i></button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0">{cartItem.licor.price} * {cartItem.quantity}</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <button className="btn  px-2 yellow"><i className="fas fa-times"></i></button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="row mb-4 d-flex justify-content-between align-items-center">
          <div className="col-4">
            <select className="form-select mb-4" required aria-label="select example" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}>
              <option value="">Método de pago </option>
              <option value="pagomovil"> Pagomóvil </option>
              <option value="transferencia">Transferencias bancarias  </option>
              <option value="tarjetaDeCredito">Tarjeta de crédito</option>
              <option value="efectivo">Efectivo </option>
              <option value="zelle">Zelle  </option>
              <option value="paypal">Paypal </option>
            </select>
          </div>
          <div className="col-4">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Cupon"></input>
                <span className="input-group-text bg-warning">Aplicar</span>
            </div>
          </div>
          <div className="col-4">
            <ul className="list-group text-start border-none">
              <li className="list-group-item border-none"><h5>Subtotal: 129.97$</h5></li>
              <li className="list-group-item border-none"><h5>I.V.A (16%): {129.97 * 0.16}$</h5></li>
              <li className="list-group-item border-none"><h5>Cupon: 5% off</h5></li>
              <li className="list-group-item border-none"><h5>Total $: {129.97 + 129.97 * 0.16}$</h5></li>
              <li className="list-group-item border-none"><h5>Total BS: 123123 bs</h5></li>
            </ul>
          </div>
        </div>
        <div className="text-end">
            <div className="">
              <button onClick={handlePay} className="btn btn-warning " type="button">Ir a pagar</button>
            </div>
        </div>
      </div>
    </div>

  )
}

export default FormPay