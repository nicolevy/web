import React, { Component } from 'react';

// styles
import './Greeting.css';

// images
import scrollPrompt from './images/more.png';

class Greeting extends Component {
    render() {
        return(
            <div className="greeting-page">
                <div className="greeting-spacer"></div>
                <div className="text-container">
                    <p className="first fade-in">Hello!</p>
                    <p className="second fade-in">I'm Nicole Levy</p>
                    <p className="third fade-in">
                        a full stack developer from Ontario, Canada.
                        I spend a lot of my time monkeying around with reactjs, php, and python.
                    </p>
                    <p className="third fade-in">You can find a few of my projects below.</p>
                    <p className="third fade-in">
                        You can also <a href="https://twitter.com/wherestheguac"> find me on twitter </a>
                        or <a href="https://github.com/nicolevy">check out what code I'm writing</a>.
                    </p>
                </div>
                <img className="scroll-prompt" src={scrollPrompt} alt="" />
            </div>
        )
    }
}

export default Greeting;
