import React from 'react'

function WithListLoading(Component) {
    return function WithListLoading({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />
        return (
            <p style={{ textAlign: 'center', fontSize: '1.2em' }}>Server is firing up to Fetch Projects</p>
        )
    }
}

export default WithListLoading