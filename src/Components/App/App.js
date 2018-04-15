import React, { Component } from 'react';

// components
import Greeting from '../Greeting/Greeting';
import ProjectTray from '../ProjectTray/ProjectTray';

class App extends Component {
    render() {
        return (
            <div>
                <Greeting />
                <ProjectTray />
            </div>
        );
    }
}

export default App;
