import React, { ReactNode } from 'react'
import './header.scss'

interface IProps {
    title: string;
    children: ReactNode;
}

/**
 * Хедер
 * @class components/header/header
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const Header = (props: IProps) => {
    return (
        <div className="header">
            <div className="header__title">
                <h1>{ props.title }</h1>
            </div>
            <div className="header__action">
                { props.children }
            </div>
        </div>
    )
}

export default Header;
