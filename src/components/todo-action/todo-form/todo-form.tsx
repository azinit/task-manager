import React, { FormEvent, ChangeEvent } from 'react'

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
                <div className="form-error">{props.error}</div>
            </div>
            <div className="form-group">
                {props.btnSubmit || <button type="submit" className="btn btn_primary btn_alt-border btn_alt-color">Создать</button>}
            </div>
        </form>
    )
}


/*
export function useTodoForm(defaultTitle = '', defaultChanged = false) {
    const [value, setValue] = React.useState(defaultTitle);
    const [changed, setChanged] = React.useState(defaultChanged);

    return {
        value,
        setValue,
        changed,
        setChanged,
    }
}*/

export default TodoForm
