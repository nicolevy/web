import React, { Component } from 'react';

// styles
import './Stopwatch.css';

// images
import stopped from './images/stopped.png';
import started from './images/started.png';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTime: null,
            stopTime: null,
            stoppedFor: 0,
            startClock: null,
            timeString: '00:00.000'
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
        this.clockRunning = this.clockRunning.bind(this);
    }

    componentDidMount() {
        document.title = 'Stopwatch Component';
    }

    start() {
        document.getElementById('stopwatch-image').style.backgroundImage = `url(${started})`;
        let startTime = null;
        let stoppedFor = null;
        let startClock = null;

        if (this.state.startTime === null) {
            startTime = new Date();
        }

        if (this.state.stopTime !== null) {
            stoppedFor = this.state.stoppedFor + (new Date() - this.state.stopTime);
        }

        if (this.state.startClock === null) {
            startClock = setInterval(this.clockRunning, 10);
        }

        const newState = {
            ...this.state,
            startTime: startTime || this.state.startTime,
            stoppedFor: stoppedFor || this.state.stoppedFor,
            startClock: startClock || this.state.startClock,
        };

        this.setState(newState);
    }

    stop() {
        document.getElementById('stopwatch-image').style.backgroundImage = `url(${stopped})`;

        clearInterval(this.state.startClock);

        const newState = {
            ...this.state,
            stopTime: new Date(),
            startClock: null
        };

        this.setState(newState);
    }

    reset() {
        document.getElementById('stopwatch-image').style.backgroundImage = `url(${stopped})`;
        
        clearInterval(this.state.startClock);

        const newState = {
            startTime: null,
            stopTime: null,
            stoppedFor: 0,
            startClock: null,
            timeString: '00:00.000'
        };
        this.setState(newState);
    }

    clockRunning() {
        const now = new Date();
        const time = new Date(now - this.state.startTime - this.state.stoppedFor);
        const min = time.getUTCMinutes(),
            sec = time.getUTCSeconds(),
            ms = time.getUTCMilliseconds();

        const newTimeString =
            (min > 9 ? min : '0' + min) + ':' +
            (sec > 9 ? sec : '0' + sec) + '.' +
            (ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms);
        
        this.setState(
            {
                ...this.state,
                timeString: newTimeString
            }
        )
    }

    render() {
        return (
        <div className="app">
            <div id="stopwatch-image" className="stopwatch-frame">
                <output id="time-display">{this.state.timeString}</output>
            </div>
            <div className="spacer"></div>
            <div>
                <button className="tray-button" onClick={this.start}>Start</button>
                <button className="tray-button" onClick={this.stop}>Stop</button>
                <button className="tray-button" onClick={this.reset}>Reset</button>
            </div>
        </div>
        );
    }
}

export default Stopwatch;
