import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Rating from "../component/rating.jsx";




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
          <h1 className="font-extrabold text-3xl">Products</h1>

          <div className="flex overflow-x-scroll gap-3">
            {store.products.map((product) => {
              return (<div className="flex flex-col flex-shrink-0 gap-3">


                <div className="flex justify-center ">




                  <div class="w-60 font-thin  max-w-sm bg-white  rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                    <a className="w-40" href="#">
                      <img class="p-4 rounded-t-lg w-25 object-cover object-center group-hover:opacity-75" src={product.category} alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                      <a href="#">
                        <p class="text-xl font-semibold tracking-tight text-gray-900 dark:text-neutral">{product.name}</p>
                      </a>
                      <div class="flex items-center mt-2.5 mb-5">
                      <Rating />
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-neutral-900 dark:text-neutral">{product.price} $</span>
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
          <h2 className="">Products</h2>

          <div className="flex overflow-x-scroll gap-3">
            {store.products.map((product) => {
              return (<div className="flex flex-col flex-shrink-0 gap-3">


                <div className="flex justify-center ">




                  <div class="w-60  max-w-sm bg-white  rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                    <a className="w-40" href="#">
                      <img class="p-4 rounded-t-lg w-25 object-cover object-center group-hover:opacity-75" src={product.category} alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                      <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                      </a>
                      <div class="flex items-center mt-2.5 mb-5">
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span class="bg-white-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-neutral-900 dark:text-neutral">{product.price} $</span>
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
          <h2 className="">Products</h2>

          <div className="flex overflow-x-scroll gap-3">
            {store.products.map((product) => {
              return (<div className="flex flex-col flex-shrink-0 gap-3">


                <div className="flex justify-center ">




                  <div class="w-60 h-90 max-w-sm bg-white  rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                    <a className="w-40" href="#">
                      <img class="p-4 rounded-t-lg w-25 object-cover object-center group-hover:opacity-75" src={product.category} alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                      <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                      </a>
                      <div class="flex items-center mt-2.5 mb-5">

                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span class="bg-white-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-neutral-900 dark:text-neutral">{product.price} $</span>
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