import React, { FormEvent, ChangeEvent } from 'react'
import Modal from '../../modal/modal'
import TodoForm from '../todo-form/todo-form'
import { BaseResponse } from '../../../../server/fetch';
import { AddContext } from '../../../context/todo-context';

interface Config extends AddContext {
}

/**
 * Форма добавления задачи
 * @class todo-action/todo-add/TodoAdd
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
class TodoAdd extends React.Component<Config> {
    state = {
        value: '',
        error: ''
    }

    modal = React.createRef<Modal>();

    onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.add(this.state.value, (response: BaseResponse) => {
            if (response.success) {
                this.modal.current?.close();
                this.setState({
                    value: ''
                })
                return;
            }
    
            this.setState({
                error: response.error
            })
        });
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
                    error={this.state.error}
                />
            </Modal>
        )
    }
    
}

export default TodoAdd
