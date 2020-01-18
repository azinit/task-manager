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
    isOpen: boolean;
}

export default class Modal extends React.Component<Partial<Config>> {
    defaultConfig: Config = {
        btnOpen: {
            className: "",
            caption: "Open"
        },
        modalTitle: "",
        isOpen: false
    }

    // FIXME
    state = {
        isOpen: this.props.isOpen ?? this.defaultConfig.isOpen
    }

    open = () => {
        this.setState({ isOpen: true })
    }
    
    close = () => {
        this.setState({ isOpen: false })
    }

    render() {
        const btnOpen = this.props.btnOpen || this.defaultConfig.btnOpen;
        const modalTitle = this.props.modalTitle || this.defaultConfig.modalTitle;
        return (
            <>
                <button className={btnOpen.className} onClick={this.open}>
                    {btnOpen.caption}
                </button>

                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-wrapper'>
                            <div className="modal-header">
                                <h1>{modalTitle}</h1>
                                <button className="btn btn_danger btn_square modal-close" onClick={this.close}>
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
