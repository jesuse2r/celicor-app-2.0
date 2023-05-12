import React, { Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";



export const Footer = () => {

	const navigate = useNavigate();
	return (
		<footer className="footer blue yellow fs-5">
			<div>
				<div className="row d-flex justify-content-center p-2">
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold">Tienda</p>
						<p><i className="fab fa-facebook-f"></i> @Celicor</p>
						<p><i className="fab fa-instagram"></i> @Celicor</p>
						<p><i className="fab fa-twitter"></i> @Celicor</p>
					</div>
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold">Ubicaciones</p>
						<p>Los Palos Grandes</p>
						<p>La Castellana</p>
						<p>El Cafetal</p>
						<p>Chacao</p>
					</div>
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold">De Interes</p>
						<p onClick={() => navigate("/about")}>Nosotros</p>
					</div>
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold">Delivery</p>
						<p>Lunes a Sábado de 8:00 am a 6:00 pm (entregas el mismo día para pedidos pagados antes de las 5:30 pm)</p>
					</div>
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold">Atención al cliente</p>
						<p>+58 04145555555 <i className="fab fa-whatsapp"></i></p>
						<p>atencionalcliente@celicor.com</p>
					</div>
				</div>
			</div>
		</footer>
	)
};
