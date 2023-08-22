import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';
import Task from './components/Task/Task';
import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState([])
  const [state, setState] = useState(0)

  useEffect(() => {
    fetchList()
  }, [])
  const fetchList = async () => {
    let res = await axios.get('http://localhost:8000/todos')
    console.log(res.data)
    setTodolist(res.data)
  }

  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='sort'>
        <Sort
          fetchList={fetchList}
          setState={setState}
        />
      </div>
      <div className='task-list'>
        <Task
          todolist={todolist}
          fetchList={fetchList}
          state={state}
        />
      </div>
    </div>
  );
}

export default App;
