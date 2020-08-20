import React from 'react';
import { Todo } from './Todo';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listTodos = this.props.todoList;
        const items = listTodos.map((todo, i) =>{
            return(
            <li key={i}>
                <Todo priority={todo.priority} text={todo.text} dueDate={todo.dueDate}></Todo>
            </li>
        )}
        )
            
        return <ul> {items} </ul>

    }
}