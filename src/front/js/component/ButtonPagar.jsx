import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const ButtonPagar = (props) => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context);
const handleFactura = async() =>  {
    const response = await actions.addFactura("100")
    if (response) {navigate("/viewfacture")}


}

return (
    <button onClick={()=>(handleFactura())} className="btn btn-success">Ver factura!</button>
    )
}


export default ButtonPagar