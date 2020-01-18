import React, { FormEvent, ChangeEvent } from 'react'
import Error from '../../form/error'

interface Config {
    onSubmit(event: FormEvent<HTMLFormElement>): void;
    onChange(event: ChangeEvent<HTMLInputElement>): void;
    value: string;
    btnSubmit?: JSX.Element;
    initialTitle?: string;
    error?: string;
}

const TodoForm: React.FC<Config> = (props) => {
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
