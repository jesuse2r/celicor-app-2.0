import React, { useContext, useEffect, useState } from "react";
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
const {actions, store} = useContext(Context)
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
useEffect(()=>{
  const intervalId = setInterval(()=>{nextSlide()},10000)
  return ()=> clearInterval(intervalId)
},[currentIndex])
return (

<>

<div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
  
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-1000 carrusel-img '
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
    
    
    
    
   
    <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 w-50">
      <h2 className="">Products</h2>
  
      <div className="flex overflow-x-scroll gap-3">
        {store.products.map((product)=>{
          return (  <div className="flex flex-col flex-shrink-0 gap-3">
          <div className=" w-40  ">
            <img src={product.category} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-25 object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-md text-black-700 font-extrabold justify-center flex items-center"> {product.name}</h3>
          <p className="mt-1 text-lg font-medium text-white-900 justify-center flex items-center">{product.price}</p>
        <div className="flex justify-center ">
         <button onClick={() => actions.addToCart(product.id)}className="bg-black text-white  px-3 py-2">Agregar al carro</button>
         </div>
        </div>)
        })}
      
     
      
        
      
     
  
      </div>
    </div>
    <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 w-50">
      <h2 className="">Products</h2>
  
      <div className="flex overflow-x-scroll gap-3">
        {store.products.map((product)=>{
          return (  <div className="flex flex-col flex-shrink-0 gap-3">
          <div className=" w-40  ">
            <img src={product.category} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-25 object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-md text-black-700 font-extrabold justify-center flex items-center"> {product.name}</h3>
          <p className="mt-1 text-lg font-medium text-white-900 justify-center flex items-center">{product.price}</p>
        <div className="flex justify-center ">
         <button className="bg-black text-white  px-3 py-2">Agregar al carro</button>
         </div>
        </div>)
        })}
      
     
      
        
      
     
  
      </div>
    </div>
    <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 w-50">
      <h2 className="">Products</h2>
  
      <div className="flex overflow-x-scroll gap-3">
        {store.products.map((product)=>{
          return (  <div className="flex flex-col flex-shrink-0 gap-3">
          <div className=" w-40  ">
            <img src={product.category} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-25 object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-md text-black-700 font-extrabold justify-center flex items-center"> {product.name}</h3>
          <p className="mt-1 text-lg font-medium text-white-900 justify-center flex items-center">{product.price}</p>
        <div className="flex justify-center ">
         <button onClick={() => actions.addToCart(product.id)} className="bg-black text-white  px-3 py-2 btn">Agregar al carro</button>
         </div>
        </div>)
        })}
      
     
      
        
      
     
  
      </div>
    </div>
  </div>

  
  </>
)
 }

 export default Homedos