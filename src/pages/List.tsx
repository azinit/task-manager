import React from 'react'
import { ITask } from '../interfaces'
import Header from '../components/header/header'
import TodoList from '../components/todo-list/todo-list'
import TodoContext from '../context/todo-context'
import Footer from '../components/footer/footer'
import TodoAdd from '../components/todo-action/todo-add/todo-add'
import Fetch from '../server/fetch'

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
        Fetch.list()
            .then(response => response.json())
            .then((response: ListResponse) => {
            success = response.success
            error = response.error
            setTasks(response.data)
        })
    }, [])

    function add(title: string) {
        Fetch.add(title);
        // FIXME: id by server
        setTasks([...tasks, {
            title,
            id: tasks.length,
        }])
    }

    function remove(id: number) {
        Fetch.remove(id);
        setTasks(tasks.filter(task => task.id !== id));
    }

    // FIXME: TodoAdd({ add })
    return (
        <TodoContext.Provider value={{ add, remove }}>
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
