import React from 'react'

interface IProps {
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
const Error = ({ error }: IProps) => {
    return (
        <div className="form-error">
            {error || ''}
        </div>
    )
}

export default Error
