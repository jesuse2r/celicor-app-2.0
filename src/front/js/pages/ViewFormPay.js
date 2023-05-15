import React, { useState } from "react";
import FormPay from "../component/FormPay.jsx";
import CreditView from "../component/CreditView.jsx";
import PaypalView from "../component/PaypalView.jsx";
import ZelleView from "../component/ZelleView.jsx";
import TransferenciaView from "../component/TransferenciaView.jsx";
import PagomovilView from "../component/PagomovilView.jsx";
import EfectivoView from "../component/EfectivoView.jsx";
import FacturaView from "../component/FacturaView.jsx";





const ViewFormPay = () => {
    const [handleCredit, setHandleCredit] = useState({
        pagomovil: false,
        tarjetaDeCredito: false,
        zelle: false,
        paypal: false,
        transferencia: false,
        efectivo: false
    })

    return <div className="d-flex bg-light">

        <FormPay setHandleCredit={setHandleCredit} handleCredit={handleCredit} />
        {handleCredit.tarjetaDeCredito ? <CreditView /> : null}
        {handleCredit.paypal ? <PaypalView /> : null}
        {handleCredit.zelle ? <ZelleView /> : null}
        {handleCredit.transferencia ? <TransferenciaView /> : null}
        {handleCredit.pagomovil ? <PagomovilView /> : null}
        {handleCredit.efectivo ? <EfectivoView /> : null}
        <FacturaView />
    </div>
}

export default ViewFormPay