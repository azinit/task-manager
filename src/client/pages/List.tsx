import React from 'react'
import { ITask } from '../interfaces'
import Header from '../components/header/header'
// import TodoList from '../components/todo-list/todo-list'
import TodoContext from '../context/todo-context'
import Footer from '../components/footer/footer'
import TodoAdd from '../components/todo-action/todo-add/todo-add'
import Fetch, { ListResponse, AddResponse, CallbackResponse, onCatchHandler } from '../../server/fetch'
import Loader from '../components/loader/loader'


const TodoList = React.lazy(() => import('../components/todo-list/todo-list'));

/**
 * Компонент страницы "Список задач"
 * @class pages/List
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const List = () => {
    const [tasks, setTasks] = React.useState<ITask[]>([]);

    React.useEffect(getList, []);

    function getList() {
        Fetch.getList()
            .then(response => response.json())
            .then((response: ListResponse) => {
                if (response.success) {
                    setTasks(response.data)
                }
            }).catch(() => {
                onCatchHandler('list')
            });

    }
    function add(title: string, callback: CallbackResponse) {
        Fetch.add(title)
            .then((response) => response.json())
            .then((response: AddResponse) => {
                if (response.success) {
                    setTasks([...tasks, {
                        title,
                        id: response.id,
                    }])
                }
                callback(response);
            }).catch(() => {
                onCatchHandler('add')
            });
    }

    // test-case: remove(999, onRemoveError);
    function remove(id: number, callback: CallbackResponse) {
        Fetch.remove(id)
            .then((response) => response.json())
            .then((response) => {
                if (response.success) {
                    setTasks(tasks.filter(
                        task => task.id !== id
                    ));
                }
                callback(response);
            }).catch(() => {
                onCatchHandler('remove')
            });;
    }

    return (
        <TodoContext.Provider value={{ add, remove }}>
            <div className='wrapper'>
                <Header title="Список задач">
                    <TodoAdd add={add} />
                </Header>
                <div className="main">
                    <React.Suspense fallback={<Loader center={true} />}>
                        <TodoList classes="app__todo-list" tasks={tasks} />
                    </React.Suspense>
                </div>
                <Footer />
            </div>
        </TodoContext.Provider>
    )
}

export default List;
