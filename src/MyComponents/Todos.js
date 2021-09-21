import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
    return (
        <div className= "container">
            <h2 className="text-center my-4 mt-5">Todos List</h2>
            {props.todos.length === 0? "No Todos to Display. Add some Tasks":         
            props.todos.map((todo) => {           
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })
            }
        </div>
    )
}
