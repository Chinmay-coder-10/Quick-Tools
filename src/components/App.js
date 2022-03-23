import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import React, { useState } from 'react'
import Alert from "./Alert"
import Navigation from './Navigation'
import Notes from "./Notes"
import Feedback from "./Feedback"
import Weather from './Weather.js'
import Error from './Error.js'
import Textutility from './Textutility'
import LoadingBar from 'react-top-loading-bar'
import Stopwatch from './Stopwatch.js';
import Clock from './Clock';
import Alarm from './Alarm';
import Home from './Home';
import News from './news';
import Qr from './Qr';

const App = () => {
    const [progress, setProgress] = useState(0)
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    return (
        <>

            <Router>
                <Navigation />
                <Alert alert={alert} />
                <LoadingBar color='#ff0000' progress={progress} height={3} loaderSpeed={1000} />
                <Switch>
                    <Route path="/" exact><Home setProgress={setProgress} /></Route>
                    <Route exact path="/Quick-notes"><Notes showAlert={showAlert} setProgress={setProgress} /></Route>
                    <Route exact path="/feedback" ><Feedback setProgress={setProgress} /></Route>
                    <Route exact path="/weather" ><Weather setProgress={setProgress} /></Route>
                    <Route exact path="/textutility"><Textutility showAlert={showAlert} /></Route>
                    <Route exact path="/clock"><Clock /></Route>
                    <Route exact path="/clock/alarm"><Alarm /></Route>
                    <Route exact path="/clock/stopWatch" component={Stopwatch}></Route>
                    <Route exact path="/qr" component={Qr}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
