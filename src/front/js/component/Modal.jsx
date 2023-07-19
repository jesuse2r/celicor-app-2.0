import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

function Modal() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.searchValue != "") {
      const products = store.products.filter((product) => {
        return (
          product.name
            .toLowerCase()
            .includes(store.searchValue.toLowerCase()) ||
          product.marca.toLowerCase().includes(store.searchValue.toLowerCase())
        );
      });
      setSearchProduct(products);
    } else {
      setSearchProduct([]);
    }
  }, [store.searchValue]);

  return (
    <>
      <div className="">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onClick={() => setShowModal(true)}
            type="text "
            id="default-search"
            className="  rounded-full px-3 py-3 font-semibold bg-white bg-opacity-10 flex items-center group  p-4 pl-10 text-sm text-neutral-900    
             dark:text-neutral "
            placeholder="Buscar licores..."
            required
          />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-full">
            <div className="relative w-full  my-6 mx-auto max-w-10xl h-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold ">
                    <form>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          onChange={(event) =>
                            actions.searchLiquours(event.target.value)
                          }
                          value={store.searchValue}
                          type="search"
                          id="default-search"
                          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg   
                         dark:placeholder-gray-400 dark:text-neutral  "
                          placeholder="Busqueda de licores"
                          required
                        />
                      </div>
                    </form>
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl 
                    leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 w-50">
                    <h2 className="">Products</h2>

                    <div className="flex overflow-x-scroll gap-3">
                      {searchProduct.map((product) => {
                        return (
                          <div className="flex flex-col flex-shrink-0 gap-3">
                            <div className="flex justify-center ">
                              <div className="w-60 h-90 max-w-sm bg-white  rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                                <a className="w-40" href="#">
                                  <img
                                    className="p-4 rounded-t-lg w-25 object-cover object-center group-hover:opacity-75"
                                    src={product.category}
                                    alt="product image"
                                  />
                                </a>
                                <div className="px-5 pb-5">
                                  <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                                      {product.name}
                                    </h5>
                                  </a>
                                  <button
                                    className="btn btn-neutral text-black"
                                    onClick={() => {
                                      navigate(`/details/${product.id}`);
                                    }}
                                  >
                                    Detalles{" "}
                                    <i className="fas fa-info-circle"></i>
                                  </button>

                                  <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-neutral-900 dark:text-neutral">
                                      {product.price} $
                                    </span>

                                    <button
                                      onClick={() =>
                                        actions.addToCart(product.id)
                                      }
                                      className="bg-black text-white  px-3 py-2 btn focus:outline-none rounded-lg gap-2"
                                    >
                                      Agregar al carro
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-neutral-500 text-black active:bg-neutral-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Busqueda
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
