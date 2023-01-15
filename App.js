import React from "react"

import Break from "./components/Break"
import Session from "./components/Session"
import Timer from "./components/Timer"

export default function App() {
    const [isPaused, setIsPaused] = React.useState(true)
    const [session, setSession] = React.useState("session")
    const [breakTime, setBreakTime] = React.useState(5 * 60)
    const [sessionTime, setSessionTime] = React.useState(25 * 60)
    const [timeLeft, setTimeLeft] = React.useState()
    const [timeSpent, setTimeSpent] = React.useState(0);
    
    React.useEffect(() => {
        setTimeLeft(session == "session" ? sessionTime * 1000 : breakTime * 1000)
    }, [sessionTime, breakTime])
    
    React.useEffect(() => {
        let interval = null
        if (!isPaused && timeLeft > 1) {
            setTimeLeft(
                session == "session" ? sessionTime * 1000 - timeSpent : breakTime * 1000 - timeSpent
            );
            
            interval = setInterval(() => {
                setTimeSpent((prevTimeSpent) => prevTimeSpent + 1000);
            }, 1000)
        } else {
            clearInterval(interval);
        }
        if (timeLeft === 0) {
            setTimeSpent(0);
            setSession((prevSession) => (prevSession == "session" ? "break" : "session"));
            setTimeLeft(
                session == "session" ? sessionTime * 1000 : breakTime * 1000
            );
            document.getElementById("beep").play();
        }
        return () => clearInterval(interval);
    }, [isPaused, timeSpent])
    
    function addBreak() {
        setBreakTime(prevBreak => prevBreak >= 60*60 ? prevBreak : prevBreak + 60)
    };

    function reduceBreak() {
        setBreakTime(prevBreak => prevBreak <= 1*60 ? prevBreak : prevBreak - 60)
    };

    function addSession() {
        setSessionTime(prevSession => prevSession >= 60*60 ? prevSession : prevSession + 60)
    };

    function reduceSession() {
        setSessionTime(prevSession => prevSession <= 1*60 ? prevSession : prevSession - 60)
    };

    function pausePlay() {
        setIsPaused(prevState => !prevState)
    }
    
    function reset() {
        setIsPaused(true)
        setBreakTime(5*60)
        setSessionTime(25*60)
        setSession("session")
        setTimeLeft(session == "session" ? sessionTime * 1000 : breakTime * 1000)
        setTimeSpent(0)
        document.getElementById("beep").currentTime = 0;
        document.getElementById("beep").pause();
    }
    
    return (
        <div className="app">
            <Timer 
                timeLeft={timeLeft}
                session={session}
            />
            <div className="buttons"><button id="start_stop" onClick={pausePlay}><i className="fa fa-play" aria-hidden="true"></i>  <i className="fa fa-pause" aria-hidden="true"></i></button>
            <button id="reset" onClick={reset}><i className="fa fa-repeat" aria-hidden="true"></i></button></div>
        <div className="controllers"><Break 
                breakTime={breakTime}
                addBreak={addBreak}
                reduceBreak={reduceBreak}
            />
            <Session 
                sessionTime={sessionTime}
                addSession={addSession}
                reduceSession={reduceSession}
              /></div>
        </div>
        
    )
}