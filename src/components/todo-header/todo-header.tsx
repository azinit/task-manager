import React from 'react'
import './todo-header.scss'

const TodoHeader: React.FC = () => {
    return (
        <div className="todo-header">
            <h1>Список задач</h1>
            <button>Добавить</button>
        </div>
    )
}

export default TodoHeader;
