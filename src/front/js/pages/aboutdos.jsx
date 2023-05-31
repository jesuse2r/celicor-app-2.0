import React from "react";
import logo from "../../img/logo.jpg";
import fransu from "../../img/fransu.jpg";
import "../../styles/about.css";
import { useNavigate } from "react-router-dom";

const Aboutdos = () => {
    const navigate = useNavigate();
    return ( <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lideres del equipo Celicor</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">Más de 20 añor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de teo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrón</p>
      </div>
      <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-32 w-32 rounded-full" src={fransu} alt=""/>
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Fernando Costa</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">Lider del equipo </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-x-6">
            <img className="h-32 w-32 rounded-full" src={fransu} alt=""/>
            <div>
              <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Fatima Costa</h3>
              <p className="text-sm font-semibold leading-6 text-indigo-600">Gerente del equipo </p>
            </div>
          </div>
        </li>
       
      </ul>
    </div>
  </div>
  


    )
}
export default Aboutdos