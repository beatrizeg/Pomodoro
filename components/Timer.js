import React from "react"

export default function Timer(props) {
    const min = Math.floor(props.timeLeft / 1000 / 60)
    const sec = Math.floor((props.timeLeft / 1000) % 60)
    
    return (
        <div id="timer-element">
            <h2 id="timer-label">{props.session == "session" ? props.session.charAt(0).toUpperCase() + props.session.slice(1) : <i className="fa-solid fa-mug-hot"></i>}</h2>
            <div id="time-left"><audio id="beep" src="https://www.pacdv.com/sounds/interface_sound_effects/sound10.mp3" type="audio/mp3"></audio>
            {min.toString().length === 1 ? "0" + min : min}:{sec.toString().length === 1 ? "0" + sec : sec}</div>
        </div>
    )
}