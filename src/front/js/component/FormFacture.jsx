import React,{useState, useContext} from "react";
import { Context } from "../store/appContext";
import Rating from "./rating.jsx";


const FormFacture = (props) => {
  const { store, actions } = useContext(Context);



    return (
       
       <>
        <div className="App">
   
    </div>
       <div className="card bg-light vh-100  ">
        <h5 className="card-header">Factura</h5>
        <div className="card-body">
          <h5 className="card-title">Orden</h5>
          <p className="card-text"> <i className="fas fa-calendar-week"></i>  Fecha </p>
          <p className="card-text"> <i className="fas fa-map-marker-alt"></i>  Direccion </p>
          <p>  <i className="fas fa-info-circle"></i>  Total</p>
       <Rating/>
        </div>
      </div>
      </>
        )
    }

 
    
    
    
    
    
    
    export default FormFacture