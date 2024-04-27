

import { useState } from "react"
import Modal from "./modal"


export default function ModalTest(){
    const [showModalPopup, setShowModalPopup] = useState(false)

    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }

    function onClose(){
        setShowModalPopup(false)
    }

    return <div>
        <button onClick={handleToggleModalPopup}>Open modal popup</button>
        {
            showModalPopup && <Modal id={'custom-id'} footer={<h1>custom footer</h1>}header={<h2>custom header</h2>} onClose={onClose} body={<div> custom body</div>}/>
        }
    </div>
}



