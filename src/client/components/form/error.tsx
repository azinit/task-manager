import React from 'react'

interface Config {
    error?: string
}

/**
 * Компонент ошибки
 * @remark
 * Используется для отрисовки ошибок в формах
 * @class form/Error
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const Error: React.FC<Config> = ({ error }) => {
    return (
        <div className="form-error">
            {error || ''}
        </div>
    )
}

export default Error
