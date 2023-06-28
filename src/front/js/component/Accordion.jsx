import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import ViewPago from "./ViewPago.jsx";

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
                  <span className="font-medium text-gray-900">
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
                    <div key={option.value} className="flex items-center">
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
                        <ViewPago info={"Pagar = jesuse2rr@gmail.com"} />
                      )}
                      {option.checked &&
                        option.value == "efectivo o pagomovil" && (
                          <ViewPago info={"Pagar = efectivo"} />
                        )}
                      {option.checked &&
                        option.value == "envio o domicilio" && (
                          <ViewPago info={"Enviar a daniel"} />
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
