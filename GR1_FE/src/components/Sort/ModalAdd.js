import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postAdd } from '../../service/api';

function ModalAdd(props) {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState("");
    const [decription, setDecription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [status, setStatus] = useState(0)

    const handleClose = () => {
        setTitle("");
        setDecription("")
        setDeadline("")
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const handleAdd = async () => {
        let data = await postAdd(title, decription, deadline, status)
        // console.log(data);
        handleClose()
        props.fetchList()
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">

                        <div className="col-12">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Decription</label>
                            <input type="text" className="form-control" value={decription} onChange={(event) => setDecription(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Deadline</label>
                            <input type="text" className="form-control" value={deadline} placeholder='YYYY-MM-DD' onChange={(event) => setDeadline(event.target.value)} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleAdd()}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAdd;