import React, { Fragment, useState, useContext, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Accordion from "./Accordion.jsx";
import Swal from "sweetalert2";

function FormPayNew(props) {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [metodoPago, setMetodoPago] = useState([
    {
      name: "Metodo de pago",
      options: [
        { value: "zelle", label: "Zelle", checked: false },
        {
          value: "efectivo",

          label: "Efectivo",
          checked: false,
        },
        {
          value: "pagomovil",

          label: "Pagomovil",
          checked: false,
        },
      ],
      icono: "far fa-credit-card",
    },
  ]);

  const [metodoEnvio, setMetodoEnvio] = useState([
    {
      name: "Metodo de envio",
      options: [
        {
          value: "envio o domicilio",
          label: "Envio a Domicilio",
          checked: false,
        },
        {
          value: "pick-up",
          label: "Pick-Up",
          direccion: { nombre: "", apellido: "", telefono: "", cedula: "" },
          checked: false,
        },
      ],
      icono: "fas fa-box",
    },
  ]);
  const [tipoPersona, setTipoPersona] = useState([
    {
      name: "Tipo de Persona",
      options: [
        { value: "juridica", label: "Juridica", checked: false },
        { value: "natural", label: "Natural", checked: false },
      ],
      icono: "fas fa-user-circle",
    },
  ]);
  const handleOption = (event) => console.log(filters[0].options[0]["value"]);

  const setValue = {
    pagomovil: false,

    zelle: false,

    transferencia: false,
    efectivo: false,
  };
  const handlePay = (e) => {
    props.setHandleCredit({ ...setValue, [metodoPago]: true });
  };

  const getTotal = () => {
    let total = 0;
    for (let item of store.cartItems) {
      total = total + item.licor.price * item.quantity;
    }
    return total;
  };
  const totalIva = getTotal() * 0.16;
  const totalMasIva = getTotal() * 1.16;
  const totalBolivares = totalMasIva * 25.12;
  let today = new Date();

  const sendInformation = (methods) => {
    let option = methods[0].options.filter((options) => options.checked);
    console.log(option);
    return option[0];
  };

  const sendEmail = () => {
    const metodoDeEnvio = sendInformation(metodoEnvio);
    const metodoDePago = sendInformation(metodoPago);
    const tipoDePersona = sendInformation(tipoPersona);
    let direccionPickUp = "";
    if (metodoDeEnvio.value == "pick-up") {
      direccionPickUp = metodoDeEnvio.direccion;
    }

    Swal.fire({
      title: "estas seguro",
      text: "si quiere comprar otra cosa dele no",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si realizar compra",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const responseEmail = await actions.sendEmailVerifiedPayment({
          metodoDeEnvio: metodoDeEnvio.value,
          metodoDePago: metodoDePago.value,
          tipoDePersona: tipoDePersona.value,
          direccion: direccionPickUp,
          total: totalMasIva.toFixed(2),
          cartItems: store.cartItems,
        });
        if (responseEmail) {
          actions.deleteCartItems();
        }
        console.log(responseEmail);
        Swal.fire({
          icon: "success",
          title: "Pedido realizado",
          text: "Se ha enviado la informacion a su correo electronico",

          confirmButtonText: "ok",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      }
    });

    /* if (responseEmail) {
      Swal.fire({
        icon: "success",
        title: "Pedido realizado",
        text: "Se ha enviado la informacion a su correo electronico",

        confirmButtonText: "ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Pedido no realizado",
        text: "Intente nuevamente",
      });
    } */
  };

  useEffect(() => {
    actions.getCartItems();
  }, []);
  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl  tracking-tight text-gray-900">
              Metodo de Pago
            </h1>
            <div className="">
              <span className="justify-end flex">Fecha:</span>
              {today.toLocaleDateString()}
            </div>
          </div>
          <section
            aria-labelledby="products-heading"
            className="pb-24 pt-6 grow"
          >
            <div className="flex  gap-x-8 gap-y-10  ">
              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  <Accordion methods={metodoPago} setMethods={setMetodoPago} />
                  <Accordion
                    methods={metodoEnvio}
                    setMethods={setMetodoEnvio}
                  />
                  <Accordion
                    methods={tipoPersona}
                    setMethods={setTipoPersona}
                  />
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
                              <img
                                src={cartItem.licor.category}
                                alt="Salmon orange fabric pouch with match zipper,
                                                             gray zipper pull, and adjustable hip belt."
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{cartItem.licor.name}</a>
                                  </h3>
                                  <div className="flex  justify-items-center">
                                    <button
                                      onClick={() =>
                                        actions.updateCartItems(
                                          cartItem.cart_id,
                                          cartItem.quantity - 1,
                                          cartItem.licores_id
                                        )
                                      }
                                      className="btn px-6 "
                                    >
                                      <i className=" fas fa-minus"></i>
                                    </button>

                                    <span className="text-center ">
                                      {cartItem.quantity}
                                    </span>
                                    <button
                                      onClick={() =>
                                        actions.updateCartItems(
                                          cartItem.cart_id,
                                          cartItem.quantity + 1,
                                          cartItem.licores_id
                                        )
                                      }
                                      className="btn px-6 "
                                    >
                                      <i className="fas fa-plus"></i>
                                    </button>
                                    <p className="ml-4 ">
                                      {cartItem.licor.price}
                                    </p>
                                  </div>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {cartItem.licor.name}
                                </p>
                              </div>

                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  {cartItem.licor.quantity}
                                </p>

                                <div className="flex">
                                  <button
                                    onClick={() =>
                                      actions.deleteCartItem(
                                        product.licores_id,
                                        product.cart_id
                                      )
                                    }
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}

                      <li>
                        <div className="mt-6 border-t border-gray-100 mb-6 border-b border-gray-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Envio
                          </dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 justify-end flex"></dd>
                        </div>
                      </li>
                      <li>
                        <div className=" px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Sub Total
                          </dt>
                          <dd
                            className="  mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 
                                                sm:mt-0 justify-end flex"
                          >
                            $ {getTotal().toFixed(2)}
                          </dd>
                        </div>
                      </li>
                      <li>
                        <div className="mt-6 border-t border-gray-100 mb-6 border-b border-gray-100 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Orden TotaL
                          </dt>
                          <dd
                            className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 
                                                sm:mt-0 justify-end flex"
                          >
                            $ {totalMasIva.toFixed(2)}{" "}
                          </dd>
                        </div>
                      </li>
                    </ul>
                  </dl>
                </div>
              </div>
            </div>
            <div className="  flex justify-end ">
              <button
                onClick={sendEmail}
                className=" bg-black text-white font-bold py-2 px-4 rounded "
              >
                Pagar
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default FormPayNew;
