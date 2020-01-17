import React from 'react'
import { ITask } from '../../interfaces';
import './todo-item.scss';

interface Config {
    task: ITask;
}

enum Classes {
    base = 'todo-item',
    completed = 'todo-item_completed'
}

const TodoItem: React.FC<Config> = ({ task }) => {
    const classes: string[] = [Classes.base];
    if (task.completed) {
        classes.push(Classes.completed);
    }

    return (
        <li className={classes.join(' ')}>
            <div className="cell todo-item__id">{ task.id} </div>
            <div className="cell todo-item__title">{ task.title} </div>
            <div className="cell todo-item__actions">
                <button>E</button>
                <button>&times;</button>
            </div>
        </li>
    )
}

export default TodoItem;