import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import  Logindos  from "./pages/Logindos.jsx";
import Registerdos  from "./pages/Registerdos.jsx";
import { Profile } from "./pages/Profile.jsx";
import { Details } from "./pages/details.jsx";
import  Aboutdos  from "./pages/aboutdos.jsx";
import injectContext from "./store/appContext";

import  Navbardos  from "./component/navbardos";
import  Footerdos  from "./component/footerdos";
import ViewFormPay from "./pages/ViewFormPay";
import CartView from "./pages/CartView";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewFacture from "./pages/ViewFacture";
import TerminosCondicionesdos from "./pages/TerminosCondicionesdos";
import Homedos from "./pages/Homedos";
import Licores from "./pages/Licores";
import MarcaView from "./pages/MarcaView";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <ToastContainer />
                    <Navbardos />
                    <Routes>
                        <Route element={<Logindos />} path="/login" />
                        <Route element={<Registerdos />} path="/register" />
                        <Route element={<Homedos />} path="/" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Details />} path="/details/:id" />
                        <Route element={<ViewFormPay />} path="/viewpay" />
                        <Route element={<CartView />} path="cartview" />
                        <Route element={<Licores />} path="licor/:type" />
                        <Route element={<MarcaView />} path="licor/:type/:marca" />
                        <Route element={<ViewFacture />} path="viewfacture" />
                        <Route element={<Aboutdos />} path="/about" />
                        <Route element={<TerminosCondicionesdos />} path="/terminoscondiciones" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footerdos />
                </ScrollToTop>
            </BrowserRouter>
        </>
    );
};

export default injectContext(Layout);
