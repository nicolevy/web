import React, { Component } from 'react';

// components
import ProjectCard from '../ProjectCard/ProjectCard';

// styles
import './ProjectTray.css';

class ProjectTray extends Component {
    render() {
        return(
            <div className="project-tray">
                <ProjectCard card={nasaCard} />
                <ProjectCard card={stopwatchCard} />
                <ProjectCard card={webCard} />
            </div>
        )
    }
}

export default ProjectTray;

// Project card definitions
const nasaCard = {
    title: 'NASA Twitter Bot',
    desc: 'A Twitter bot written in php that tweets out daily updates from NASA\'s RSS feed.',
    repo: 'NASA_feed',
    link: 'https://twitter.com/NASA_feed',
};

const stopwatchCard = {
    title: 'Stopwatch Component',
    desc: 'A simple reactjs component that emulates a stopwatch.' +
            'Uses js Date class to calculate milliseconds, seconds, and minutes.',
    repo: 'stopwatch',
    link: '/stopwatch',
};

const webCard = {
    title: 'nicolevy.ca',
    desc: 'Website build with react, css animations, and css grid. Served with npm serve',
    repo: 'web',
};
