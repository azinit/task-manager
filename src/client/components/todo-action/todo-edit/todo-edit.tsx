import React, { ChangeEvent, FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { ITask } from '../../../interfaces'
import TodoForm from '../todo-form/todo-form';
import Fetch, { onCatchHandler, BaseResponse } from '../../../../server/fetch';

interface IProps {
    task: ITask;
    setReturnToList(value: boolean): void;
}

/**
 * Форма редактирования задачи
 * @class components/todo-action/todo-edit/todo-edit
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const TodoEdit = ({ task, setReturnToList }: IProps) => {
    const [value, setValue] = React.useState(task.title);
    const [changed, setChanged] = React.useState(false);

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        Fetch.edit({ ...task, title: value })
            .then((response) => response.json())
            .then((response: BaseResponse) => {
                if (response.success) {
                    setReturnToList(true)
                }
            })
            .catch(() => {
                onCatchHandler('edit')
            });;
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
                    <NavLink to="/items">
                        <button className="btn btn_primary btn_alt-border btn_alt-color">Вернуться к списку</button>
                    </NavLink>
                )
            }
        />


    )
}

export default TodoEdit
