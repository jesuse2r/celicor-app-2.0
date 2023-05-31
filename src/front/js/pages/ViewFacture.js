import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import FormFacture from "../component/FormFacture.jsx";
import logo from "../../img/logo.jpg";
import Rating from "../component/rating.jsx";

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
    const totalIva = getTotal() * 0.16
    const totalMasIva = getTotal() * 1.16
    const totalBolivares = totalMasIva * 25.12
    let today = new Date()
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
                                <img className="blue" src={logo}></img>
                                <p className="pt-0">www.Celicor.co.ve</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                <ul className="list-unstyled">
                                    <li className="text-muted"><span>Nombre de Usuario : Santiago Arraez</span></li>
                                    <li className="text-muted">Direccion : Av. Fuerzas Armadas, Edificio Ayacucho</li>
                                    <li className="text-muted"><i className="fas fa-phone">
                                    </i> Telefono: 0412-3009516</li>
                                </ul>
                            </div>
                            <div className="col-xl-4">
                                <p className="text-muted">Datos de Compra</p>
                                <ul className="list-unstyled">
                                    <li className="text-muted"><i className="fas fa-circle" ></i> <span
                                        className="fw-bold">ID de Usuario:</span>1</li>
                                    <li className="text-muted"><i className="fas fa-circle" ></i> <span
                                        className="fw-bold">Fecha:</span>{today.toLocaleDateString()}</li>
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
                                    {store.cartItems.map((product) => (
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{product.licor.name}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.licor.price} $</td>
                                            <td>{(product.quantity * product.licor.price).toFixed(2)} $</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                <Rating />
                            </div>
                            <div className="col-xl-3">
                                <ul className="list-unstyled">
                                    <li className="text-muted ms-3"><span className="text-black me-4">SubTotal</span>{getTotal().toFixed(2)} $</li>
                                    <li className="text-muted ms-3 mt-2"><span className="text-black me-4">IVA(16%)</span>{totalIva.toFixed(2)}$</li>
                                    <li className="text-black  ms-3 ">Monto Total: {totalMasIva.toFixed(2)} $</li>
                                    <li className="text-black  ms-3">Monto Total: {totalBolivares.toFixed(2)} BS</li>
                                
                                </ul>
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
        </div>
}

export default ViewFacture