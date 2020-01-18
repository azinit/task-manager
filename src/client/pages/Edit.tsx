import React from 'react'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import TodoEdit from '../components/todo-action/todo-edit/todo-edit';
import Header from '../components/header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/footer/footer';
import Fetch, { RemoveResponse, onRemoveHandler, ListResponse, onCatchHandler } from '../../server/fetch';
import Loader from '../components/loader/loader';

// TODO: strict config!
interface IProps extends RouteComponentProps<any> {
}

/**
 * Компонент страницы "Редактирование задачи"
 * @class pages/Edit
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const Edit = (props: IProps) => {
    const id: number = +props.match.params.id;
    const [task, setTask] = React.useState({ id: -1, title: '' })
    const [loading, setLoading] = React.useState(true);
    const [returnToList, setReturnToList] = React.useState(false);

    React.useEffect(() => {
        Fetch.getList()
            .then(response => response.json())
            .then((response: ListResponse) => {
                if (response.success) {
                    setTask(response.data.find((task) => task.id === id)!);
                    setLoading(false);
                    // Можно использовать эту конструкцию вместо прямого `setLoading(false)`, чтобы посмотреть <Loader/>
                    /* setTimeout(() => {
                        setLoading(false);
                    }, 5000) */ 
                }
            }).catch(() => {
                onCatchHandler('list')
            });
    }, []);

    function onRemove() {
        Fetch.remove(task.id)
            .then((response) => response.json())
            .then((response: RemoveResponse) => {
                if (response.success) {
                    setReturnToList(true);
                }
                onRemoveHandler(response);
            }).catch(() => {
                onCatchHandler('remove')
            });;
    }

    if (returnToList) {
        return <Redirect to="/items" />
    }
    if (loading) {
        return <div className="wrapper">
            <React.Suspense fallback={<p>Загрузка...</p>}>
                <Header title="Загрузка...">
                </Header>
                <div className="main">
                    <Loader center={true}/>
                </div>
            </React.Suspense>
        </div>
    }
    return (
        <div className='wrapper'>
            <Header title={`Задание №${task.id}`}>
                <button className="btn btn_success btn_alt-color btn_wide" onClick={onRemove}>
                    Удалить
                    &nbsp;
                    <FontAwesomeIcon icon={faTrashAlt} className="fa-icon" />
                </button>
            </Header>
            <div className="main">
                <TodoEdit task={task} setReturnToList={setReturnToList} />
            </div>
            <Footer />
        </div>
    )
}

export default Edit;
