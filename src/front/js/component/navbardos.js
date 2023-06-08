import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import { Context } from "../store/appContext";
import FormPaydos from "./FormPaydos.jsx";

const Navbardos = () => {
    const { store, actions } = useContext(Context);


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


                    <nav>
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
                                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">

                                        </div>
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-13px]">Special</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <Link to="/licor/whiskys/buchanans" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Buchanans 12
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/whiskys/oldparr" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Old Parr
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Chivas 12
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-13px]">licores de whisky</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">WKY
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Grand Lord
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
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
                                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm">

                                        </div>
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-13px]">Special</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <Link to="/licor/rones/santateresa" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Santa Teresa
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/rones/cacique" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Cacique
                                                                <p className="text-gray-500 font-normal">0.75</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/rones/pampero" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Pampero
                                                                <p className="text-gray-500 font-normal">0.75</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="uppercase tracking-wider text-gray-500 font-medium text-13px]">licores de ron</p>
                                                    <ul className="mt-3 text-[15px]">
                                                        <li>
                                                            <Link to="/licor/rones/santateresa" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Record
                                                                <p className="text-gray-500 font-normal">2.0 litros</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/rones/pajarito" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Ry
                                                                <p className="text-gray-500 font-normal">2.0 litros</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/rones/pajarito" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
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
                                                            <Link to="/licor/vodkas/stolichnaya" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Stolichnaya
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/vodkas/greygouse" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Grey Gouse
                                                                <p className="text-gray-500 font-normal">0.75</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/vodkas/absolute" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
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
                                                            <Link to="/licor/vodkas/vodka" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Vodka
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/vodkas/glacial" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Glacial
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/licor/vodkas/gordons" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
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
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Vinos
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Espumantes
                                                                <p className="text-gray-500 font-normal">12 anos</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
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
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Cerveza
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
															hover:text-indigo-600">Anis
                                                                <p className="text-gray-500 font-normal">10</p>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink 50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold
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
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Instagram</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/celicor_oficial?s=11&t=14xfkczfoNch4q92RX0vBw" className="bg-transparent
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Twitter</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.facebook.com/profile.php?id=100074430510278&mibextid=LQQJ4d" className="bg-transparent
												bg-clip-text text-transparent
												bg-gradient-to-br from-indigo-400
												font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block">Facebook</a>
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
                       
                            <li className="rounded-full px-0 py-0 font-semibold bg-white bg-opacity-10 flex items-center group ">

                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-black-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800" type="button"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/2560px-Flag_of_Venezuela.svg.png" alt="" className="block h-auto w-5 flex-shrink-0 " /><svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2880px-Flag_of_the_United_States.svg.png" alt="" className="block h-auto w-5 flex-shrink-0 " /></a>
                                        </li>


                                    </ul>
                                </div>

                            </li>

                            <li className="rounded-full px-0 py-0 font-semibold bg-white bg-opacity-10 flex items-center group">
                                <div className="flex lg:ml-6">
                                    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </a>
                                </div>
                            </li>
                            <li className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group">
                                <button

                                    onClick={() => actions.toggleCart(true)}> <i className="fas fa-shopping-cart"></i>
                                    <span className="p-3">{store.cartItems.length}</span>
                                </button>
                            </li>


                            <li>


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
                            </li>

                        </ul>
                    </nav>
                    {store.showCart && <FormPaydos />}

                </div>

            </div>
        </>
    );
};

export default Navbardos