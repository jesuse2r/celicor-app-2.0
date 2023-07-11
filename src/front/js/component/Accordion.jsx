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

  const handleChange = ({ target }) => {
    console.log(target.name);
    console.log(methods[0].options[1].direccion);
    console.log(methods);
    /*  setMethods([
      ...methods,
      { ...methods[0].options[1].direccion, [target.name]: target.value },
    ]); */
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
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              <h1 className="font-bold">Instrucciones:</h1>
                            </div>
                            <p>Paga el monto a Fransu2209@gmail.com</p>
                            <p>Completa el pedido y envía soporte de pago al</p>
                            <p>Whatssap +58-424-2187006</p>
                            <p>
                              (Si tienes problemas para pagar contáctanos para
                              ayudarte)
                            </p>
                          </div>
                        </div>
                      )}
                      {option.checked && option.value == "efectivo" && (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              <h1>Instrucciones:</h1>
                            </div>
                            <p>
                              Por favor comunicarse con nosotros para saber su
                              vuelto exacto
                            </p>
                            <p>Whatssap: +58-424-2187006</p>
                          </div>
                        </div>
                      )}
                      {option.checked && option.value == "pagomovil" && (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              <h1>Bancos:</h1>
                            </div>
                            <p className="font-bold">Banesco</p>
                            <p>Numero telefonico: 0414-277-67-95</p>
                            <p>Cedula de identidad: 24.213.194</p>
                            <p className="font-bold">Venezuela</p>
                            <p>Numero telefonico: 0414-277-67-95</p>
                            <p>Cedula de identidad: 24.213.194</p>
                            <p className="font-bold">Mercantil</p>
                            <p>Numero telefonico: 0414-277-67-95</p>
                            <p>Cedula de identidad: 24.213.194</p>
                          </div>
                        </div>
                      )}
                      {option.checked && option.value == "envio o domicilio" && (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                              <h1>Direccion de Envio:</h1>
                            </div>
                            <p>Nombre: Jesus Apellido: Rodríguez </p>
                            <p>Tipo de Documento: Natural V- 23944726</p>
                            <p>
                              Dirección: Edificio san francisco Ciudad: Caracas
                              Estado: Distrito Capital Urbanización: Bello Monte
                            </p>
                          </div>
                        </div>
                      )}
                      {option.checked && option.value == "pick-up" && (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg p-8">
                          <form>
                            <label className="font-bold">
                              Persona que retira
                            </label>

                            <div className="grid md:grid-cols-2 md:gap-6">
                              <div className="relative z-0 w-full mb-6 group">
                                <input
                                  type="text"
                                  name="nombre"
                                  value={option.direccion.nombre}
                                  onChange={handleChange}
                                  id="floating_first_name"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  for="floating_first_name"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Nombre
                                </label>
                              </div>
                              <div className="relative z-0 w-full mb-6 group">
                                <input
                                  type="text"
                                  name="apellido"
                                  value={option.direccion.apellido}
                                  onChange={handleChange}
                                  id="floating_last_name"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  for="floating_last_name"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Apellido
                                </label>
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                              <div className="relative z-0 w-full mb-6 group">
                                <input
                                  type="tel"
                                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                  name="telefono"
                                  value={option.direccion.telefono}
                                  onChange={handleChange}
                                  id="floating_phone"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  for="floating_phone"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Numero de telefono
                                </label>
                              </div>
                              <div className="relative z-0 w-full mb-6 group">
                                <input
                                  type="text"
                                  name="cedula"
                                  value={option.direccion.cedula}
                                  onChange={handleChange}
                                  id="floating_company"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                  placeholder=" "
                                  required
                                />
                                <label
                                  for="floating_company"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Cedula
                                </label>
                              </div>
                            </div>
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
