import React, { FormEvent, ChangeEvent } from 'react'
import Error from '../../form/error'

interface IProps {
    onSubmit(event: FormEvent<HTMLFormElement>): void;
    onChange(event: ChangeEvent<HTMLInputElement>): void;
    value: string;
    btnSubmit?: JSX.Element;
    initialTitle?: string;
    error?: string;
}

/**
 * Форма для работы с моделью задачи
 * @class components/todo-action/todo-form/todo-form
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const TodoForm = (props: IProps) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label className="form-label" htmlFor="title">Краткое описание</label>
                <input 
                    className="form-input" name="title" type="text"
                    value={props.value} onChange={props.onChange}
                />
                <Error error={props.error}/>
            </div>
            <div className="form-group">
                {props.btnSubmit || <button type="submit" className="btn btn_primary btn_alt-border btn_alt-color">Создать</button>}
            </div>
        </form>
    )
}

export default TodoForm
