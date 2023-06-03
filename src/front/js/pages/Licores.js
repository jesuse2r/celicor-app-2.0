import React, { useEffect,useContext } from 'react'
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom'
import whisky from "../../img/oldparr.png";

function Licores() {
const {actions,store}= useContext(Context)
const {type} = useParams()

  useEffect (()=>{
actions.getAllLiquorsTypes(type)
  },[]) 
  console.log(store.products)
  return (
      
  <div className="bg-white antialiased bg-no-repeat text-black">
    
    
    
   
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Products</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {store.products.map((item)=>{
        return (
          <a href="#" className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
            <img src={item.category} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
          </div>
          <h3 className="mt-4 text-md text-black-700 font-extrabold justify-center flex items-center">{item.name}</h3>
          <p className="mt-1 text-lg font-medium text-white-900 justify-center flex items-center">{item.price}</p>
         
        </a>
        )
      })}
     
  
      
  

    </div>
  </div>
</div>
  )
}

export default Licores