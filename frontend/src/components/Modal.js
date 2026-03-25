import React from 'react'
import './styles/modal_styles.css'

function Modal({openModal, setOpenModal, message, reload, statuscolor}) {
    if(!openModal) return null

    const handleClose = () => {
        setOpenModal(false);
        if(reload){
            window.location.reload();
        }
    }


    return (
        <div className='blur'>
            <div className='container_modal'>
                <div className='status'>
                    <h1>{message}</h1>
                    <h1>modal</h1>
                    <button onClick={handleClose} className='close_button' id={statuscolor}>X</button>
                </div>
            </div>
        </div>
    )
}

export default Modal