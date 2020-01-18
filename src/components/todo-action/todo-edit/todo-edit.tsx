import React, { ChangeEvent, FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { ITask } from '../../../interfaces'
import TodoContext from '../../../context/todo-context';
import TodoForm from '../todo-form/todo-form';
import Fetch from '../../../server/fetch';

interface Config {
    task: ITask;
}

const TodoEdit: React.FC<Config> = ({ task }) => {
    const [value, setValue] = React.useState(task.title);
    const [changed, setChanged] = React.useState(false);

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        Fetch.edit({ ...task, title: value })
            .then(() => {
                // @ts-ignore
                window.location = "/list"
            })
    }

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        const actualValue = event.target.value;
        setChanged(value !== actualValue);
        setValue(actualValue);
    }

    return (
        <TodoForm
            onSubmit={onSubmit}
            onChange={onChange}
            value={value}
            btnSubmit={
                changed ? (
                    <button type="submit" className="btn btn_primary btn_alt-border btn_alt-color">Сохранить</button>
                ) : (
                    <NavLink to="/list">
                        <button className="btn btn_primary btn_alt-border btn_alt-color">Вернуться к списку</button>
                    </NavLink>
                )
            }
        />


    )
}

export default TodoEdit
