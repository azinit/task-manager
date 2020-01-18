import React from 'react'
import './header.scss'

interface Config {
    title: string;
}
const Header: React.FC<Config> = (props) => {
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
