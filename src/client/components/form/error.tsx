import React from 'react'

interface Config {
    error?: string
}

/**
 * Компонент ошибки
 * @remark
 * Используется для отрисовки ошибок в формах
 * @class components/form/error
 * @extends React.Component
 * @component
 * @author Азин И.А.
 */
const Error = ({ error }: Config) => {
    return (
        <div className="form-error">
            {error || ''}
        </div>
    )
}

export default Error
