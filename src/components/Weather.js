import React, { useState, useEffect } from 'react'
import "./css/weather.css"
import Weathercard from './Weathercard'
import Loading from './Loading'

const Weather = (props) => {
    props.setProgress(10)
    const [inputVal, setInputVal] = useState("Latur");
    const [tempInfo, setTempInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const GetWeather = async () => {
        if (inputVal === "") {
            alert("Enter something!!")
            setInputVal("")
        }
        else {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=4b436c0e79898d1bf10b8cd1e7297b02`
                let res = await fetch(url);
                props.setProgress(30)
                const data = await res.json();
                setLoading(true)
                const { cod } = data;
                if (cod === 200) {
                    props.setProgress(30)
                    const { temp, humidity, pressure } = data.main;
                    const Weather = data.weather[0].description.toUpperCase()

                    // console.log(Weather.toUpperCase());
                    const { name } = data;
                    const { country } = data.sys;
                    const { description } = data.weather[0];
                    const weatherMood = description.charAt(0).toUpperCase() + description.slice(1);
                    // console.log(as);
                    const myNewWeatherInfo = {
                        temp,
                        name,
                        cod,
                        country,
                        humidity,
                        pressure,
                        Weather,
                        weatherMood
                    };

                    setTempInfo(myNewWeatherInfo);
                } else {
                    alert("City not found!!")
                }



            } catch (error) {
                alert("Sorry !! Unable to fetch data");
            }

        }
    }
    useEffect(() => {
        GetWeather();
        // eslint-disable-next-line
    }, []);
    props.setProgress(100)
    return (
        <>
            <div className="main">
                <div className="main-div-temp ">
                    <div className="search">
                        <input onChange={(e) => setInputVal(e.target.value)} value={inputVal} placeholder="Enter any city name" className="cityNameinp" type="text" />
                        <button style={{width: "86px", height:"34px",}} type="button" onClick={GetWeather} className="btnSearch">Search</button>
                    </div>
                    {loading ? <Weathercard {...tempInfo} /> : <Loading />}
                </div>
            </div>
        </>
    )
}

export default Weather;
