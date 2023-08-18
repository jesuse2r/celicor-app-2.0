import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [desplegate, setDesplegate] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDesplegate = (category) => {
    if (desplegate == category) {
      setDesplegate("");
    } else {
      setDesplegate(category);
    }
  };
  return (
    <div className="relative md:hidden">
      <button
        className="ps-2 block text-gray-500 hover:text-gray-900 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-full mt-2 w-48 bg-white rounded-lg shadow-lg">
          <ul className="py-2">
            <li className="border-b-2  text-black px-4 py-2 cursor-pointer">
              <button
                className="block focus:outline-none"
                onClick={() => toggleDesplegate("whiskys")}
              >
                Whiskys
              </button>
              {desplegate == "whiskys" && (
                <ul className=" mt-2 w-full bg-white rounded-lg ">
                  <li className="  hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones"> Premium</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    Deluxe
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Standard</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones"> SemiStandard</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
              <button
                className="block focus:outline-none"
                onClick={() => toggleDesplegate("rones")}
              >
                Rones
              </button>
              {desplegate == "rones" && (
                <ul className=" mt-2  bg-white rounded-lg ">
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones"> Premium</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    Deluxe
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Extra Añejo</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Añejo</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Licor de ron</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
              <button
                className="block focus:outline-none"
                onClick={() => toggleDesplegate("destilados")}
              >
                Destilados
              </button>
              {desplegate == "destilados" && (
                <ul className=" mt-2  bg-white rounded-lg ">
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones"> Premium</Link>
                  </li>

                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Destacados</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Otros</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
              <button
                className="block focus:outline-none"
                onClick={() => toggleDesplegate("otros")}
              >
                Otros
              </button>
              {desplegate == "otros" && (
                <ul className=" mt-2  bg-white rounded-lg ">
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Sangria</Link>
                  </li>

                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Tequila</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Champaña</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Vinos</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
              <button
                className="block focus:outline-none"
                onClick={() => toggleDesplegate("bebidas")}
              >
                Bebidas
              </button>
              {desplegate == "bebidas" && (
                <ul className=" mt-2  bg-white rounded-lg ">
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Energizante</Link>
                  </li>

                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Refrescos</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Agua</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Jugos</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
              <button
                className="block focus:outline-none"
                onClick={() => toggleDesplegate("snacks")}
              >
                Snacks
              </button>
              {desplegate == "snacks" && (
                <ul className=" mt-2  bg-white rounded-lg ">
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Chips</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    Galletas
                  </li>

                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Chocolate</Link>
                  </li>
                  <li className=" hover:bg-gray-200 text-black px-4 py-2 cursor-pointer">
                    <Link to="licor/rones">Chicles</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Agrega más opciones según tus necesidades */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
