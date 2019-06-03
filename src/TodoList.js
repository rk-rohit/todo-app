import React from 'react';

const TodoList = ({todo_list, deleteTodo}) => {
    let todo_list_new = todo_list.length < 1 ? (<li className="list-group-item pointer">No Todo found!</li>) : (todo_list.map((todo ,key) => {
        return (
            <li className="list-group-item pointer" key={key} onClick={()=>deleteTodo(todo.id)}>
                {todo.content}
            </li>
        )
    }));
    return (
        <ul className="list-group">
            {todo_list_new}
        </ul>
    )
}

export default TodoList;