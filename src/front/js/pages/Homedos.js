import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import { useNavigate } from "react-router-dom";

const Homedos = () => {
  const navigate = useNavigate();
  const slides = [
    {
      url: 'https://www.roncarupano.com/wp-content/uploads/2023/01/ron-carupano-portada-v2.jpg',
    },
    {
      url: 'https://primicia.com.ve/wp-content/uploads/2022/09/SANTA-TERESA-1796-ARRASA-CON-DOS-MEDALLAS-DE-ORO-EN-ESTADOS-UNIDOS.png',
    },
    {
      url: 'https://cdn.bitlysdowssl-aws.com/wp-content/uploads/2022/12/Imagen-Nota-de-prensa-El-Nacional.jpg',
    },

    {
      url: 'https://www.royalsalute.com/wp-content/uploads/2021/05/FULL-RANGE.jpg',
    },
    {
      url: 'https://i.pinimg.com/originals/71/ca/f3/71caf3b094ae220c9f5fc37c3ffabc18.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/526084_073f69f38f044f5faf414890aae407ff~mv2.png/v1/fill/w_1942,h_728,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/CVZ_2023_IMAGEN_BANNER-WEB_4000X1500.png'

    },
  ];
  const { actions, store } = useContext(Context)
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
  useEffect(() => {
    const intervalId = setInterval(() => { nextSlide() }, 10000)
    return () => clearInterval(intervalId)
  }, [currentIndex])
  return (

    <>

      <div className='hidden md:flex max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>

        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className=' w-full h-full rounded-2xl bg-center bg-cover duration-100000 carrusel-img '
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
          <h1 className="font-extrabold text-3xl">Whiskys</h1>

          <div className="flex overflow-x-scroll gap-3">
            {store.products.filter(product => product.category == "whisky").map((product) => {
              return (<div key={product.id} className="flex flex-col flex-shrink-0 gap-3 min-w-0">
                <div className="flex justify-center ">
                  <div className="w-60 font-thin  max-w-sm bg-white  rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                    <a className="w-40" href="#">
                      <img className="p-4 rounded-t-lg w-25 object-cover object-center group-hover:opacity-75" src={product.image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                      <a href="#">
                        <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral">{product.name}</p>
                      </a>
                      <div className="flex items-center mt-2.5 mb-5">

                      </div>
                      <button className="btn btn-warning yellow blue" onClick={() => { navigate(`/details/${product.id}`) }}>Detalles <i className="fas fa-info-circle"></i></button>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-neutral-900 dark:text-neutral">$ {product.price}</span>
                        <button onClick={() => actions.addToCart(product.id)} className="bg-black text-white  px-3 py-2 btn focus:outline-none rounded-lg gap-2">Agregar al carro</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              )
            })}
          </div>

        </div>


        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 w-50">
          <h1 className="font-extrabold text-3xl">Rones</h1>

          <div className="flex overflow-x-scroll gap-3">
            {store.products.filter(product => product.category == "rones").map((product) => {
              return (<div key={product.id} className="flex flex-col flex-shrink-0 gap-3 min-w-0">
                <div className="flex justify-center ">
                  <div className="w-60 font-thin  max-w-sm bg-white  rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                    <a className="w-40" href="#">
                      <img className="p-4 rounded-t-lg w-25 object-cover object-center group-hover:opacity-75" src={product.image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                      <a href="#">
                        <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral">{product.name}</p>
                      </a>
                      <div className="flex items-center mt-2.5 mb-5">

                      </div>
                      <button className="btn btn-warning yellow blue" onClick={() => { navigate(`/details/${product.id}`) }}>Detalles <i className="fas fa-info-circle"></i></button>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-neutral-900 dark:text-neutral">$ {product.price}</span>
                        <button onClick={() => actions.addToCart(product.id)} className="bg-black text-white  px-3 py-2 btn focus:outline-none rounded-lg gap-2">Agregar al carro</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              )
            })}
          </div>

        </div>
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 w-50">
          <h1 className="font-extrabold text-3xl">Vodkas</h1>

          <div className="flex overflow-x-scroll gap-3">
            {store.products.filter(product => product.category == "vodkas").map((product) => {
              return (<div key={product.id} className="flex flex-col flex-shrink-0 gap-3 min-w-0">
                <div className="flex justify-center ">
                  <div className="w-60 font-thin  max-w-sm bg-white  rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                    <a className="w-40" href="#">
                      <img className="p-4 rounded-t-lg w-25 object-cover object-center group-hover:opacity-75" src={product.image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                      <a href="#">
                        <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral">{product.name}</p>
                      </a>
                      <div className="flex items-center mt-2.5 mb-5">

                      </div>
                      <button className="btn btn-warning yellow blue" onClick={() => { navigate(`/details/${product.id}`) }}>Detalles <i className="fas fa-info-circle"></i></button>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-neutral-900 dark:text-neutral">$ {product.price}</span>
                        <button onClick={() => actions.addToCart(product.id)} className="bg-black text-white  px-3 py-2 btn focus:outline-none rounded-lg gap-2">Agregar al carro</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              )
            })}
          </div>

        </div>
      </div>


    </>
  )
}

export default Homedos