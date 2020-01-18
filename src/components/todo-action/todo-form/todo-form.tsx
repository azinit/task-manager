import React, { FormEvent, ChangeEvent } from 'react'

interface Config {
    onSubmit(event: FormEvent<HTMLFormElement>): void;
    btnSubmit?: JSX.Element;
    initialTitle?: string;
}

const TodoForm: React.FC<Config> = (props) => {
    const [value, setValue] = React.useState(props.initialTitle || '');
    const [changed, setChanged] = React.useState(false);

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        const actualValue = event.target.value;
        setChanged(value !== actualValue);
        setValue(actualValue);
    }

    return (
        <form onSubmit={props.onSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="title">Краткое описание</label>
                    <input className="form-input" name="title" type="text" value={value} onChange={onChange}/>
                    <div className="form-notification"></div>
                </div>
                <div className="form-group">
                    { props.btnSubmit || <button type="submit" className="btn btn_primary btn_alt-border btn_alt-color">Сохранить</button>}
                </div>
        </form>
    )
}

export default TodoForm
