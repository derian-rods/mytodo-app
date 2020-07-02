import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'

function NewTodo(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = (e) => {
            const {value} = e.target;
            console.log(value)
    }
    return(
        <> 
        <div className="d-flex justify-content-end fixed-bottom mb-5 mr-2">
            <i className="fas fa-plus-circle fa-3x" onClick={handleShow}></i>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>New Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <input type="text" placeholder="New todo" className="form-control" onChange={handleAdd}></input>
                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                add
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default NewTodo;