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
	const Whisky = {
		"nombre": "Old Parr",
		"tipo": "Whisky",
		"tamaño": "0.75 lts",
		"origen": "Escocia",
		"precio": "25.99$",
		"añejamiento": "De luxe"
	}

	return (
		<div className="d-flex justify-content-center align-items-center">
			<img className="w-25" src={whisky}></img>
			<div className="border-product p-3 card">
				<h2 className="yellow">Detalles:</h2>
				<h5>Nombre: {Whisky.nombre}</h5>
				<h5>Tipo: {Whisky.tipo}</h5>
				<h5>Tamano: {Whisky.tamaño}</h5>
				<h5>Origen: {Whisky.origen}</h5>
				<h5>Anejamineto: {Whisky.añejamiento}</h5>
				<h5>Precio: {Whisky.precio}</h5>
				<span className="d-flex gap-3">
					<button type="button" className="btn btn-warning yellow blue" onClick={() => { navigate("/") }}>Volver a la tienda!</button>
					<button className="btn btn-warning yellow blue">Agregar al  <i className="fas fa-shopping-cart"></i></button>
				</span>
			</div>
		</div>
	);
};

export default Details;
