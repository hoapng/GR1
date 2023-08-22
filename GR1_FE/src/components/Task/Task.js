import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Task.scss'
import { Countdown } from './Countdown';
import { useState } from 'react';
import ModalUpdate from './ModalUpdate';
import ModalDelete from './ModalDelete';
import ModalDone from './ModalDone';
import ModalUndo from './ModalUndo';

const Task = (props) => {



    const { todolist } = props;

    console.log(props.state)

    return (
        <div className='task-container'>
            {todolist && todolist.length > 0 && todolist.map((item, index) => {
                return (
                    <Card bg="" key={item.id}>
                        <Card.Body>
                            <Card.Title>
                                {item.title}
                                {item.deadline &&
                                    <Countdown
                                        inputDate={item.deadline}
                                    />}
                            </Card.Title>
                            <Card.Text>
                                <div>{item.decription}</div>
                                {item.deadline && <div>Deadline: {item.deadline}</div>}
                            </Card.Text>
                            {item.status === 0 ? <ModalDone item={item} fetchList={props.fetchList} /> : <ModalUndo item={item} fetchList={props.fetchList} />}
                            {/* <ModalDone item={item} fetchList={props.fetchList} /> */}
                            <ModalUpdate item={item} fetchList={props.fetchList} />
                            <ModalDelete item={item} fetchList={props.fetchList} />
                        </Card.Body>
                    </Card>
                )
            })
            }

        </div>

    );
}

export default Task;