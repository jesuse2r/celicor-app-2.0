import React, { useContext } from "react";
import { Context } from "../store/appContext";
import beer from "../../img/beer.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			{/* <div className="scrollmenu d-flex justify-content-around fs-4">
				<p><a href="#">Whisky</a></p>
				<p><a href="#">Ron</a></p>
				<p><a href="#">Vinos</a></p>
				<p><a href="#">Espumantes</a></p>
				<p><a href="#">Vodka</a></p>
				<p><a href="#">Cerverza</a></p>
				<p><a href="#">Otros</a></p>
			</div> */}
			<div class="card cardd ">
				<img src={beer} class="card-img-top " alt="..."></img>
					<div class="card-body blue2">
						<h5 class="card-title">Old Parr 0.75Lts</h5>
						<p class="card-text">26.99$</p>
						<span className="d-flex justify-content-around">
							<button className="btn yellow blue ">hola</button>
							<button className="btn yellow blue">Add to <i className="fas fa-shopping-cart"></i></button>
						</span>
					</div>
			</div>
			<div class="card cardd ">
				<img src={beer} class="card-img-top " alt="..."></img>
					<div class="card-body blue2">
						<h5 class="card-title">Old Parr 0.75Lts</h5>
						<p class="card-text">26.99$</p>
						<span className="d-flex justify-content-around">
							<button className="btn yellow blue ">hola</button>
							<button className="btn yellow blue">Add to <i className="fas fa-shopping-cart"></i></button>
						</span>
					</div>
			</div>
			<div class="card cardd ">
				<img src={beer} class="card-img-top " alt="..."></img>
					<div class="card-body blue2">
						<h5 class="card-title">Old Parr 0.75Lts</h5>
						<p class="card-text">26.99$</p>
						<span className="d-flex justify-content-around">
							<button className="btn yellow blue ">hola</button>
							<button className="btn yellow blue">Add to <i className="fas fa-shopping-cart"></i></button>
						</span>
					</div>
			</div>
			<div class="card cardd ">
				<img src={beer} class="card-img-top " alt="..."></img>
					<div class="card-body blue2">
						<h5 class="card-title">Old Parr 0.75Lts</h5>
						<p class="card-text">26.99$</p>
						<span className="d-flex justify-content-around">
							<button className="btn yellow blue ">hola</button>
							<button className="btn yellow blue">Add to <i className="fas fa-shopping-cart"></i></button>
						</span>
					</div>
			</div>
			<div class="card cardd ">
				<img src={beer} class="card-img-top " alt="..."></img>
					<div class="card-body blue2">
						<h5 class="card-title">Old Parr 0.75Lts</h5>
						<p class="card-text">26.99$</p>
						<span className="d-flex justify-content-around">
							<button className="btn yellow blue ">hola</button>
							<button className="btn yellow blue">Add to <i className="fas fa-shopping-cart"></i></button>
						</span>
					</div>
			</div>
			<div class="card cardd ">
				<img src={beer} class="card-img-top " alt="..."></img>
					<div class="card-body blue2">
						<h5 class="card-title">Old Parr 0.75Lts</h5>
						<p class="card-text">26.99$</p>
						<span className="d-flex justify-content-around">
							<button className="btn yellow blue ">hola</button>
							<button className="btn yellow blue">Add to <i className="fas fa-shopping-cart"></i></button>
						</span>
					</div>
			</div>
		</div>
	);
};
