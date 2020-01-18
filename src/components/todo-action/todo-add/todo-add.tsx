import React, { FormEvent, ChangeEvent } from 'react'
import './todo-add.scss'
import Modal from '../../modal/modal'
import TodoForm from '../todo-form/todo-form'

interface Config {
    add(title: string): void
}

class TodoAdd extends React.Component<Config> {
    state = {
        value: ''
    }

    modal = React.createRef<Modal>();

    onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.add(this.state.value);
        this.modal.current?.close();
        this.setState({
            value: ''
        })
    }

    onChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.target.value
        })

    }

    render() {
        return (
            <Modal
                btnOpen={{ caption: "Добавить", className: "btn btn_success btn_alt-color btn_wide" }}
                modalTitle=""
                ref={this.modal}
            >
                <TodoForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    value={this.state.value}
                />
            </Modal>
        )
    }
    
}

export default TodoAdd
