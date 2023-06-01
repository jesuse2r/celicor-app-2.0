import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import celicorGif from "../../img/corona.png";
import whisky from "../../img/oldparr.png";

import { useNavigate } from "react-router-dom";

 const Homedos = () => {
  const slides = [
    {
   url: 'https://revistaelconocedor.com/wp-content/uploads/2020/12/Buchanans_ok_NHH3236.png',
    },
   {
      url: 'https://primicia.com.ve/wp-content/uploads/2022/09/SANTA-TERESA-1796-ARRASA-CON-DOS-MEDALLAS-DE-ORO-EN-ESTADOS-UNIDOS.png',
 },
 {
   url: 'https://media.gq.com.mx/photos/61ae4c3f7083d8c4d9f9dfb9/4:3/w_2668,h_2001,c_limit/Johnnie-Walker-Blue-1.jpg',
 },

 {
   url: 'https://www.royalsalute.com/wp-content/uploads/2021/05/FULL-RANGE.jpg',
 },
 {
   url: 'https://1000marcas.net/wp-content/uploads/2022/12/Best-Vodka-Brands.png',
 },
 
];

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
 const isFirstSlide = currentIndex === 0;
 const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
 setCurrentIndex(newIndex);
};

const nextSlide = () => {
 const isLastSlide = currentIndex === slides.length - 1;
 const newIndex = isLastSlide ? 0 : currentIndex + 1;
 setCurrentIndex(newIndex);
};

const goToSlide = (slideIndex) => {
 setCurrentIndex(slideIndex);
};
return (

<>
<div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 carrusel-img '
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <div onClick={prevSlide} size={30}> <i className="fas fa-arrow-left"></i> </div>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <div onClick={nextSlide} size={30}> <i className="fas fa-arrow-right"></i> </div>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
         
          </div>
        ))}
      </div>
    </div>


  
  

  
  
  
  
  
  
  
  
  
  
  <div className="bg-white antialiased bg-no-repeat text-black">
    
    
    
   
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
  
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-md text-black-700 font-extrabold justify-center flex items-center"> Grand Old parr 12 anos</h3>
          <p className="mt-1 text-lg font-medium text-white-900 justify-center flex items-center">$48</p>
         
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-md text-gray-700">Nomad Tumbler</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky}alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky}alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
            <img src={whisky} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
  
      </div>
    </div>
  </div>
  </>
)
 }

 export default Homedos