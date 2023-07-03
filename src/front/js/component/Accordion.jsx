import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

function Accordion({ methods, setMethods }) {
  const handleOption = (event, sectionIndex, optionIndex) => {
    const updatedFilters = [...methods]; // Crea una copia del estado filters

    // Actualiza el valor de checked para la opción seleccionada
    updatedFilters[sectionIndex].options[optionIndex].checked =
      event.target.checked;

    console.log(updatedFilters[sectionIndex].name);
    // Si la opción seleccionada es un método de pago, deselecciona los demás métodos de pago
    if (updatedFilters[sectionIndex].name === "Metodo de pago") {
      updatedFilters[sectionIndex].options.forEach((option, index) => {
        if (index !== optionIndex) {
          console.log(option);
          option.checked = false;
        }
      });
    }

    // Si la opción seleccionada es un método de envío, deselecciona los demás métodos de envío
    if (updatedFilters[sectionIndex].name === "Metodo de envio") {
      updatedFilters[sectionIndex].options.forEach((option, index) => {
        if (index !== optionIndex) {
          option.checked = false;
        }
      });
    }

    // Si la opción seleccionada es un tipo de persona, deselecciona los demás tipos de persona
    if (updatedFilters[sectionIndex].name === "Tipo de Persona") {
      updatedFilters[sectionIndex].options.forEach((option, index) => {
        if (index !== optionIndex) {
          option.checked = false;
        }
      });
    }
    console.log(updatedFilters);
    setMethods(updatedFilters);
  };

  return (
    <form className=" lg:block">
      {methods.map((section, sectionIndex) => (
        <Disclosure
          as="div"
          key={section.id}
          className="border-b border-gray-200 py-6"
        >
          {({ open }) => (
            <>
              <h3 className="-my-3 flow-root">
                <Disclosure.Button
                  className="flex w-full items-center justify-between bg-white py-3 
                                          text-sm text-gray-400 hover:text-gray-500"
                >
                  <span className="text-xl text-gray-900">
                    <i className={section.icono}></i> {section.name}
                  </span>

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
                    <div key={option.value} className="flex-col">
                      <input
                        id={`filter-${option.label}-${optionIdx}`}
                        name={option.label}
                        value={option.value}
                        onChange={(event) =>
                          handleOption(event, sectionIndex, optionIdx)
                        } // Pasa los índices a handleOption
                        type="checkbox"
                        checked={option.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${option.label}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                      {option.checked && option.value == "zelle" && (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                              Instrucciones: Paga el monto a
                              PagosLm2023@gmail.com Completa el pedido y envía
                              soporte de pago al chat de nuestra web/app o al
                              correo ventas@licoresmundiales.com (Si tu cuenta
                              es Amerant y tienes problemas para pagar
                              contáctanos para ayudarte)
                            </div>
                          </div>
                        </div>
                      )}
                      {option.checked && option.value == "efectivo" && (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                              En estos momentos nuestro cambio es limitado.
                              Puedes consultar el cambio, pagar una parte en
                              pago móvil o dejar el cambio como crédito
                              escribiéndonos al chat de nuestra web/app o a
                              ventas@licoresmundiales.com
                            </div>
                          </div>
                        </div>
                      )}
                      {option.checked && option.value == "envio o domicilio" && (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                              Nombre: Jesus Apellido: Rodríguez Tipo de
                              Documento: Natural V- 23944726 Dirección: Edificio
                              san francisco Ciudad: Caracas Estado: Distrito
                              Capital Urbanización: Bello Monte País: Venezuela
                              Persona que recibe: Jesús Rodríguez Tipo de
                              Documento: Natural V- 23944726 Telefono de Retiro:
                              04242187006 Punto de Referencia: Frente a la torre
                              roraima
                            </div>
                          </div>
                        </div>
                      )}
                      {option.checked && option.value == "pick-up" && (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg p-8">
                          <form>
                            <div class="relative z-0 w-full mb-6 group">
                              <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-neutral dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                              />
                              <label
                                for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                              >
                                Email address
                              </label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                              <input
                                type="password"
                                name="floating_password"
                                id="floating_password"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                              />
                              <label
                                for="floating_password"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                              >
                                Password
                              </label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                              <input
                                type="password"
                                name="repeat_password"
                                id="floating_repeat_password"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                              />
                              <label
                                for="floating_repeat_password"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                              >
                                Confirm password
                              </label>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                              <div class="relative z-0 w-full mb-6 group">
                                <input
                                  type="text"
                                  name="floating_first_name"
                                  id="floating_first_name"
                                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  for="floating_first_name"
                                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  First name
                                </label>
                              </div>
                              <div class="relative z-0 w-full mb-6 group">
                                <input
                                  type="text"
                                  name="floating_last_name"
                                  id="floating_last_name"
                                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  for="floating_last_name"
                                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Last name
                                </label>
                              </div>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                              <div class="relative z-0 w-full mb-6 group">
                                <input
                                  type="tel"
                                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                  name="floating_phone"
                                  id="floating_phone"
                                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  for="floating_phone"
                                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Phone number (123-456-7890)
                                </label>
                              </div>
                              <div class="relative z-0 w-full mb-6 group">
                                <input
                                  type="text"
                                  name="floating_company"
                                  id="floating_company"
                                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  for="floating_company"
                                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Company (Ex. Google)
                                </label>
                              </div>
                            </div>
                            <button
                              type="submit"
                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Nueva Direccion
                            </button>
                          </form>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  );
}

export default Accordion;
