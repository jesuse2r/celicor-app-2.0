import React, { useContext, useState, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import { Context } from "../store/appContext";
import FormPaydos from "./FormPaydos.jsx";
import Modal from "./Modal.jsx";


const Navbardos = () => {
    const { store, actions } = useContext(Context);
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <div className="bg-white antialiased bg-no-repeat text-black ">
                <p className="justify-center items-center flex">  ENTREGAS DE LUNES A SABADO DE 11 AM A 6 PM</p>
                <div>

                </div>
            </div>
            <div className="bg-black antialiased bg-no-repeat text-white ">
                <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <Link to="/" className="font-bold text-white text-xl"><img src={logo} className="logo"></img></Link>


                    <nav className="">
                        <ul className="flex items-center justify-center font-semibold">
                            <li className="relative group px-3 py-2">
                                <Link to="licor/whiskys" className="hover:opacity-50
								cursor-default text-[20px]">Whisky</Link>
                                <div className="absolute top-0 -left-48 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[560px] 
								transform">


                                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 
                                        translate-x-0 transition-transform group-hover:translate-x-[12rem] 
                                        duration-500 ease-in-out rounded-sm">

                                        </div>
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 
                                                    font-medium text-13px]">Special</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <Link to="/licor/whiskys/buchanans" className="block p-2 -mx-2 
                                                            rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 
                                                            hover:to-pink 50 hover:via-black-50 transition ease-in-out 
                                                            duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Buchanans 12
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/whiskys/oldparr" className="block p-2 -mx-2 
                                                            rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 
                                                            hover:to-pink 50 hover:via-black-50 transition ease-in-out 
                                                            duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Old Parr
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg 
                                                            hover:bg-gradient-to-br hover:from-indigo-50 
                                                            hover:to-pink 50 hover:via-black-50 transition 
                                                            ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Chivas 12
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 
                                                    font-medium text-13px]">licores de whisky</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 
                                                            rounded-lg hover:bg-gradient-to-br 
                                                            hover:from-indigo-50 hover:to-pink 50 
                                                            hover:via-black-50 transition ease-in-out 
                                                            duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">WKY
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg 
                                                            hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 
                                                            hover:via-black-50 transition ease-in-out duration-300 
                                                            text-gray-800 font-semibold
															hover:text-indigo-600">Grand Lord
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg h
                                                            over:bg-gradient-to-br hover:from-indigo-50 
                                                            hover:to-pink 50 hover:via-black-50 transition 
                                                            ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Old Label
                                                                <p className="text-gray-500 font-normal">2</p>
                                                            </a>
                                                        </li>
                                                    </ul>


                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </li>
                            <li className="relative group px-3 py-2">
                                <Link to="licor/rones" className="hover:opacity-50
								cursor-default text-[20px]">Rones</Link>
                                <div className="absolute top-0 -left-48 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[560px] 
								transform">

                                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 
                                        translate-x-0 transition-transform group-hover:translate-x-[12rem] 
                                        duration-500 ease-in-out rounded-sm">

                                        </div>
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 
                                                    font-medium text-13px]">Special</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <Link to="/licor/rones/santateresa"
                                                                className="block p-2 -mx-2 rounded-lg
                                                              hover:bg-gradient-to-br hover:from-indigo-50 
                                                              hover:to-pink 50 hover:via-black-50 transition 
                                                              ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Santa Teresa
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/rones/cacique" className="block p-2 -mx-2 
                                                            rounded-lg hover:bg-gradient-to-br hover:from-indigo-50
                                                             hover:to-pink 50 hover:via-black-50 transition ease-in-out 
                                                             duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Cacique
                                                                <p className="text-gray-500 font-normal">0.75</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/rones/pampero" className="block p-2 -mx-2 
                                                            rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 
                                                            hover:to-pink 50 hover:via-black-50 transition ease-in-out 
                                                            duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Pampero
                                                                <p className="text-gray-500 font-normal">0.75</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium
                                                     text-13px]">licores de ron</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <Link to="/licor/rones/santateresa" className="block p-2 -mx-2
                                                             rounded-lg hover:bg-gradient-to-br hover:from-indigo-50
                                                              hover:to-pink 50 hover:via-black-50 transition ease-in-out 
                                                              duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Record
                                                                <p className="text-gray-500 font-normal">2.0 litros</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/rones/pajarito" className="block p-2 -mx-2 
                                                            rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 
                                                            hover:to-pink 50 hover:via-black-50 transition ease-in-out 
                                                            duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Ry
                                                                <p className="text-gray-500 font-normal">2.0 litros</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/rones/pajarito" className="block p-2 -mx-2 
                                                            rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 
                                                            hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Pajarito
                                                                <p className="text-gray-500 font-normal">2</p>
                                                            </Link>
                                                        </li>
                                                    </ul>


                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </li>
                            <li className="relative group px-3 py-2">
                                <button className="hover:opacity-50
								cursor-default text-[20px]">Vodkas</button>
                                <div className="absolute top-0 -left-48 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[560px] 
								transform">

                                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">

                                        </div>
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-13px]">Special</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <Link to="/licor/vodkas/stolichnaya" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Stolichnaya
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/vodkas/greygouse" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Grey Gouse
                                                                <p className="text-gray-500 font-normal">0.75</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/vodkas/absolute" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Absolute
                                                                <p className="text-gray-500 font-normal">0.75</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-13px]">Vodkas Baratos</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <Link to="/licor/vodkas/vodka" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Vodka
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/vodkas/glacial" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Glacial
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/vodkas/gordons" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Gordons
                                                                <p className="text-gray-500 font-normal">2</p>
                                                            </Link>
                                                        </li>
                                                    </ul>


                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </li>
                            <li className="relative group px-3 py-2">
                                <button className="hover:opacity-50
								cursor-default text-[20px]">Otros</button>
                                <div className="absolute top-0 -left-48 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[560px] 
								transform">

                                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">

                                        </div>
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-13px]">Vinos</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Vinos
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Espumantes
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Tequilas
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-13px]">licores de whisky</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Cerveza
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Anis
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-black-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Sangria
                                                                <p className="text-gray-500 font-normal">2</p>
                                                            </a>
                                                        </li>
                                                    </ul>


                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </li>


                            <li
                                className="relative group px-3 py-2 ">
                                <button className="hover:opacity-50
								cursor-default text-[20px]">Snacks</button>
                                <div className="absolute top-0 left-0 transition">


                                    <div className="absolute top-0 -left-48 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[560px] 
								transform">

                                        <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                            <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.5rem] duration-500 ease-in-out rounded-sm"></div>
                                            <div className="relative z-10">
                                                <a href="#" className="block p-2 mx-2 rounded-lg
											 hover:bg-gradient-to-br
											hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">
                                                    Dulces y salados
                                                    <p className="text-gray-500 font-normal">que esperas</p>
                                                </a>
                                                <div className="mt-6 grid grid-cols-2 gap-6">
                                                    <div>
                                                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Dulces</p>
                                                        <ul className="mt-3 text-[15px]">
                                                            <li>
                                                                <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal">Carre

                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal"> chocolate

                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal"> azucar

                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal"> caramelo

                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Salado</p>
                                                        <ul className="mt-3 text-[15px]">
                                                            <li>
                                                                <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal">platanito

                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal"> doritos

                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal"> pepito

                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="text-gray-600 hover:text-gray-800 py-1 block font-normal"> cheese

                                                                </a>
                                                            </li>


                                                        </ul>


                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>


                            </li>

                            <li
                                className="relative group px-3 py-2">
                                <button className="hover:opacity-50
								cursor-default text-[20px] ">redes sociales</button>
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
                                                <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]"
                                                >@celicor</p>



                                                <ul className="mt-3 text-[15px]">
                                                    <li>
                                                        <a href="https://instagram.com/celicorfuerzasarmadas1?igshid=NTc4MTIwNjQ2YQ==" className="bg-transparent
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-black-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Instagram</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/celicor_oficial?s=11&t=14xfkczfoNch4q92RX0vBw" className="bg-transparent
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-black-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Twitter</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.facebook.com/profile.php?id=100074430510278&mibextid=LQQJ4d" className="bg-transparent
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-black-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Facebook</a>
                                                    </li>


                                                </ul>
                                            </div>


                                        </div>


                                    </div>

                                </div>




                            </li>


                        </ul>
                    </nav>


                    <nav>

                        <ul className="flex gap-2">
                            {store.token != "" && (
                                <li className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group">
                                    <button

                                        onClick={() => actions.toggleCart(true)}> <i className="fas fa-shopping-cart"></i>
                                        <span className="p-3">{store.cartItems.length}</span>
                                    </button>
                                </li>
                            )}



                            <li>
                                {store.token != "" ? (
                                    <>
                                        <Link to="/" className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group ">
                                            <span
                                                onClick={() => actions.handleLogout()}
                                                className="mr-2"> Logout

                                            </span>
                                            <svg className="stroke-current" width="10"
                                                height="10" strokeWidth="2" viewBox="0 0 10"
                                                aria-hidden="true">
                                                <g fillRule="evenodd">
                                                    <path className="opacity-0 group-hover:opacity-100 transition ease-in out duration-200" d="M0 5h7">
                                                    </path>
                                                    <path className="opacity-100 group-hover:transform group-hover: translate-x-1 transition ease-in-out duration-200" d="M1 1l4 4-4 4"></path>
                                                </g>
                                            </svg>
                                        </Link>
                                    </>

                                ) : (
                                    <Link to="/login" className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group ">
                                        <span className="mr-2"> Login

                                        </span>
                                        <svg className="stroke-current" width="10"
                                            height="10" strokeWidth="2" viewBox="0 0 10"
                                            aria-hidden="true">
                                            <g fillRule="evenodd">
                                                <path className="opacity-0 group-hover:opacity-100 transition ease-in out duration-200" d="M0 5h7">
                                                </path>
                                                <path className="opacity-100 group-hover:transform group-hover: translate-x-1 transition ease-in-out duration-200" d="M1 1l4 4-4 4"></path>
                                            </g>
                                        </svg>
                                    </Link>
                                )}



                            </li>
                            <li>

                            </li>

                        </ul>
                    </nav>
                    {store.showCart && <FormPaydos />}
                    <Modal />

                </div>



            </div>
        </>
    );
};

export default Navbardos