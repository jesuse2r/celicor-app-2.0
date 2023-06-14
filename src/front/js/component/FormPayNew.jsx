import React, { Fragment, useState, useContext, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'


import { Context } from "../store/appContext";

import { useNavigate } from "react-router-dom";




function FormPayNew(props) {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [metodoPago, setMetodoPago] = useState("");
  
    
    const filters = [
        {
           
            name: 'Metodo de pago',
            options: [
                { label: 'Zelle', checked: false },
                {  label: 'Efectivo o Pagomovil', checked: false },
               
               
            ],
        },
        {
            
            name: 'Metodo de envio',
            options: [
                {  label: 'Envio a Domicilio', checked: false },
                {  label: 'Pick-Up', checked: false },
             
            ],
        },
        {
          
            name: 'Tipo de Persona',
            options: [
                {  label: 'Juridica', checked: false },
                {  label: 'Natural', checked: false },
              
            ],
        },
    ]
 






    const setValue = {
        pagomovil: false,

        zelle: false,

        transferencia: false,
        efectivo: false,
    };
    const handlePay = (e) => {
        props.setHandleCredit({ ...setValue, [metodoPago]: true });
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
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    useEffect(() => {

        actions.getCartItems()

    }, [])
    return (


        <div className="bg-white">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl  tracking-tight text-gray-900">Metodo de Pago</h1>
                        <div className=""><span
                            className="justify-end flex">Fecha:</span>{today.toLocaleDateString()}</div>



                    </div>



                    <section aria-labelledby="products-heading" className="pb-24 pt-6">


                        <div className="flex  gap-x-8 gap-y-10  ">


                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                               
                                <form className=" lg:block">
                                   
                                    

                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900"><i className="far fa-credit-card"></i> {section.name}</span>
                                                            
                                                            <span className="ml-6 flex items-center">
                                                                
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                                
                                                            </span>
                                                            
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900"><i class="fas fa-box"></i> {section.name}</span>
                                                            
                                                            <span className="ml-6 flex items-center">
                                                                
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900"><i class="fas fa-user-circle"></i> {section.name}</span>
                                                            
                                                            <span className="ml-6 flex items-center">
                                                                
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`filter-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                        className="ml-3 text-sm text-gray-600"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>

                                {/* Product grid */}
                                <div className="lg:col-span-3">{/* Your content */}</div>
                            </div>
                        </section>





                            <div className="lg:col-span-3 grow  ">


                                <div className="mt-6 border-t border-gray-100">

                                    <dl className="divide-y divide-gray-100">
                                        <ul>
                                            {store.cartItems?.map((cartItem) => {
                                                return (


                                                    <li key={cartItem.licor.id} className="flex py-6 ">

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

                                            <li>
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className="text-sm font-medium leading-6 text-gray-900">Envio</dt>
                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-end flex"></dd>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className="text-sm font-medium leading-6 text-gray-900">Sub Total</dt>
                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 
                                                sm:mt-0 justify-end flex">$ {getTotal().toFixed(2)}</dd>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className="text-sm font-medium leading-6 text-gray-900">Orden TotaL</dt>
                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 
                                                sm:mt-0 justify-end flex">$ {totalMasIva.toFixed(2)} </dd>
                                                </div>
                                            </li>
                                        </ul>

                                    </dl>

                                </div>

                            </div>
                        </div>
                    </section>

                </main>
            </div>
        

        </div>



    )
}

export default FormPayNew
