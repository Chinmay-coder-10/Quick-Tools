import React, { useState } from 'react'
import Alarmbell from "../audio/music.mp3"
import Alarmmodal from './Alarmmodal';
import "./css/Alarm.css"

const Alarm = () => {
    const [alarmModal, setalarmModal] = useState(false);
    const [alarmTitle, setalarmTitle] = useState("");
    const audio = new Audio();
    audio.src = Alarmbell;
    const ringBell = () => {
        audio.play();
    }
    const showModal = () => {
        setalarmModal(true)
    }
    const setAlarm = (e) => {
        e.preventDefault();
        const alarm = document.getElementById('alarm');
        const alarmDate = new Date(alarm.value);
        const now = new Date();
        let timeToAlarm = alarmDate - now;
        console.log(timeToAlarm);
        if (timeToAlarm >= 0) {
            setTimeout(() => {
                ringBell();
                showModal();
            }, timeToAlarm);
        }
    }
    const alarm = document.getElementById('alarm');
    return (

        <>
            <div style={{ display: 'flex', justifyContent: 'center' }} className="container my-4">
                {alarmModal ?
                    <>
                        <Alarmmodal alarmTitle={alarmTitle} alarmdateime={alarm.value}>
                        </Alarmmodal>
                    </>
                    : ""}
            </div>
            <div className="container my-5">
                <form>
                    <input value={alarmTitle} onChange={(e) => setalarmTitle(e.target.value)} type="text" className="form-control my-3" placeholder="Type alarm Title" />
                    <div className="form-group">
                        <input autoComplete="off" type="datetime-local" className="form-control my-3" id="alarm" name="alarm"
                            placeholder="Enter the time in yyyy-mm-dd hh:mm:ss" />
                    </div>
                    <button onClick={setAlarm} id="alarmSubmit" type="submit" className="btn btn-danger">Set Alarm</button>
                </form>
            </div>
        </>
    )
}

export default Alarm
