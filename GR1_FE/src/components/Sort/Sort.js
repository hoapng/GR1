import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Sort.scss'
import ModalAdd from './ModalAdd';

function Sort(props) {
    return (
        <div className='sort-container'>
            <Row className="g-2">
                {/* <Col md className='w-25 p-3'>
                    <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="Công việc"
                    >
                        <Form.Select aria-label="Floating label select example">
                            <option>Tất cả</option>
                            <option value="1">Học tập</option>
                            <option value="2">Công ty</option>
                            <option value="3">Việc nhà</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col> */}
                {/* <Col md className='w-25 p-3'>
                    <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="Deadline"
                    >
                        <Form.Select aria-label="Floating label select example">
                            <option value='0' onClick={(event) => props.setState(event.target.value)}>Chưa hoàn thành</option>
                            <option value='1' onClick={(event) => props.setState(event.target.value)}>Đã hoàn thành</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col> */}
            </Row>
            <ModalAdd fetchList={props.fetchList} />
        </div>

    );
}

export default Sort;