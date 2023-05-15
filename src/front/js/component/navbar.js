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
		<nav className="navigationbar ">
			<div className="d-flex justify-content-between ">
				<Link to="/">
					<img src={logo} className="logo"></img>
				</Link>
				<div className="d-flex align-items-center gap-3">
					{store.token ? (
						<span className="d-flex gap-2">
							<Link to="/viewpay">
								<button className="btn btn-warning">
									<i className="fas fa-shopping-cart"></i>
								</button>
							</Link>
							<button className="btn btn-warning" onClick={navigateToProfile}>
								Profile
							</button>
							<button className="btn btn-warning " onClick={() => { actions.handleLogout() }}>
								Loguot
							</button>
						</span>
					) : (
						<span className="d-flex gap-2">
							<button className="btn btn-warning" onClick={navigateToLogin}>
								Login
							</button>
							<button className="btn btn-warning " onClick={navigateToRegister}>
								Register
							</button>
						</span>
					)}
				</div>
			</div>
		</nav>
	);
};
