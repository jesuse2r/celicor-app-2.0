import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import celicorGif from "../../img/corona.png";
import whisky from "../../img/oldparr.png";

import { useNavigate } from "react-router-dom";

 const Homedos = () => {
return (
  
  

  <div className="bg-gradient-to-br from-blue-50  via-white-1000 antialiased bg-no-repeat text-black">
     
     <img src={celicorGif} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-100 w-full object-cover object-center group-hover:opacity-75"/>
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
  
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-md text-black-700 font-extrabold justify-center flex items-center"> Grand Old parr 12 anos</h3>
          <p className="mt-1 text-lg font-medium text-white-900 justify-center flex items-center">$48</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-md text-gray-700">Nomad Tumbler</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky}alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky}alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
  
       
      </div>
    </div>
  </div>
  
)
 }

 export default Homedos