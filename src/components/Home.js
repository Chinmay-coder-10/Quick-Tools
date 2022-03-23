import React from 'react'
// eslint-disable-next-line
import "./css/home.css"
import Toolscard from './Toolscard'

const Home = (props) => {
    props.setProgress(100)
    return (
        <div className="home">
            <div className="mainDiv">
                <h1 className="heading">Welcome to  <b>Quick Tools</b>  - <small> Latest Online Tools</small></h1>
                <h4 className="desc">Online efficient tools like Weather, Quick Notes, Text Utility</h4>
            </div>

            <Toolscard />
        </div>
    )
}

export default Home;
