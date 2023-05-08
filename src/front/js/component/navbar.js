import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { NavLink, useNavigate } from "react-router-dom";


export const Navbar = () => {
	const navigate = useNavigate();
	const navigateToLogin = ()=>{
		navigate("/login")
	}
	const navigateToRegister = ()=>{
		navigate("/register")
	}
	return (
		<nav className="navigationbar">
			<div className="d-flex justify-content-between">
				<Link to="/">
					<img src={logo} className="logo"></img>
				</Link>
				<div className="d-flex align-items-center gap-3">
					<Link to="/viewpay">
						<button className="btn btn-warning"><i className="fas fa-shopping-cart"></i></button>
					</Link>
					<button className="btn btn-warning" onClick={navigateToLogin}>Login</button>
					<button className="btn btn-warning " onClick={navigateToRegister}>Register</button>
				</div>
			</div>
		</nav>
	);
};
