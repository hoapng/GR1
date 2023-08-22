import axios from '../utils/axiosCustomize';

const postAdd = (title, decription, deadline, status) => {
    //submit data
    return axios.post('http://localhost:8000/todos', { title, decription, deadline, status })
}

const putUpdate = (id, title, decription, deadline, status) => {
    //submit data
    return axios.put(`http://localhost:8000/todos/${id}`, { title, decription, deadline, status })
}

const putDone = (id, title, decription, deadline, status) => {
    //submit data
    return axios.put(`http://localhost:8000/todos/${id}`, { title, decription, deadline, status })
}

const deleteTask = (id) => {
    //submit data
    return axios.delete(`http://localhost:8000/todos/${id}`)
}

export { postAdd, putUpdate, deleteTask, putDone }