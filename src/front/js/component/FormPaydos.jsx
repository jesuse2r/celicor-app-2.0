import React, { useState, useContext, useEffect } from "react";
import celicorGif from "../../img/corona.png";
import whisky from "../../img/oldparr.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import carritoVacio from "../../img/carritoVacio.png";

const FormPaydos = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const redirectToPay = () => {
    actions.toggleCart(false)
    navigate("/viewpay")

  }
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



  useEffect(() => {

    actions.getCartItems()

  }, [])


  return (





    <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      


      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">


            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Agregando al carrito</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button onClick={() => actions.toggleCart(false)} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {store.cartItems?.map((cartItem) => {
                          return (
                            
                            <li className="flex py-6">
                              
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">

                                <img src={cartItem.licor.category} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">

                                    <h3>
                                      <a href="#">{cartItem.licor.name}</a>
                                    </h3>
                                    <div className="flex  justify-items-center">

                                      <button onClick={() => (actions.updateCartItems(cartItem.cart_id, cartItem.quantity - 1, cartItem.licores_id))}
                                        className="btn px-6 "><i className=" fas fa-minus"></i></button>

                                      <span className="text-center ">{cartItem.quantity}</span>
                                      <button onClick={() => (actions.updateCartItems(cartItem.cart_id, cartItem.quantity + 1, cartItem.licores_id))}
                                        className="btn px-6 "><i className="fas fa-plus"></i></button>
                                 <p className="ml-4 ">{cartItem.licor.price}</p>
                                    </div>
                                   

                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{cartItem.licor.name}</p>
                                </div>
                                
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">{cartItem.licor.quantity}</p>

                                  <div className="flex">
                                    <button onClick={() =>
                                      actions.deleteCartItem(
                                        product.licores_id,
                                        product.cart_id
                                      )
                                    } className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                              
                            </li>
                            

                          )
                        })}




                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>SubTotal</p>
                    <p>$ {getTotal().toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Envio y calculo de la compra</p>
                  <div className="mt-6">
                    <button onClick={redirectToPay} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Ir a comprar</button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>

                      <button onClick={() => actions.toggleCart(false)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Continuar comprando
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
     
      </div>
    </div>






  )
}
export default FormPaydos
