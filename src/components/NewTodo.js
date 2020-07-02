import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function NewTodo(props) {
  const [show, setShow] = useState(false);
  const initialStateValues = '';
  const [todo, setTodo] = useState(initialStateValues);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setTodo({value});
  };
  const handleSubmit = (e) => {
        e.preventDefault();
        props.addOrEditTodo(todo);
        
    }
  return (
    <>
      <div className="d-flex justify-content-end fixed-bottom mb-5 mr-2">
        <i className="fas fa-plus-circle fa-3x" onClick={handleShow}></i>
      </div>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              placeholder="New todo"
              className="form-control"
              onChange={handleInputChange}
              name="newTodo"
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              add
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default NewTodo;
