import React, { useState } from "react";
import FormPayNew from "../component/FormPayNew.jsx";







const ViewFormPay = () => {
    const [handleCredit, setHandleCredit] = useState({
        pagomovil: false,

        zelle: false,

        transferencia: false,
        efectivo: false
    })


    return <div className="flex flex-col bg-light ">




        <FormPayNew setHandleCredit={setHandleCredit} handleCredit={handleCredit} />





    </div>
}

export default ViewFormPay