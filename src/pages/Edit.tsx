import React from 'react'
import { RouteComponentProps, NavLink, match } from 'react-router-dom'
import TodoContext, { initialTasks } from '../context/todo-context';
import TodoEdit from '../components/todo-action/todo-edit/todo-edit';
import Header from '../components/header/header';
import { ITask } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/footer/footer';

interface ListResponse {
    data: ITask[],
    length: number,
    success: boolean,
    error: string,
}

interface RequestParameters {
    match: {
        id: number;
    }
}

// TODO: strict config!
interface Config extends RouteComponentProps<any> {
}

const Edit: React.FC<Config> = (props) => {
    const id: number = +props.match.params.id;
    const [task, setTask] = React.useState({ id: -1, title: '' })
    const { remove } = React.useContext(TodoContext);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://test.megapolis-it.ru/api/list')
            .then(response => response.json())
            .then((response: ListResponse) => {
                setTask(response.data.find((task) => task.id === id)!);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div className="wrapper">
            <div className="page">
                <Header title="Загрузка...">
                    <p>...</p>
                </Header>
                <div className="main">
                    <p>...</p>
                </div>
            </div>
        </div>
    }
    // TODO: add styles!
    return (
        <div className='wrapper'>
            <div className="page">
                <Header title={`Задание №${task.id}`}>
                    <button className="btn btn_success btn_alt-color btn_wide" onClick={() => remove(task.id)}>
                        Удалить
                        &nbsp;
                        <FontAwesomeIcon icon={faTrashAlt} className="fa-icon" />
                    </button>
                </Header>
                <div className="main">
                    <TodoEdit task={task} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Edit;
