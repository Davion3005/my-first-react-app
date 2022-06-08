function Modal(props) {
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className={'btn btn--alt]'} onClick={props.onConfirm}>Yes</button>
            <button className={'btn'} onClick={props.onCancel}>No</button>
        </div>
    );
}

export default Modal;