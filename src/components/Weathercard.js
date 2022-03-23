import React from 'react'
import humidityimg from '../images/humidityimg.png';
import pressureimg from '../images/pressureimg.png';
import moreinfoimg from '../images/moreinfoimg.png';

const Weathercard = (props) => {
    return (
        <>
            <div style={{ position: "relative", top: "-40px" }} className="temp">
                <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '60px', marginTop: "20px" }}>{props.temp} &deg; C</h1>
                <h4 style={{ display: 'flex', justifyContent: 'center' }}>{props.name}, {props.country}</h4>
                <h3 style={{ display: 'flex', justifyContent: 'center' }}>{props.weatherMood}</h3>
                <hr style={{ color: 'blue' }} />
            </div>
            <div style={{marginTop: "-39px"}} className="more-info d-flex">
                <h3 className="mx-4">More info</h3>
                <img style={{
                    margin: " 0px", marginLeft: "-17px", height: "6vh"
                }} src={moreinfoimg} alt="More info" />
            </div>

            <div className="extra-temp">
                <div className="temp-info-minmax">


                    <div className="two-sided-section">
                        <div className="img">
                            <img className="humidityimage" src={humidityimg} alt="" />
                        </div>
                        <p className="extra-info-leftside">
                            <b>{props.humidity}</b>  <br />
                Humidity
              </p>
                    </div>
                </div>
                <hr style={{ color: 'blue' }} />
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <div className="img">
                            <img style={{ marginTop: "-35px" }} className="humidityimage" src={pressureimg} alt="" />
                        </div>
                        <p className="extra-info-leftside">
                            <b>{props.pressure}</b> <br />
                            Pressure
              </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Weathercard;
