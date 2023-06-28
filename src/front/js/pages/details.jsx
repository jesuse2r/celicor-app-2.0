import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import whisky from "../../img/oldparr.png";
import { useNavigate } from "react-router-dom";
import Rating from "../component/rating.jsx";

export const Details = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const product = store.products.find((product) => {
    return product.id == params.id;
  });
  console.log(product);
  return (
    <div className="flex justify-center">
      <div class="w-full max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img
            class="p-16 rounded-t-lg"
            src={product?.category}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5>Nombre: {product?.name}</h5>
            <h5>Litros: {product?.litres}</h5>
            <h5>Origen: {product?.origen}</h5>
            <h5>Añejamineto: {product?.old}</h5>
            <h5>Precio: {product?.price} $</h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <Rating />
          </div>
          <div class="flex items-center justify-between">
            <span className="flex gap-5 mb-5">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  navigate("/");
                }}
              >
                Volver a la tienda!
              </button>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => actions.addToCart(product.id)}
              >
                Agregar al <i className="fas fa-shopping-cart"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
