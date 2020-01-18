import React from 'react';
import { ITask } from '../../interfaces';
import TodoItem from '../todo-item/todo-item';
import './todo-list.scss';

interface Config {
    tasks: ITask[];
    classes: string;
}

enum Classes {
    base = 'todo-list'
}

const TodoList: React.FC<Config> = (props) => {
    const classes: string[] = [Classes.base];
    
    if (props.tasks.length === 0) {
        return <p>н/д</p>
    }

    return (
        <ul className={`${props.classes} ${classes.join(' ')}`}>
            { props.tasks.map(task => <TodoItem task={task} key={task.id}/>)}
        </ul>
    )
}

export default TodoList;