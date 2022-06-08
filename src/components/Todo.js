import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalOpened, setModalOpened] = useState(false)

    function deleteHandler() {
        setModalOpened(true);
    }

    function cancelHandler() {
        console.log('Cancel');
        setModalOpened(false);
    }

    function confirmHandler() {
        console.log('Confirm');
        setModalOpened(false);
    }

    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            { modalOpened && <Modal onConfirm={confirmHandler} onCancel={cancelHandler} /> }
            { modalOpened && <Backdrop onCancel={cancelHandler} /> }
        </div>
    )
}

export default Todo;