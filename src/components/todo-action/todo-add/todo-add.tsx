import React, { FormEvent } from 'react'
import './todo-add.scss'
import Modal from '../../modal/modal'
import TodoForm from '../todo-form/todo-form'

const TodoAdd: React.FC = () => {
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("TODO-ADD: SUBMIT ATTEMPT");
    }

    return (
        <Modal
            btnOpen={{ caption: "Добавить", className: "btn btn_success btn_alt-color btn_wide" }}
            modalTitle=""
        >
            <TodoForm onSubmit={onSubmit}/>
        </Modal>
    )
}

export default TodoAdd
