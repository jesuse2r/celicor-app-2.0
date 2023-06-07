import React from 'react'


function FormPayNew() {
    return (




        <div className="bg-white">
            <div>

                <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-black bg-opacity-25"></div>

                    <div className="fixed inset-0 z-40 flex">

                        <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button type="button" className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>


                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                    <li>
                                        <a href="#" className="block px-2 py-3">Totes</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-3">Backpacks</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-3">Travel Bags</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-3">Hip Bags</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-2 py-3">Laptop Sleeves</a>
                                    </li>
                                </ul>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <h3 className="-mx-2 -my-3 flow-root">

                                        <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Color</span>
                                            <span className="ml-6 flex items-center">

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>

                                    <div className="pt-6" id="filter-section-mobile-0">
                                        <div className="space-y-6">
                                            <div className="flex items-center">
                                                <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500">White</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-color-3" className="ml-3 min-w-0 flex-1 text-gray-500">Brown</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-color-4" className="ml-3 min-w-0 flex-1 text-gray-500">Green</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-color-5" className="ml-3 min-w-0 flex-1 text-gray-500">Purple</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-6">
                                    <h3 className="-mx-2 -my-3 flow-root">

                                        <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Category</span>
                                            <span className="ml-6 flex items-center">

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>

                                    <div className="pt-6" id="filter-section-mobile-1">
                                        <div className="space-y-6">
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-2" className="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-3" className="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-category-4" className="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 px-4 py-6">
                                    <h3 className="-mx-2 -my-3 flow-root">

                                        <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                                            <span className="font-medium text-gray-900">Size</span>
                                            <span className="ml-6 flex items-center">

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>

                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>

                                    <div className="pt-6" id="filter-section-mobile-2">
                                        <div className="space-y-6">
                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500">2L</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-gray-500">6L</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-gray-500">12L</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-gray-500">18L</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-gray-500">20L</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-gray-500">40L</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Metodo de Pago</h1>
<div>hola</div>
                      </div>
                     



                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">Products</h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul className="flex">
                                        <li className="flex-1 mr-2">
                                            <a className="text-center block border border-black-500 rounded py-2 px-4 bg-gray-500 hover:bg-black-700 text-black" href="#">Juridico</a>
                                        </li>
                                        <li className="flex-1 mr-2">
                                            <a className="text-center block border border-black rounded hover:border-black-200 text-black-500 hover:bg-black-200 py-2 px-4" href="#">Natural</a>
                                        </li>

                                    </ul>

                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">

                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Metodo de Envio</span>
                                                <span className="ml-6 flex items-center">

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>

                                        <div className="pt-6" id="filter-section-0">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">Envio a su direccion</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Retiro en tienda</label>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">

                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Direccion de Envio</span>
                                                <span className="ml-6 flex items-center">

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>

                                        <div className="pt-6" id="filter-section-1">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-600">New Arrivals</label>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">

                                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                                <span className="font-medium text-gray-900">Metodo de Pago</span>
                                                <span className="ml-6 flex items-center">

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>

                                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>

                                        <div className="pt-6" id="filter-section-2">
                                            <div className="space-y-4">
                                                <div className="flex items-center">
                                                    <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">Zelle</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600"> Efectivo y/o Pago Móvil</label>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </form>


                                <div className="lg:col-span-3">
<div>hola</div>
                                </div>
                            </div>
                        </section>
                </main>
            </div>
        </div>

    )
}

export default FormPayNew
