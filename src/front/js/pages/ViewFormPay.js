import React, { useState } from "react";
import FormPayNew from "../component/FormPayNew.jsx";
import PagomovilView from "../component/PagomovilView.jsx";
import ZelleView from "../component/ZelleView.jsx"
import TransferenciaView from "../component/TransferenciaView.jsx"
import EfectivoView from "../component/EfectivoView.jsx"






const ViewFormPay = () => {
    const [handleCredit, setHandleCredit] = useState({
        pagomovil: false,
    
        zelle: false,
     
        transferencia: false,
        efectivo: false
    })
    

    return <div className="d-flex flex-column bg-light ">

<FormPayNew/>


<FormPayNew setHandleCredit={setHandleCredit} handleCredit={handleCredit} />

{handleCredit.zelle ? <ZelleView /> : null}
{handleCredit.transferencia ? <TransferenciaView /> : null}
{handleCredit.pagomovil ? <PagomovilView /> : null}
{handleCredit.efectivo ? <EfectivoView /> : null}



    </div>
}

export default ViewFormPay