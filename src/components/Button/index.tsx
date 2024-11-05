import React from 'react'

class Button extends React.Component {
    render() {
        const backgroundColor = 'red'
        return (
            <button style={{
                backgroundColor,
            }}>Test</button>   
        )
    }
}

export default Button