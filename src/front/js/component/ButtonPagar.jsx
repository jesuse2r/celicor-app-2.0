import React, {useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const ButtonPagar = (props) => {
    const navigate = useNavigate()
    const [total, setTotal] = useState("")
  
    const { store, actions } = useContext(Context);
    const getTotal = () => {
        let total = 0;
        for (let item of store.cartItems) {
            total = total + item.licor.price * item.quantity;
            console.log(total);
        }
        return total;
    };
    useEffect(() => {
       if (store.cartItems.length > 0) setTotal((getTotal() * 1.16).toFixed(2))
    }, [store.cartItems])
const handleFactura = async() =>  {
    const response = await actions.addFactura(total)
    if (response) {navigate("/viewfacture")}


}

return (
    <button onClick={()=>(handleFactura())} className="btn btn-success">Ver factura!</button>
    )
}


export default ButtonPagar