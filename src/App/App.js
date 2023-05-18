import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import './App.css';
import InputBar from '../components/InputBar/InputBar';
import TodoList from '../components/TodoList/TodoList';

export default function App() {
  const [nightMode, setNightMode] = useState(false)
  const [inputField, setInputField] = useState("")
  const [todos, setTodos] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false);

  const currentTime = new Date();
  const options = {
    timeZone: 'America/Tijuana',
    hour12: true,
  };

  const accurrateTime = currentTime.toLocaleString('es-MX', options);
  const time = accurrateTime.replace(/:\d+ /, ' ');

  // Obtiene todos los items al refrescar la pagina
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
      setDataLoaded(true);
    }
  }, []);


  // useEffect para guardar los datos en el localStorage cuando el arreglo 'todos' cambie
  useEffect(() => {
    if (dataLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, dataLoaded]);

  // useEffect para asegurarse de que dataLoaded se establezca en true al cargar la página por primera vez
  useEffect(() => {
    if (!dataLoaded) {
      setDataLoaded(true);
    }
  }, [dataLoaded]);


  function handlePageMode() {
    setNightMode(!nightMode)
  }

  function handleClick(e) {
    e.preventDefault();
    if (inputField) {
      setTodos([...todos, { id: Date.now(), date: time, inputField, isDone: false }])
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
      <InputBar nightMode={nightMode} inputField={inputField} setInputField={setInputField} handleClick={handleClick} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}


