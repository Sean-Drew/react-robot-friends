import React from 'react'

const Scroll = (props) => {
    return (
        <div style = {{ overflowY: 'scroll', borderTop: '3px solid black', padding: '10px', height: '750px' }}>
            {props.children}
        </div>
    )
}

export default Scroll