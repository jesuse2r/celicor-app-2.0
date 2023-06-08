import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

function FormPayNew(props) {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [metodoPago, setMetodoPago] = useState("");
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





























        <div className="bg-white">
            <div>



                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl  tracking-tight text-gray-900">Metodo de Pago</h1>
                        <div className=""><span
                                        className="justify-end flex">Fecha:</span>{today.toLocaleDateString()}</div>
                                    
                    </div>




                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">Products</h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul className="flex">
                                    <li className="flex-1 mr-2">
                                        <a className="text-center block border border-black-500 rounded py-2 px-4 bg-gray-500 hover:bg-black-700 text-black" href="#">Juridico</a>
                                    </li>
                                    <li className="flex-1 mr-2">
                                        <a className="text-center block border border-black rounded hover:border-black-200 text-black-500 hover:bg-black-200 py-2 px-4" href="#">Natural</a>
                                    </li>

                                </ul>

                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">

                                        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Metodo de Envio</span>
                                            <span className="ml-6 flex items-center">

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>

                                    <div className="pt-6" id="filter-section-0">
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">Envio a su direccion</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Retiro en tienda</label>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">

                                        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Direccion de Envio</span>
                                            <span className="ml-6 flex items-center">

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>

                                    <div className="pt-6" id="filter-section-1">
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-600">New Arrivals</label>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-200 py-6">
                                    <h3 className="-my-3 flow-root">

                                        <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Metodo de Pago</span>
                                            <span className="ml-6 flex items-center">

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>

                                    <div className="pt-6" id="filter-section-2">
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">Zelle</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600"> Efectivo y/o Pago Móvil</label>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </form>


                            <div className="lg:col-span-3">
                                <div>
                                    <div className="px-4 sm:px-0">
                                        <h3 className="text-base font-semibold leading-7 text-gray-900">Informacion de pago</h3>
                                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Informacion personal</p>
                                    </div>
                                    <div className="mt-6 border-t border-gray-100">

                                        <dl className="divide-y divide-gray-100">
                                            {store.cartItems?.map((cartItem) => {
                                                return (
                                                    <ul>
                                                        <li><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <img src={cartItem.licor.category} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-30 w-24 object-cover object-center" />

                                                           
                                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-end flex">{cartItem.licor.name}</dd>
                                                            <button onClick={() => (actions.updateCartItems(cartItem.cart_id, cartItem.quantity - 1, cartItem.licores_id))}
                                                                    className="btn px-6 "><i className=" fas fa-minus"></i></button>

                                                                <span className="text-center ">{cartItem.quantity}</span>
                                                                <button onClick={() => (actions.updateCartItems(cartItem.cart_id, cartItem.quantity + 1, cartItem.licores_id))}
                                                                    className="btn px-6  "><i className="fas fa-plus"></i></button>


                                                        </div>

                                                        </li>
                                                        
                                                        <li>
                                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                                <dt className="text-sm font-medium leading-6 text-gray-900">Envio</dt>
                                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-end flex">{cartItem.licor.marca}</dd>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                                <dt className="text-sm font-medium leading-6 text-gray-900">Sub Total</dt>
                                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-end flex">$ {getTotal().toFixed(2)}</dd>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                                <dt className="text-sm font-medium leading-6 text-gray-900">Orden TotaL</dt>
                                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-end flex">$ {totalMasIva.toFixed(2)} </dd>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                )
                                            })}

                                        </dl>
                                    </div>
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
