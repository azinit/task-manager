import React, { ChangeEvent, FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { ITask } from '../../../interfaces'
import TodoContext from '../../../context/todo-context';
import TodoForm from '../todo-form/todo-form';

interface Config {
    task: ITask;
}

const TodoEdit: React.FC<Config> = ({ task }) => {
    const { edit } = React.useContext(TodoContext);
    const [value, setValue] = React.useState(task.title);
    const [changed, setChanged] = React.useState(false);

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log({ ...task, title: value });
        edit({ ...task, title: value });
        // @ts-ignore
        window.location = "/list"
    }

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        const actualValue = event.target.value;
        setChanged(value !== actualValue);
        setValue(actualValue);
    }

    return (
        <form onSubmit={onSubmit}>
            {/*<TodoForm 
            onSubmit={onSubmit}
            btnSubmit={<button type="submit" className="btn btn_primary btn_alt-border btn_alt-color">Сохранить</button>}
            />*/}
            <div className="form-group">
                <label className="form-label" htmlFor="title">Краткое описание</label>
                <input className="form-input" name="title" type="text" value={value} onChange={onChange} />
                <div className="form-notification"></div>
            </div>
            <div className="form-group">

                {changed ? (
                    <button type="submit" className="btn btn_primary btn_alt-border btn_alt-color">Сохранить</button>
                ) : (
                        <NavLink to="/list">
                            <button className="btn btn_primary btn_alt-border btn_alt-color">Вернуться к списку</button>
                        </NavLink>
                    )}
            </div>
        </form>
        
    )
}

export default TodoEdit
