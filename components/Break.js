import React from "react"

export default function Break(props) {
    return (
        <div id="break-element">
            <div id="break-label">Break Length</div>
            <div id="break-length">{props.breakTime/60} </div>
            <div id="break-arrows">
                <div id="break-increment" onClick={props.addBreak}><i className="fa fa-arrow-up" aria-hidden="true"></i></div>
                <div id="break-decrement" onClick={props.reduceBreak}><i className="fa fa-arrow-down" aria-hidden="true"></i></div>
            </div>
        </div>
    )
}