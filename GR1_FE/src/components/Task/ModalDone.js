import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { putDone } from '../../service/api';
import _ from 'lodash';

function ModalDone(props) {
    const [show, setShow] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const [title, setTitle] = useState("");
    const [decription, setDecription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [status, setStatus] = useState(1)

    useEffect(() => {
        // console.log('run useEffect', dataUpdate)
        if (!_.isEmpty(dataUpdate)) {
            //update state
            setTitle(dataUpdate.title);

            setDecription(dataUpdate.decription)
            setDeadline(dataUpdate.deadline);
        }
    }, [dataUpdate])

    const handleClose = () => {
        setTitle("");
        setDecription("")
        setDeadline("")
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const handleDone = async () => {
        let data = await putDone(dataUpdate.id, title, decription, deadline, status)
        console.log(data);
        handleClose()
        props.fetchList()
    }

    return (
        <>
            <Button variant="success" onClick={() => {
                handleShow();
                setDataUpdate(props.item)
            }}>
                Done
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>update task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">

                        <div className="col-12">
                            <label className="form-label">Title</label>
                            <input type="text" disabled className="form-control" value={title} onChange={(event) => setTitle(event.target.value)} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Decription</label>
                            <input type="text" disabled className="form-control" value={decription} onChange={(event) => setDecription(event.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Deadline</label>
                            <input type="text" disabled className="form-control" value={deadline} placeholder='YYYY-MM-DD' onChange={(event) => setDeadline(event.target.value)} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDone()}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDone;