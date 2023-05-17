import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import beer from "../../img/beer.png";
import whisky from "../../img/oldparr.png";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const [type, setType] = useState("todos")
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const selectedProducts = store.products.filter((product) => product.types == type)
	console.log(selectedProducts)
	return (
		<div className="">
			<div className="scrollmenu d-flex justify-content-around gap-2 fs-4">
				<p onClick={() => setType("todos")}><a href="#">Todos <i className="fas fa-glass-whiskey"></i></a></p>
				<p onClick={() => setType("whiskys")}><a href="#">Whiskys <i className="fas fa-glass-whiskey"></i></a></p>
				<p onClick={() => setType("rones")}><a href="#">Rones  <i className="fas fa-glass-whiskey"></i></a></p>
				<p onClick={() => setType("vodkas")}><a href="#">Vodkas <i className="fas fa-wine-bottle"></i></a></p>
				<p onClick={() => setType("vinos")}><a href="#">Vinos <i className="fas fa-wine-glass"></i></a></p>
				<p onClick={() => setType("cervezas")}><a href="#">Cerverzas <i className="fas fa-beer"></i></a></p>
				<p onClick={() => setType("espumantes")}><a href="#">Espumantes <i className="fas fa-wine-glass-alt"></i></a></p>
				<p onClick={() => setType("otros")}><a href="#">Otros</a></p>
			</div>
			<h3 className="yellow ms-4">Nuestra mejor seleccion de {type}:</h3>
			<div className="row w-100">
				{
					type == "todos" ?
						store.products.map((product) => {
							return (
								<div key={`product${product.id}`} className="col-12-justify col-sm-6 col-md-4 col-lg-3">
									<div className="card border-product m-3">
										<img src={whisky} className="card-img-top" alt="..."></img>
										<div className="card-body ">
											<h5 className="card-title ">{product.name}</h5>
											<p className="card-text">{product.price}$</p>
											<span className="d-flex justify-content-around gap-2">
												<button className="btn btn-warning yellow blue" onClick={() => { navigate(`/details/${product.id}`) }}>Detalles <i className="fas fa-info-circle"></i></button>
												<button className="btn btn-warning yellow blue" onClick={() => actions.addToCart(product.id)}>Agregar al  <i className="fas fa-shopping-cart"></i></button>
											</span>
										</div>
									</div>
								</div>
							)
						}) :
						selectedProducts.map((product) => {
							return (
								<div key={`product${product.id}`} className="col-12-justify col-sm-6 col-md-4 col-lg-3">
									<div className="card border-product m-3">
										<img src={whisky} className="card-img-top" alt="..."></img>
										<div className="card-body ">
											<h5 className="card-title ">{product.name}</h5>
											<p className="card-text">{product.price}$</p>
											<span className="d-flex justify-content-around gap-2">
												<button className="btn btn-warning yellow blue" onClick={() => { navigate(`/details/${product.id}`) }}>Detalles <i className="fas fa-info-circle"></i></button>
												<button className="btn btn-warning yellow blue" onClick={() => actions.addToCart(product.id)}>Agregar al  <i className="fas fa-shopping-cart"></i></button>
											</span>
										</div>
									</div>
								</div>)

						})
				}
			</div>
		</div>
	);
};
