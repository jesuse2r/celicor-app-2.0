import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import whisky from "../../img/oldparr.png";
import { useNavigate } from "react-router-dom";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const navigate = useNavigate();
	const product = store.products.find((product)=> {
		return (product.id == params.id)
	})
	console.log(product)
	return (
		<div className="d-flex justify-content-center align-items-center bg-light vh-100 ">
			<img className="w-25" src={whisky}></img>
			<div className="">
				<h2 className="yellow">Detalles:</h2>
				<h5>Nombre: {product?.name}</h5>
				<h5>Tamano: {product?.litres}</h5>
				<h5>Origen: {product?.origen}</h5>
				<h5>Anejamineto: {product?.old}</h5>
				<h5>Precio: {product?.price} $</h5>
				<span className="d-flex gap-3 mb-5">
					<button type="button" className="btn btn-warning yellow blue" onClick={() => { navigate("/") }}>Volver a la tienda!</button>
					<button className="btn btn-warning yellow blue" onClick={()=> actions.addToCart(product.id)}>Agregar al  <i className="fas fa-shopping-cart"></i></button>
				</span>
			</div>
		</div>
	);
};

export default Details;
