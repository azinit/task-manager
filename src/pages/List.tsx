import React from 'react'
import { ITask } from '../interfaces'
import TodoHeader from '../components/todo-header/todo-header'
import TodoList from '../components/todo-list/todo-list'

const ListPage: React.FC = () => {
    const [tasks] = React.useState<ITask[]>([
        { id: 0, title: 'Завершить тестовое' },
        { id: 1, title: 'Проверить MR' },
        { id: 2, title: 'Поправить автодоку' },
    ])

    return (
        <div className='wrapper'>
            <TodoHeader />
            <TodoList classes="app__todo-list" tasks={tasks}/>
        </div>
    )
}

export default ListPage
