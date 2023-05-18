import React from "react";
import logo from "../../img/logo.png";
import sede from "../../img/sede.jpg";
import "../../styles/about.css";
import { useNavigate } from "react-router-dom";
import Santiago from "../../img/Santiago.jpg";
import Raul from "../../img/Raul.jpg"
import Jesus from "../../img/Jesus.jpg"




const About = () => {
    const navigate = useNavigate();
    return (

        <div>
            <div className="container d-flex justify-content-center  ">


                <div className="d-flex align-items-center  ">
                    <div className="yellow fs-5 text-justify ">
                        <div className="justify-content-center d-flex">
                            <img src={logo} className="w-25" alt="logo" />
                        </div>

                        <div className="card-body d-flex justify-content- center">
                            <img src={sede} alt="sede" className="m-2 letf rounded-2 w-75" />
                            <p className="card-text m-2 fw-bold text-center mt-5 fs-5">
                                ❝ Celicor Boutique es una empresa dedicada a la venta de todo
                                tipo licores contando con una gran variedad para nuestros
                                usuarios, contamos con diferentes ubicaciones para que puedan
                                disfrutar de nuestro productos sin problema alguno. Lanzamos la
                                web de Celicor para que puedas disfrutar de la alta gama que
                                tenemos disponible para ti en todo momento con un catalogo y
                                cotizaciones en linea para que disfrutes de nuestros productos ❞
                            </p>




                            <p className="card-text m-2 fw-bold text-start mt-5 fs-5  ">
                            </p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5" >

                                <div className="col justify-content-center d-flex">
                                    <div className="card h-100 w-100 border-product">
                                        <img src={Santiago} className="card-img-top w-100 imagen h-50" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title fs-2 fw-bold">Desarrollador de Software</h5>
                                            <p className="card-text">Mi nombre es Santiago Arráez, soy de Barquisimeto, estado Lara, comencé el curso de 4Geeks Academy porque el programar siempre estuvo entre mis metas personales, ya que su area es muy extensa e interesante. </p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-body-secondary"> Para este proyecto se utlizó: HTML, CSS, Bootstrap, Python, React Js, Flask, Postgressql, Firebase. </small> 
                                            <p>Gracias por todo !! <i class="far fa-laugh-beam"></i></p> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 w-100 border-product">
                                        <img src={Jesus} className="card-img-top w-100 imagen h-50" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title fs-2 fw-bold">Desarrollador de Software</h5>
                                            <p className="card-text">Mi nombre es Jesús Rodriguez soy de Caracas, estado Distrito Capital, comencé el curso de 4Geeks Academy porque soy amante de la tecnología y programar se convirtio en mi nuevo estilo de vida.
                                            </p>
                                            
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-body-secondary" > Para este proyecto se utlizó: HTML, CSS, Bootstrap, Python, React Js, Flask, Postgressql, Firebase. </small> 
                                            <p>Gracias por todo !! <i class="far fa-laugh-beam"></i></p> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 w-100 border-product">
                                        <img src={Raul} className="card-img-top w-100 h-50 imagen" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title fs-2 fw-bold">Desarrollador de Software</h5>
                                            <p className="card-text">
Mi nombre es    Raúl Álvarez soy de San Antonio de los Altos, estado Miranda, comencé el curso de 4Geeks Academy porque lo veo como una experiencia  para tener nuevas oportunidades laborales y extender mi conocimiento sobre las nuevas tecnologías. </p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-body-secondary"> Para este proyecto se utlizó: HTML, CSS, Bootstrap, Python, React Js, Flask, Postgressql, Firebase. </small> 
                                    <p>Gracias por todo !! <i class="far fa-laugh-beam"></i></p> 
                                        </div>
                                        
                                    </div>
                                    
                              
                                </div>
                                
                            </div>

                        </div>
                        <div className="justify-content-center d-flex">
                                        <button
                                            type="button"
                                            className="btn btn-outline-warning yellow  m-4  fs-4 "
                                            onClick={() => {
                                                navigate("/");
                                            }}
                                        >
                                            Página Principal
                                        </button>
                                    </div>
                    </div>
                </div>
            </div>
        </div>



    )

}







export default About