import React from 'react'
import { ITask } from '../interfaces'
import Header from '../components/header/header'
import TodoList from '../components/todo-list/todo-list'
import TodoContext, { initialTasks } from '../context/todo-context'


const List: React.FC = () => {
    const [tasks, setTasks] = React.useState<ITask[]>(initialTasks);

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
        <TodoContext.Provider value={{ add, remove, edit }}>
            <div className='wrapper'>
                <div className="page">
                    <Header title="Список задач">
                        <button className="btn btn_success btn_alt-color btn_wide">Добавить</button>
                    </Header>
                    <div className="main">
                        <TodoList classes="app__todo-list" tasks={tasks} />
                    </div>
                </div>
            </div>
        </TodoContext.Provider>
    )
}

export default List;
