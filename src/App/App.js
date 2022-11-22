import React, { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import './App.css';
import InputBar from '../components/InputBar/InputBar';
import TodoList from '../components/TodoList/TodoList';

export default function App() {
  const [nightMode, setNightMode] = useState(false)
  const [inputField, setInputField] = useState("")
  const [todos, setTodos] = useState([])

  function handlePageMode() {
    setNightMode(!nightMode)
  }

  function handleClick(e) {
    e.preventDefault();
    if (inputField) {
      setTodos([...todos, { id: Date.now(), inputField, isDone: false }])
      setInputField("")
    }
  }

  return (
    <div className={nightMode ? 'App-night' : 'App'}>
      <div className={nightMode ? 'header-dark' : 'header-light'}>
        <h1 className='tittle'>ToDo Machine</h1>
        <span className={nightMode ? 'lightMode' : 'darkMode'} onClick={() => handlePageMode()}>
          {nightMode ? <MdLightMode /> : <MdDarkMode />}
        </span>
      </div>
      <InputBar inputField={inputField} setInputField={setInputField} handleClick={handleClick} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}


