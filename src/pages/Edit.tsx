import React from 'react'
import { RouteComponentProps, NavLink, match } from 'react-router-dom'
import TodoContext, { initialTasks } from '../context/todo-context';
import TodoEdit from '../components/todo-action/todo-edit/todo-edit';
import Header from '../components/header/header';
import { ITask } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface RequestParameters {
    match: {
        id: number;
    }
}

// TODO: strict config!
interface Config extends RouteComponentProps<any> {
}

const EditPage: React.FC<Config> = (props) => {
    const id: number = +props.match.params.id;
    const task: ITask = initialTasks.find(task => task.id === id)!;
    const { remove } = React.useContext(TodoContext);
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
                    <TodoEdit task={task}/>
                </div>
            </div>
        </div>
    )
}

export default EditPage
