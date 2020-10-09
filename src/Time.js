import React from 'react'

const currTime = new Date().toLocaleTimeString();

function Time() {
    return (
        <div>
            <div className="time"> {currTime} </div>
        </div>
    )
}

export default Time;
