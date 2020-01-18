import React from 'react'
import './todo-add.scss'
import Modal from '../../modal/modal'

const TodoAdd: React.FC = () => {
    return (
        <Modal
            btnOpen={{ caption: "Добавить", className: "btn btn_success btn_alt-color btn_wide" }}
            // btnClose={{ caption: "Создать", className: "btn btn_primary btn_alt-color btn_wide" }}
            modalTitle=""
        >
            <p>Add form...</p>
        </Modal>
    )
}

export default TodoAdd
