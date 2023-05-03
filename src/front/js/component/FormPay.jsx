import React, { useState } from "react";
import { Link } from "react-router-dom";



const FormPay = (props) => {
 

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

  

    props.setHandleCredit({ ...setValue, [metodoPago]: true })



  }
  return (
    <>
   
      <div className="m-5 w-25 border border-black-4 p-4">
      <div className="text-black "><h1 className="text-center">Resumen del pedido</h1>  </div>
        <label htmlFor="exampleFormControlInput1" className="form-label">Dirección de envio</label>
        <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="escribe direccion de envio" />
        <select className="form-select mb-4" required aria-label="select example" value={metodoPago} onChange={(e)=> setMetodoPago(e.target.value)}>
          <option value="">Método de pago </option>

          <option value="pagomovil"> Pagomóvil </option>
          <option value="transferencia">Transferencias bancarias  </option>
          <option value="tarjetaDeCredito">Tarjeta de crédito</option>
          <option value="efectivo">Efectivo </option>
          <option value="zelle">Zelle  </option>
          <option value="paypal">Paypal </option>
        </select>
        <div className="invalid-feedback">Example invalid select feedback</div>

        <div className="invalid-feedback">Example invalid select feedback</div>


      




        <div className="input-group mb-3">
          <div className="mb-3">

          </div>

          <span className="input-group-text " id="basic-addon1">Subtotal</span>
          <input type="text" className="form-control" placeholder="Bs." aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Ahorro</span>
          <input type="text" className="form-control" placeholder="Bs." aria-label="" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Monto</span>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
          <span className="input-group-text">Bs</span>

        </div>




        <div className="input-group mb-3">
          <span className="input-group-text">Monto</span>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
          <span className="input-group-text">$</span>
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Codigo Promocional</span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-warning me-md-2" type="button">Aplicar</button>

          </div>
        </div>


        <div className="justify-content-center d-flex">
          <div className="d-grid gap-2 d-md-block  ">
            <button  onClick={handlePay}  className="btn btn-warning " type="button">Ir a pagar</button>
          </div>



        </div>




      </div>
    </>

  )
}


export default FormPay