import React, { useContext, useState, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import { Context } from "../store/appContext";
import FormPaydos from "./FormPaydos.jsx";
import Modal from "./Modal.jsx";
import ItemNavbar from "./ItemNavbar.jsx";
import Hamburger from "./Hamburguer.jsx";

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
                    <Link to="/" className=" md:flex font-bold text-white text-xl "><img style={{ minWidth: "80px" }} src={logo} className="logo"></img></Link>

                    <nav className="hidden lg:!block">

                        <ul className="items-center justify-center font-semibold  md:flex">
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
                                                <ItemNavbar type="whisky" title="Añejamiento" categories={[{ name: "Premium", url: "premium" },
                                                { name: "Deluxe", url: "deluxe" }, { name: "Standard", url: "standard" },
                                                { name: "SemiStandard", url: "semistandard" }]} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="relative group px-3 py-2 md:flex">
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
                                                <ItemNavbar type="rones" title="Añejamiento" categories={[{ name: "Premium", url: "premium" },
                                                { name: "Extra Añejo", url: "extra-anejo" }, { name: "Añejo", url: "anejo" },
                                                { name: "Licor de Ron", url: "licorderon" }]} />
                                                <ItemNavbar type="rones" title="Añejamiento" categories={[{ name: "Premium", url: "premium" }, { name: "Extra Añejo", url: "extra-anejo" }, { name: "Añejo", url: "anejo" }, { name: "Licor de Ron", url: "licorderon" }]} />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li className="relative group px-3 py-2 md:flex">
                                <Link to="licor/destilados" className="hover:opacity-50
								cursor-default text-[20px]">Destilados</Link>
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
                                                <ItemNavbar type="Destilados" title="Añejamiento" categories={[{ name: "Premium", url: "premium" }, { name: "Destacados", url: "destacados" }, { name: "Otros", url: "otros" }]} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="relative group px-3 py-2 md:flex">
                                <Link to="licor/otros" className="hover:opacity-50
								cursor-default text-[20px]">Otros</Link>
                                <div className="absolute top-0 -left-48 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[560px] 
								transform">

                                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 
                                        translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 
                                        ease-in-out rounded-sm">

                                        </div>
                                        <div className="relative z-10">
                                            <div className="grid grid-cols-2 gap-6">
                                                <div>
                                                    <ItemNavbar type="bebidas" title="Bebidas" categories={[{ name: "Sangria", url: "sangria" }, { name: "Tequila", url: "tequila" }, { name: "Champaña", url: "champana" }, { name: "Vinos", url: "vinos" }]} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                className="relative group px-3 py-2  md:flex">
                                <Link to="licor/bebidas" className="hover:opacity-50
								cursor-default text-[20px]">Bebidas & Snacks</Link>
                                <div className="absolute top-0 left-0 transition">


                                    <div className="absolute top-0 -left-48 transition
								group-hover:translate-y-5 translate-y-0 
								opacity-0 invisible group-hover:opacity-100 
								group-hover:visible duration-500 ease-in-out 
								group-hover:transform z-50 min-w-[560px] 
								transform">

                                        <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                                            <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 
                                            transition-transform group-hover:translate-x-[12.5rem] duration-500 ease-in-out
                                             rounded-sm"></div>
                                            <div className="relative z-10">
                                                <div className="grid grid-cols-2 gap-6">
                                                    <ItemNavbar type="bebidas" title="Bebidas" categories={[{ name: "Energizante", url: "energizante" }, { name: "Refrescos", url: "refrescos" }, { name: "Agua", url: "agua" }, { name: "Cervezas", url: "cervezas" }, { name: "Jugos y Te", url: "jugos-y-te" }]} />
                                                    <ItemNavbar type="snacks" title="Snacks" categories={[{ name: "Chips", url: "chips" }, { name: "Chocolates", url: "chocolates" }, { name: "Galletas", url: "galletas" }, { name: "Chicles", url: "chicles" }]} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className="flex gap-2 ">
                            {store.token != "" && (
                                <li className=" px-3 py-2 font-semibold  flex items-center group  md:flex">
                                    <button

                                        onClick={() => actions.toggleCart(true)}> <i className="fas fa-shopping-cart"></i>
                                        <span className="p-3">{store.cartItems.length}</span>
                                    </button>
                                </li>
                            )}

                            <li className="hidden md:flex">
                                {store.token != "" ? (
                                    <>
                                        <Link to="/" className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 
                                        flex items-center group md:flex">
                                            <span
                                                onClick={() => actions.handleLogout()}
                                                className="mr-2"> Logout

                                            </span>
                                            <svg className="stroke-current" width="10"
                                                height="10" strokeWidth="2" viewBox="0 0 10"
                                                aria-hidden="true">
                                                <g fillRule="evenodd">
                                                    <path className="opacity-0 group-hover:opacity-100
                                                     transition ease-in out duration-200" d="M0 5h7">
                                                    </path>
                                                    <path className="opacity-100 group-hover:transform group-hover: translate-x-1 
                                                    transition ease-in-out duration-200" d="M1 1l4 4-4 4"></path>
                                                </g>
                                            </svg>
                                        </Link>
                                    </>
                                ) : (
                                    <Link to="/login" className="rounded-full px-3 py-2 font-semibold
                                     bg-white bg-opacity-10 flex items-center group md:flex ">
                                        <span className="mr-2"> Login

                                        </span>
                                        <svg className="stroke-current" width="10"
                                            height="10" strokeWidth="2" viewBox="0 0 10"
                                            aria-hidden="true">
                                            <g fillRule="evenodd">
                                                <path className="opacity-0 group-hover:opacity-100 transition
                                                 ease-in out duration-200" d="M0 5h7">
                                                </path>
                                                <path className="opacity-100 group-hover:transform group-hover: 
                                                translate-x-1 transition ease-in-out duration-200" d="M1 1l4 4-4 4"></path>
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
                    <Hamburger />
                </div>
            </div>
        </>
    );
};

export default Navbardos