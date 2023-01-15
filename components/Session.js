import React from "react"

export default function Session(props) {
    return (
        <div id="session-element">
            <div id="session-label">Session Length</div>
            <div id="session-length">{props.sessionTime / 60}</div>
            <div id="session-arrows">
                <div id="session-increment" onClick={props.addSession}><i className="fa fa-arrow-up" aria-hidden="true"></i></div>
                <div id="session-decrement" onClick={props.reduceSession}><i className="fa fa-arrow-down" aria-hidden="true"></i></div>
            </div>
        </div>
    )
}