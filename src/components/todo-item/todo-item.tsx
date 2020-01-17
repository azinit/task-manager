import React from 'react'
import { ITask } from '../../interfaces';
import './todo-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface Config {
    task: ITask;
}

const TodoItem: React.FC<Config> = ({ task }) => {
    return (
        <li className="todo-item">
            <div className="cell todo-item__id">{ task.id} </div>
            <div className="cell todo-item__title">{ task.title} </div>
            <div className="cell todo-item__actions">
                <button className="btn btn_success"><FontAwesomeIcon icon={faPen} className="fa-icon"/></button>
                <button className="btn btn_danger"><FontAwesomeIcon icon={faTrashAlt} className="fa-icon"/></button>
            </div>
        </li>
    )
}

export default TodoItem;