import React from 'react'
import { ITask } from '../../interfaces';
import './todo-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import TodoContext from '../../context/todo-context';
import {NavLink} from 'react-router-dom';
import { onRemoveHandler } from '../../../server/fetch';

interface IProps {
    task: ITask;
}

/**
 * Компонент задачи
 * @class components/todo-item/todo-item
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const TodoItem= ({ task }: IProps) => {
    const { remove } = React.useContext(TodoContext);
    return (
        <li className="todo-item">
            <div className="cell todo-item__id">{task.id} </div>
            <div className="cell todo-item__title">{task.title} </div>
            <div className="cell todo-item__actions">
                <NavLink to={`/edit/${task.id}`} className="btn_pos">
                <button className="btn btn_success"><FontAwesomeIcon icon={faPen} className="fa-icon" /></button>
                </NavLink>
                <button className="btn btn_danger" onClick={() => remove(task.id, onRemoveHandler)}><FontAwesomeIcon icon={faTrashAlt} className="fa-icon" /></button>
            </div>
        </li>
    )
}

export default TodoItem;