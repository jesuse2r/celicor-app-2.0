import React, { useContext } from "react";
import { Link, useActionData } from "react-router-dom";
import logo from "../../img/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const navigateToLogin = () => {
		navigate("/login");
	};
	const navigateToRegister = () => {
		navigate("/register");
	};
	const navigateToProfile = () => {
		navigate("/profile");
	};

	return (
		<nav className="navigationbar px-2">
			<div className="d-flex justify-content-between w-100">
				<Link to="/">
					<img src={logo} className="logo"></img>
				</Link>
				<div className="d-flex align-items-center gap-3">
					{store.token ? (
						<span className="d-flex gap-2">
							<Link to="/viewpay">
								
									<i className="fas fa-shopping-cart"></i>
								
							</Link>
							<button className="btn btn-warning" onClick={navigateToProfile}>
								Datos
							</button>
							<button className="btn btn-warning " onClick={() => { actions.handleLogout() }}>
								Salir
							</button>
						</span>
					) : (
						<span className="d-flex gap-2">
							<button className="btn btn-warning" onClick={navigateToLogin}>
								Acceder
							</button>
							<button className="btn btn-warning " onClick={navigateToRegister}>
								Registrarte
							</button>
						</span>
					)}
				</div>
			</div>
		</nav>
	);
};
