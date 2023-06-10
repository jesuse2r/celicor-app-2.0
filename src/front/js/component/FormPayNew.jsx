import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";




function FormPayNew(props) {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [metodoPago, setMetodoPago] = useState("");
   
   
   
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
                                <div class=" px-4 py-6">
                                    <ul>
                                        <li
                                            className=" mt-5 relative group px-3 py-2">
                                            <button className="hover:opacity-50
								cursor-default text-[20px] "><i class="far fa-user-circle"></i> Tipo de persona</button>
                                            <div className="absolute top-0 left-0 transition 
								">
                                                <div className="absolute top-0 -left-2 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[260px] 
								transform">

                                                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                                        <div className="w-10 h-10 bg-white transform 
										rotate-45 absolute top-0 z-0 
										-translate-x-4 transition-transform 
										group-hover:translate-x-3
										 duration-500 ease-in-out rounded-sm"></div>

                                                        <div className="relative z-10">




                                                            <ul className="mt-3 text-[15px]">
                                                                <li>

                                                                    <a href="https://instagram.com/celicorfuerzasarmadas1?igshid=NTc4MTIwNjQ2YQ==" className="bg-transparent
                                                        
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-black-600 hover:to-black-600 hover:via-pink-400 py-1 block ">  <input id="filter-color-2" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded-full border-gray-300 text-black-600 focus:ring-black-500" />  <label htmlFor="filter-color-0" className="ml-3 text-md text-gray-600">Natural</label></a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://twitter.com/celicor_oficial?s=11&t=14xfkczfoNch4q92RX0vBw" className="bg-transparent
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"> <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-black-600 focus:ring-black-500" />  <label htmlFor="filter-color-0" className="ml-3 text-md text-gray-600">Juridica</label></a>
                                                                </li>



                                                            </ul>
                                                        </div>


                                                    </div>


                                                </div>

                                            </div>




                                        </li>
                                    </ul>
                                </div>
                                <div class="border-t border-gray-200 px-4 py-6">
                                    <ul>
                                        <li
                                            className=" mt-5 relative group px-3 py-2">
                                            <button className="hover:opacity-50
								cursor-default text-[20px] "><i class="fa-regular fa-credit-card"></i> Metodo de pago</button>
                                            <div className="absolute top-0 left-0 transition 
								">
                                                <div className="absolute top-0 -left-2 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[260px] 
								transform">

                                                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                                        <div className="w-10 h-10 bg-white transform 
										rotate-45 absolute top-0 z-0 
										-translate-x-4 transition-transform 
										group-hover:translate-x-3
										 duration-500 ease-in-out rounded-sm"></div>

                                                        <div className="relative z-10">




                                                            <ul className="mt-3 text-[15px]">
                                                                <li>

                                                                    <a   value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)} className="bg-transparent
                                                        
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block ">  <input id="filter-color-0" name="color[]" value="white" type="checkbox"  onClick={handlePay} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />  <button onClick={handlePay}  htmlFor="filter-color-0" className="ml-3 text-md text-gray-600">Zelle</button></a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://twitter.com/celicor_oficial?s=11&t=14xfkczfoNch4q92RX0vBw" className="bg-transparent
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"> <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-black-600 focus:ring-black-500" />  <button htmlFor="filter-color-0"  onClick={handlePay} className="ml-3 text-md text-gray-600">Efectivo y/o Pago Móvil</button></a>
                                                                </li>



                                                            </ul>
                                                        </div>


                                                    </div>


                                                </div>

                                            </div>




                                        </li>
                                    </ul>
                                </div>



                                <div class="border-t border-gray-200 px-4 py-6">

                                    <ul>
                                        <li
                                            className=" mt-5 relative group px-3 py-2">
                                            <button className="hover:opacity-50
								cursor-default text-[20px] "><i class="fas fa-box"></i> Metodo de envio</button>
                                            <div className="absolute top-0 left-0 transition 
								">
                                                <div className="absolute top-0 -left-2 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[260px] 
								transform">

                                                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                                        <div className="w-10 h-10 bg-white transform 
										rotate-45 absolute top-0 z-0 
										-translate-x-4 transition-transform 
										group-hover:translate-x-3
										 duration-500 ease-in-out rounded-sm"></div>

                                                        <div className="relative z-10">




                                                            <ul className="mt-3 text-[15px]">
                                                                <li>

                                                                    <a href="https://instagram.com/celicorfuerzasarmadas1?igshid=NTc4MTIwNjQ2YQ==" className="bg-transparent
                                                        
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block ">  <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />  <label htmlFor="filter-color-0" className="ml-3 text-md text-gray-600">Envio a Domocilio</label></a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://twitter.com/celicor_oficial?s=11&t=14xfkczfoNch4q92RX0vBw" className="bg-transparent
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"> <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-black-600 focus:ring-black-500" />  <label htmlFor="filter-color-0" className="ml-3 text-md text-gray-600">Pick-up Gratis</label></a>
                                                                </li>



                                                            </ul>
                                                        </div>


                                                    </div>


                                                </div>

                                            </div>




                                        </li>
                                    </ul>
                                </div>
                                <div class="border-t border-gray-200 px-4 py-6">

                                    <ul>
                                        <li
                                            className=" mt-5 relative group px-3 py-2">
                                            <button className="hover:opacity-50
								cursor-default text-[20px] "><i class="fas fa-map-marker-alt"></i> Direccion de envio</button>
                                            <div className="absolute top-0 left-0 transition 
								">
                                                <div className="absolute top-0 -left-2 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[260px] 
								transform">

                                                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                                        <div className="w-10 h-10 bg-white transform 
										rotate-45 absolute top-0 z-0 
										-translate-x-4 transition-transform 
										group-hover:translate-x-3
										 duration-500 ease-in-out rounded-sm"></div>

                                                        <div className="relative z-10">




                                                            <ul className="mt-3 text-[15px]">
                                                                <li>

                                                                    <a href="https://instagram.com/celicorfuerzasarmadas1?igshid=NTc4MTIwNjQ2YQ==" className="bg-transparent
                                                        
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block ">  <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />  <label htmlFor="filter-color-0" className="ml-3 text-md text-gray-600">Zelle</label></a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://twitter.com/celicor_oficial?s=11&t=14xfkczfoNch4q92RX0vBw" className="bg-transparent
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"> <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-black-600 focus:ring-black-500" />  <label htmlFor="filter-color-0" className="ml-3 text-md text-gray-600">Envio a su direccion</label></a>
                                                                </li>



                                                            </ul>
                                                        </div>


                                                    </div>


                                                </div>

                                            </div>




                                        </li>
                                    </ul>

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
                                                        <li>

                                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <button onClick={() => (actions.updateCartItems(cartItem.cart_id, cartItem.quantity - 1, cartItem.licores_id))}
                                                                    className="btn px-6 "><i className=" fas fa-minus"></i></button>

                                                                <span className="text-center ">{cartItem.quantity}</span>
                                                                <button onClick={() => (actions.updateCartItems(cartItem.cart_id, cartItem.quantity + 1, cartItem.licores_id))}
                                                                    className="btn px-6  "><i className="fas fa-plus"></i></button>

                                                                
                                                                <img src={cartItem.licor.category} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-16 w-16 object-cover object-center" />


                                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-end flex">{cartItem.licor.name}</dd>
                                                              


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
