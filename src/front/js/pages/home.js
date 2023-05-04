import React, { useContext } from "react";
import { Context } from "../store/appContext";
import beer from "../../img/beer.png";
import whisky from "../../img/oldparr.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const ejemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


	return (
		<div className="">
			<div className="scrollmenu d-flex justify-content-around gap-2 fs-4">
				<p><a href="#">Whiskys <i className="fas fa-glass-whiskey"></i></a></p>
				<p><a href="#">Espumantes <i className="fas fa-wine-glass-alt"></i></a></p>
				<p><a href="#">Vodkas <i className="fas fa-wine-bottle"></i></a></p>
				<p><a href="#">Vinos <i className="fas fa-wine-glass"></i></a></p>
				<p><a href="#">Cerverzas <i className="fas fa-beer"></i></a></p>
				<p><a href="#">Rones  <i className="fas fa-glass-whiskey"></i></a></p>
				<p><a href="#">Otros</a></p>
			</div>
			<h3 className="yellow ms-4">Nuestra mejor seleccion de tipo:</h3>
			<div className="row">
				{ejemplo.map(() => {
					return (
							<div className="col-12-justify col-sm-6 col-md-4 col-lg-3">
								<div className="card yellow blue border-product m-3">
									<img src={whisky} className="card-img-top" alt="..."></img>
									<div className="card-body ">
										<h5 className="card-title">Old Parr 0.75Lts</h5>
										<p className="card-text">26.99$</p>
										<span className="d-flex justify-content-around gap-2">
											<button className="btn btn-warning yellow blue ">Detalles <i className="fas fa-info-circle"></i></button>
											<button className="btn btn-warning yellow blue">Agregar al  <i className="fas fa-shopping-cart"></i></button>
										</span>
									</div>
								</div>
							</div>
					)
				})}

			</div>
		</div>
	);
};
