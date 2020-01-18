import React, { ReactNode } from 'react'
import './modal.scss'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
    btnOpen: {
        className: string,
        caption: string;
    };
    modalTitle: string;
    children: ReactNode;
}

interface IState {
    isOpen: boolean;
}

/**
 * Модальное окно
 * @class components/modal/modal
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */

export default class Modal extends React.Component<IProps, IState> {    
    static defaultProps: IProps = {
        btnOpen: {
            className: "",
            caption: "Open"
        },
        modalTitle: "Modal title",
        children: <></>
    }

    state = {
        isOpen: false
    }

    open = () => {
        this.setState({ isOpen: true })
    }

    close = () => {
        this.setState({ isOpen: false })
    }

    render() {
        const {btnOpen, modalTitle} = this.props;
        console.log('MODALTITLE: ', modalTitle);
        // const btnOpen = this.props.btnOpen || this.defaultIProps.btnOpen;
        // const modalTitle = this.props.modalTitle || this.defaultIProps.modalTitle;
        return (
            <>
                <button className={btnOpen.className} onClick={this.open} data-testid="modal-open-btn">
                    {btnOpen.caption}
                </button>

                {this.state.isOpen && (
                    <div className='modal' data-testid="modal">
                        <div className='modal-wrapper'>
                            <div className="modal-bar">
                                <button
                                    className="btn btn_danger btn_square modal-close"
                                    onClick={this.close}
                                    data-testid="modal-close-btn"
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                            <div className="modal-content">
                                <div className="modal-header" data-testid="modal-header">
                                    <h1>{modalTitle}</h1>
                                </div>
                                <div className="modal-body">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }
}
