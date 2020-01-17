import React from 'react'
import { RouteComponentProps, NavLink, match } from 'react-router-dom'
import { initialTasks } from '../context/todo-context';
import { ITask } from '../interfaces';

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
    // TODO: add styles!
    return (
        <div className='wrapper'>
            <h1>Задание №{task.id}</h1>
            
            <div className="edit-form">
                <label htmlFor="title">Краткое описание</label>
                <br/>
                <input name="title" type="text" value={task.title} onChange={(event) => console.log(event.target.value)}/>
            </div>
            <div className="action">
                <NavLink to="/list">
                    <button className="btn btn_primary btn_alt-border btn_alt-color">Вернуться к списку</button>
                </NavLink>
            </div>

        </div>
    )
}

export default EditPage
