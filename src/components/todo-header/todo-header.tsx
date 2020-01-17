import React from 'react'
import './todo-header.scss'

const TodoHeader: React.FC = () => {
    return (
        <div className="todo-header">
            <div className="todo-header__title">
                <h1>Список задач</h1>
            </div>
            <div className="todo-header__action">
                <button className="btn btn_success btn_alt-color btn_wide">Добавить</button>
            </div>
        </div>
    )
}

export default TodoHeader;
