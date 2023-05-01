import React,{useState} from "react";



const FormPay = (props) => {
  console.log(props)

  const [metodoPago,setMetodoPago] = useState("")
  
  const setValue = {pagomovil: false,
  tarjetaDeCredito: false,
  zelle: false,
  paypal: false,
  transferencia: false,
  efectivo: false}
 const handlePay = (e) => {

  setMetodoPago(e.target.value)
 console.log(e.target.value)
  props.setHandleCredit({...setValue, [e.target.value] : true})

  
  
}
  return (
    <>
      <div className="text-black justify-content-center d-flex "><h1>Resumen del pedido</h1>  </div>
      <div className="m-5 w-25 border border-black-4 p-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">Direccion de envio</label>
        <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="escribe direccion de envio" />
        <select className="form-select mb-4" required aria-label="select example" value={metodoPago} onChange={handlePay}>
          <option value="">Metodo de pago </option>

          <option value="pagomovil"> Pagomovil </option> 
          <option value="transferencia">Transferencias bancarias  </option>
          <option value="tarjetaDeCredito">Tarjeta de credito</option>
          <option value="efectivo">Efectivo </option>
          <option value="zelle">Zelle  </option>
          <option value="paypal">Paypal </option>
        </select>
        <div className="invalid-feedback">Example invalid select feedback</div>

        <div className="invalid-feedback">Example invalid select feedback</div>


        <div className="form-check form-check-inline mb-4">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label  className="form-check-label" htmlFor="inlineRadio1"> <i className="fas fa-dollar-sign"></i></label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2">Bs.</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2"><i className="fab fa-cc-paypal"></i></label>
</div>
<div className="form-check form-check-inline" >
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2"><i className="fas fa-money-check"></i></label>
</div>
<div className="form-check form-check-inline " >
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" htmlFor="inlineRadio2"><i className="fab fa-btc"></i></label>
</div>




        <div className="input-group mb-3">
          <div className="mb-3">

          </div>

          <span className="input-group-text " id="basic-addon1">subtotal</span>
          <input type="text" className="form-control" placeholder="Bs." aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">ahorro</span>
          <input type="text" className="form-control" placeholder="Bs." aria-label="" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">monto</span>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
          <span className="input-group-text">Bs</span>

        </div>




        <div className="input-group mb-3">
          <span className="input-group-text">monto</span>
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
          <span className="input-group-text">$</span>
        </div>
        <div className="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm">Codigo Promocional</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-warning me-md-2" type="button">Aplicar</button>
 
</div>
</div>


        <div className="justify-content-center d-flex">
          <div className="d-grid gap-2 d-md-block  ">
            <button onClick={()=>props.setHandleCredit (true)} className="btn btn-warning " type="button">Ir a pagar</button>
          </div>
          


        </div>
  


       
      </div>
    </>

  )
}


export default FormPay