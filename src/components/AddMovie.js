// import { Button, Modal } from "bootstrap";
import React from "react";
import { Form,Button, Modal } from "react-bootstrap";
import { useState } from "react";

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [rate, setRate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random,
      title: title,
      Description,
      posterUrl: url,
      rate,
    };
    handleAdd(newMovie);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            title:
            <input
              type="text"
              className="form-control"
              placholder="enter title movie"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            Description:
            <input
              type="url"
              className="form-control"
              placholder="enter description movie"
              onChange={(e) => setDescription(e.target.value)}
              value={Description}
            />
            PosterUrl:
            <input
              type="url"
              className="form-control"
              placholder="enter url movie"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            Rate:
            <input
              type="text"
              className="form-control"
              placholder="enter rate movie"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
            />
            <Button variant="primary" type="submit">
              submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
