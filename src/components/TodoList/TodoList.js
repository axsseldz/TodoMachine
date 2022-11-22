import SingleTodo from '../SingleTodo/SingleTodo';
import './TodoList.css';

export default function TodoList({ todos, setTodos }) {
    const listOfTodos = todos.map(todo => {
        return <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
    })

    return (
        <div className='listOfTodos'>
            {listOfTodos}
        </div>
    )
}