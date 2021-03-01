import React from 'react'

function ClickEvent() {
    function  click() {
        alert('click')
    }
    return (
        <div>
            <button onClick={click}>Click Me</button>
        </div>
    )
}

export default ClickEvent
