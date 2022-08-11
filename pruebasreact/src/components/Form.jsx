import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {

    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState ([
        {todo: "Producto X",
        todoC: 5
        },
    ])
    const handleChange = e => setTodo ({...todo,todo: e.target.value})
    const handleChangeC = e => setTodo ({...todo,todoC: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === ''|| todo.todoC === undefined){
            alert('El campo no puede estar vacío')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar tarea</label><br />
            <input type="text" placeholder="Producto" name="todo" onChange={handleChange}/>
            <input type="number" min={1}  name="todoC" placeholder="Cantidad" onChange={handleChangeC}/>
            <button onClick={handleClick}>Agregar</button>

        </form>

        {
            todos.map((value, index) => (<Todo todo ={value.todoC + "-" + value.todo} key={index} index={index} deleteTodo={deleteTodo} />))
        }
        </>
    )
}
export default Form