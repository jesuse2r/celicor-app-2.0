import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import whisky from "../../img/oldparr.png";
import { useNavigate } from "react-router-dom";
import carritoVacio from "../../img/carritoVacio.png";
const FormPay = (props) => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [metodoPago, setMetodoPago] = useState("");

  
  const setValue = {
    pagomovil: false,
    tarjetaDeCredito: false,
    zelle: false,
    paypal: false,
    transferencia: false,
    efectivo: false,
  };
  const handlePay = (e) => {
    props.setHandleCredit({ ...setValue, [metodoPago]: true });
  }
  const getTotal = () => {
    let total = 0
    for (let item of store.cartItems) {
      total = total + (item.licor.price * item.quantity)
    }
    return total
  }

  const totalIva = getTotal() * 0.16
  const totalMasIva= getTotal() * 1.16 
  const totalBolivares=  totalMasIva * 25.12

  useEffect(()=>{

    actions.getCartItems()

  }, [])
  if (store?.cartItems.length == 0) {
    return (
      <div className="d-flex justify-content-center gap-5 align-items-center bg-light vh-100 ">
        <img className="carrito-foto" src={carritoVacio}></img>
        <span className="text-center">
        <h2 className="border-cart blue yellow fs-1">No hay elementos en el carrito!</h2>
        <button type="button" className="btn btn-warning yellow blue fs-3" onClick={() => { navigate("/") }}>Volver a la tienda!</button>
        </span>
      </div>
    )
  }
  return (
    <div className="text-center bg-light fs-5">
      <div className="m-4  p-4 ">
        <div className="yellow d-flex justify-content-center gap-5">
          <h1 className="text-center display-5">Resumen del pedido</h1>
          <button type="button" className="btn btn-warning yellow blue" onClick={() => { navigate("/") }}>Seguir comprando!</button>
        </div>
        {store.cartItems?.length == 0 && (
          <h2>No tienes elementos en el carrito</h2>
        )}
        {store.cartItems?.map((cartItem) => {
          
          return (
            <div key={`cartitems${cartItem.id}`} className="">
              <div className="row mb-4 d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={cartItem.licor.category}
                    className="img-fluid rounded-3"
                    alt="foto producto"
                  ></img>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <h4 className="text-muted fs-2">{cartItem.licor.types}</h4>
                  <h5 className="text-black mb-0 fs-3">{cartItem.licor.name}</h5>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button onClick={() => (actions.updateCartItems(cartItem.cart_id, cartItem.quantity - 1, cartItem.licores_id))}
                    className="btn px-2 yellow"><i className="fas fa-minus"></i></button>
                  <h4 className="border-cart blue yellow">{cartItem.quantity}</h4>
                  <button onClick={() => (actions.updateCartItems(cartItem.cart_id, cartItem.quantity + 1, cartItem.licores_id))}
                    className="btn px-2 yellow"><i className="fas fa-plus"></i></button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0 fs-3 border-cart blue yellow">{`${((cartItem.licor.price) * cartItem.quantity).toFixed(2)}`}$</h5>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <button
                    onClick={() =>
                      actions.deleteCartItem(
                        cartItem.licores_id,
                        cartItem.cart_id
                      )
                    }
                    className="btn  px-2 yellow"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="row mb-4 d-flex justify-content-around align-items-center ">
          <div className="col-4">
            <select
              className="form-select mb-4 fs-5"
              required
              aria-label="select example"
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
            >
              <option value="">Método de pago </option>
              <option value="pagomovil"> Pagomóvil </option>
              <option value="transferencia">Transferencias bancarias </option>
              <option value="tarjetaDeCredito">Tarjeta de crédito</option>
              <option value="efectivo">Efectivo </option>
              <option value="zelle">Zelle </option>
              <option value="paypal">Paypal </option>
            </select>
          </div>
          {/*  <div className="col-4">
          <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Cupon"></input>
                <span className="input-group-text bg-warning">Aplicar</span>
            </div> 
          </div> */}
          <div className="col-4 bg-light fw-bold fs-5">
            <span ><h5 className="">Subtotal:</h5></span>
            <span><h5 className="">I.V.A (16%):</h5></span>
            <span><h5 className="fw-bold fs-5">Total $:</h5></span>
            <span ><h5 className="fw-bold fs-5">Total BS:</h5></span>
          </div>
          <div className="list-item col-4 bg-light fw-bold fs-5">
            <span ><h5 className="fs-4">{getTotal().toFixed(2)}  $</h5></span>
            <span><h5 className="fs-4">{totalIva.toFixed(2)}$</h5></span>
            <span><h5 className="fs-4">{totalMasIva.toFixed(2)}$</h5></span>
            <span ><h5 className="fs-4">{totalBolivares.toFixed(2)} BS</h5></span>
          </div>
        </div>
        <div className="text-center ">
          <div className="">
            <button
              onClick={handlePay}
              className="btn btn-warning w-25 fs-4"
              type="button"
            >
              Ir a pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPay;
