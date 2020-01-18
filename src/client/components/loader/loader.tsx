import React from 'react'
import './loader.scss';

interface Config {
    center?: boolean;
}

/**
 * Компонент загрузки
 * @class loader/Loader
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const Loader: React.FC<Config> = ({ center }) => {
    return (
        <div className={`${center && 'lds-ring_center'}`}>
            <div className={`lds-ring`}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
