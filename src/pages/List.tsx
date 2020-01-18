import React from 'react'
import { ITask } from '../interfaces'
import Header from '../components/header/header'
import TodoList from '../components/todo-list/todo-list'
import TodoContext from '../context/todo-context'
import Footer from '../components/footer/footer'
import Modal from '../components/modal/modal'
import TodoAdd from '../components/todo-action/todo-add/todo-add'

interface ListResponse {
    data: ITask[],
    length: number,
    success: boolean,
    error: string,
}

const List: React.FC = () => {
    const [tasks, setTasks] = React.useState<ITask[]>([]);
    let success = false;
    let error = "";

    // TODO: process server response
    // TODO: add validate alerts (success?)
    React.useEffect(() => {
        fetch('https://test.megapolis-it.ru/api/list')
            .then(response => response.json())
            .then((response: ListResponse) => {
                success = response.success
                error = response.error
                setTasks(response.data)
            })
    }, [])

    function add(title: string) {
        fetch('https://test.megapolis-it.ru/api/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title
            }),
        })
        // FIXME: id by server
        setTasks([...tasks, {
            title,
            id: tasks.length,
        }])
    }

    function remove(id: number) {
        fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter(task => task.id !== id));
    }

    function edit(editedTask: ITask) {
        setTasks(tasks.map(task => {
            if (task.id === editedTask.id) {
                task.title = editedTask.title;
            }
            return task;
        }))
    }
    // FIXME: TodoAdd({ add })
    return (
        <TodoContext.Provider value={{ add, remove, edit }}>
            <div className='wrapper'>
                <div className="page">
                    <Header title="Список задач">
                        <TodoAdd add={add} />
                    </Header>
                    <div className="main">
                        <TodoList classes="app__todo-list" tasks={tasks} />
                    </div>
                    <Footer />
                </div>
            </div>
        </TodoContext.Provider>
    )
}

export default List;
