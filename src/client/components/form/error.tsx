import React from 'react'

interface Config {
    error?: string
}

const Error: React.FC<Config> = ({ error }) => {
    return (
        <div className="form-error">
            {error || ''}
        </div>
    )
}

export default Error
