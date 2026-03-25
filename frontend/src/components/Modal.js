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
            <div className='container_modal' id={statuscolor}>
                <div className='status'>
                    <h1>{message}</h1>
                    <button onClick={handleClose} className='close_button'>X</button>
                </div>
            </div>
        </div>
    )
}

export default Modal