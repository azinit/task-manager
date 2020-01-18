import React from 'react'
import './loader.scss';

interface IProps {
    center?: boolean;
}

/**
 * Компонент загрузки
 * @class components/loader/loader
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const Loader = ({ center }: IProps) => {
    return (
        <div className={center ? 'lds-ring_center' : ''}>
            <div className={`lds-ring`}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
