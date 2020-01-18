import React from 'react';
import { ITask } from '../../interfaces';
import TodoItem from '../todo-item/todo-item';
import './todo-list.scss';

interface Config {
    tasks: ITask[];
    classes: string;
}

/**
 * Компонент списка задач
 * @class components/todo-list/todo-list
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const TodoList = (props: Config) => {
    const classes: string[] = ['todo-list'];
    
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