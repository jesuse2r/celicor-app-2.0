import React, { Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/about.css";


export const Footer = () => {

	const navigate = useNavigate();
	return (
		<div className="bg-warning text-blue">
		<footer className="footer  fs-6">
			<div>
				<div className="row d-flex justify-content-center p-2">
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold">Tienda</p>
						<p><a  href="https://www.facebook.com/profile.php?id=100074430510278&mibextid=LQQJ4d" className="card-link text-primary "><i className="fab fa-facebook-f"></i> </a>@Celicor</p>
						<p><a  href="https://instagram.com/celicorfuerzasarmadas1?igshid=NTc4MTIwNjQ2YQ==" className="card-link text-danger "><i className="fab fa-instagram"></i> </a>@Celicor</p>
						<p><a  href="https://twitter.com/celicor_oficial?s=11&t=14xfkczfoNch4q92RX0vBw" className="card-link text-info "><i className="fab fa-twitter"></i> </a>@Celicor</p>
					</div>
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold">Ubicaciones</p>
						<p>Fuerzas Armadas</p>
						<p>Los Palos Grandes</p>
						<p>La Castellana</p>
						<p>Chacao</p>
					</div>
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold ">De Interés</p>
						<p onClick={() => navigate("/about")} className="pointer">Nosotros como empresa</p>
						<p>Terminos y Condiciones</p>
					</div>
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold">Delivery</p>
						<p>Lunes a Sábado de 8:00 am a 6:00 pm (entregas inmediatas, para pedidos pagados antes de las 5:30 pm.)</p>
					</div>
					<div className="col-6 col-sm-4 col-lg-2 text-center">
						<p className="fs-3 fw-bold">Atención al cliente</p>
						<p>Número de contacto</p>
						<p><a  href="https://api.whatsapp.com/send/?phone=4142776795&text&type=phone_number&app_absent= " className="card-link text-success "><i className=" fab fa-whatsapp"> </i>+ 58 4142776795</a></p>
					

		
						
					

					<p>Atencionalcliente@celicor.com</p>
				</div>
			</div>
		</div>
		</footer >
		</div>
	)
};
