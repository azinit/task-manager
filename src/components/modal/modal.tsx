import React from 'react'
import './modal.scss'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Config {
    btnOpen: {
        className: string,
        caption: string;
    };
    modalTitle: string;
}

export default class Modal extends React.Component<Partial<Config>> {
    state = {
        isOpen: false
    }

    defaultConfig: Config = {
        btnOpen: {
            className: "",
            caption: "Open"
        },
        modalTitle: ""
    }

    render() {
        const btnOpen = this.props.btnOpen || this.defaultConfig.btnOpen;
        const modalTitle = this.props.modalTitle || this.defaultConfig.modalTitle;
        return (
            <>
                <button className={btnOpen.className} onClick={() => this.setState({ isOpen: true })}>
                    {btnOpen.caption}
                </button>

                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-wrapper'>
                            <div className="modal-header">
                                <h1>{modalTitle}</h1>
                                <button className="btn btn_danger btn_square modal-close" onClick={() => this.setState({ isOpen: false })}>
                                    <FontAwesomeIcon icon={faTimes}/>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }
}
