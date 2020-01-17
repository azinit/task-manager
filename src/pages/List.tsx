import React from 'react'
import { ITask } from '../interfaces'
import TodoHeader from '../components/todo-header/todo-header'
import TodoList from '../components/todo-list/todo-list'
import Context, { initialTasks } from '../context/todo-context'


const ListPage: React.FC = () => {
    const [tasks, setTasks] = React.useState<ITask[]>(initialTasks)

    function add(title: string) {
        setTasks([...tasks, {
            title,
            id: tasks.length,
        }])
    }

    function remove(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function edit(editedTask: ITask) {
        setTasks(tasks.map(task => {
            if (task.id == editedTask.id) {
                task.title = editedTask.title;
            }
            return task;
        }))
    }

    return (
        <Context.Provider value={{ add, remove, edit }}>
            <div className='wrapper'>
                <TodoHeader />
                <TodoList classes="app__todo-list" tasks={tasks} />
            </div>
        </Context.Provider>
    )
}

export default ListPage
