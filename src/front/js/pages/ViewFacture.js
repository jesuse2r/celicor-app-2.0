import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import FormFacture from "../component/FormFacture.jsx";
import logo from "../../img/logo.png";

const ViewFacture = () => {
    const { store, actions } = useContext(Context);
    const getTotal = () => {
        let total = 0;
        for (let item of store.cartItems) {
            total = total + item.licor.price * item.quantity;
            console.log(total);
        }
        return total;
    };

    return <div className="bg-light">
        <div className="card">
            <div className="card-body">
                <div className="container mb-5 mt-3">
                    <div className="row d-flex align-items-baseline">
                        <div className="col-xl-9">
                            <p className="color: #7e8d9f;font-size: 20px;" > <strong> RIF J-29875722-1</strong></p>
                        </div>
                        <div className="col-xl-3 float-end ">
                            <p className="btn btn-light text-capitalize border-0 m-2" data-mdb-ripple-color="dark"><i
                                className="fas fa-print text-primary"></i> Imprimir</p>
                            <p className="btn btn-light text-capitalize m-2" data-mdb-ripple-color="dark"><i
                                className="far fa-file-pdf text-danger"></i> Exportar</p>
                        </div>

                    </div>

                    <div className="container">
                        <div className="col-md-12">
                            <div className="text-center">
                                <img src={logo}></img>
                                <p className="pt-0">www.Celicor.co.ve</p>
                            </div>

                        </div>


                        <div className="row">
                            <div className="col-xl-8">
                                <ul className="list-unstyled">
                                    <li className="text-muted"><span>Nombre de Usuario</span></li>
                                    <li className="text-muted">Direccion</li>
                                    <li className="text-muted"><i className="fas fa-phone">
                                    </i> Telefono</li>
                                </ul>
                            </div>
                            <div className="col-xl-4">
                                <p className="text-muted">Datos de Compra</p>
                                <ul className="list-unstyled">
                                    <li className="text-muted"><i className="fas fa-circle" ></i> <span
                                        className="fw-bold">ID:</span>1</li>
                                    <li className="text-muted"><i className="fas fa-circle" ></i> <span
                                        className="fw-bold">Fecha: </span>17/05/2023</li>
                                    <li className="text-muted"><i className="fas fa-circle" ></i> <span
                                        className="me-1 fw-bold">Status:</span><span className="badge bg-success text-black fw-bold">
                                            Pagado</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="row my-2 mx-1 justify-content-center">
                            <table className="table table-striped table-borderless">
                                <thead >
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Descripcion</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Monto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Ron</td>
                                        <td>4</td>
                                        <td>$30</td>
                                        <td>$30</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Ron</td>
                                        <td>1</td>
                                        <td>$30</td>
                                        <td>$30</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Ron</td>
                                        <td>1 </td>
                                        <td>$30</td>
                                        <td>$30</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                <p className="ms-3">Agregar informacion adicional y informacion sobre el pago</p>

                            </div>
                            <div className="col-xl-3">
                                <ul className="list-unstyled">
                                    <li className="text-muted ms-3"><span className="text-black me-4">SubTotal</span>{getTotal()} $</li>
                                    <li className="text-muted ms-3 mt-2"><span className="text-black me-4">IVA(16%)</span>{getTotal() * 0.16}$</li>
                                </ul>
                                <p className="text-black float-start"><span className="text-black me-3"> Monto Total</span><span
                                >{getTotal() * 25.12} BS</span></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-10">
                                <p>Gracias por su Compra</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        <FormFacture /></div>

}

export default ViewFacture