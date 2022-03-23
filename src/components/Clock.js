import React, {useState} from 'react'
import "./css/Clock.css"
import { Link } from 'react-router-dom'
const Clock = () => {

    const currTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currTime)
    const updateTime = ()=>{
        const time = new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(() => {
        updateTime();
    }, 1000);
    return (
        <>
            <h4 style={{ fontSize: "36px" }} className="text-center mt-3">Current Time <small style={{fontSize: '27px'}}>(in 24 hour format)</small></h4>
            <div className="clock">
                {/* <h3>Current Time</h3> */}
                <h1 className="m-2">{time}</h1>
            </div>
            <div className="mx-3">
                <div style={{ marginLeft: "28px" }} className="row clockItems notes">
                    <div style={{ width: "297px", borderRadius: '15px', boxShadow: "rgb(123 123 123 / 36%) -1px 7px 18px 12px", height: "225px", cursor: 'pointer', overflowY: 'hidden' }} className="noteCard my-2 mx-2 card">
                        <div className="card-body">
                            <div className="icon">
                            <i class="fas fa-bell"></i>
                            </div>
                            <h3 className="card-title">Alarm</h3>
                            <h5 style={{ padding: "5px", }} className="card-text">A alarm clock through which you can set alarm </h5>
                            <Link className="btn btn-danger" to="/clock/alarm">Set an Alarm</Link>
                        </div>
                    </div>
                    <div style={{ width: "297px", borderRadius: '15px', boxShadow: "rgb(123 123 123 / 36%) -1px 7px 18px 12px", height: "225px", cursor: 'pointer', overflowY: 'hidden' }} className="noteCard my-2 mx-2 card">
                        <div className="card-body">
                            <div className="icon">
                                <i className="fas fa-stopwatch"></i>
                            </div>
                            <h3 className="card-title">Stopwatch</h3>
                            <h5 style={{ padding: "5px", }} className="card-text">A simple stopwatch to measure the time</h5>
                            <Link className="btn btn-danger mb-4" to="/clock/stopwatch">Set Stopwatch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clock
