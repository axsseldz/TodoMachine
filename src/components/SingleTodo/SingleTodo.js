import React, { useState, useRef, useEffect } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { IoIosDoneAll } from 'react-icons/io'
import './SingleTodo.css';

export default function SingleTodo({ todo, todos, setTodos }) {

    const [isEdit, setIsEdit] = useState(false)
    const [edit, setEdit] = useState(todo.inputField)

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [isEdit])

    function handleEditSubmit(e, id) {
        e.preventDefault();
        setTodos(todos.map(t => {
            return t.id === id ? { ...t, inputField: edit } : t
        }))
        setIsEdit(false)
    }

    const handleEdit = () => {
        if (!isEdit && !todo.isDone) {
            setIsEdit(!isEdit)
        }
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(t => {
            return t.id !== id
        }))
    }

    const handleDone = (id) => {
        setTodos(todos.map(t => {
            return t.id === id ? { ...t, isDone: !t.isDone } : t
        }))
    }

    return (
        <div className='container'>
            <div className='date'>
                <small>{todo.date}</small>
            </div>
            <form className='todos-single' onSubmit={(e) => handleEditSubmit(e, todo.id)}>
                {isEdit ?
                    <input
                        ref={inputRef}
                        value={edit}
                        onChange={(e) => setEdit(e.target.value)}
                        className='todos-single-text-edit'
                    />
                    :
                    <span className={todo.isDone ? 'todos-single-text-done' : 'todos-single-text'}>{todo.inputField}</span>
                }
                <div>
                    <span className='icon' onClick={() => handleEdit()}>
                        <AiFillEdit />
                    </span>
                    <span className='icon' onClick={() => handleDelete(todo.id)}>
                        <AiFillDelete />
                    </span>
                    <span className={todo.isDone ? 'icon-done' : 'icon'} onClick={() => handleDone(todo.id)}>
                        <IoIosDoneAll />
                    </span>
                </div>
            </form>
        </div>
    )
}