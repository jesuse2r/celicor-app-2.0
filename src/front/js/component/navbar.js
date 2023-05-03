import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";


export const Navbar = () => {
	return (
		<nav className="navigationbar">
			<div className="d-flex justify-content-between">
				<Link to="/">
					<img src={logo} className="logo"></img>
				</Link>
				<div className="d-flex align-items-center gap-3">
					<button className="btn btn-warning"><i className="fas fa-shopping-cart"></i></button>
					<button className="btn btn-warning ">Login/register</button>
				</div>
			</div>
		</nav>
	);
};
