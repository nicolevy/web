import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// styles
import './ProjectCard.css';

class ProjectCard extends Component {
    render() {
        const repoLink = `https://github.com/nicolevy/${this.props.card.repo}`;
        let actionAnchor;
        this.props.card.link
            ? (this.props.card.link.includes('https://') || this.props.card.link.includes('http://')
                ? actionAnchor = <a href={this.props.card.link}>Check it out in action</a>
                : actionAnchor = <NavLink to={this.props.card.link}>Check it out in action</NavLink>)
            : actionAnchor = '';

        return (
            <div className="project-card">
                <h2>{this.props.card.title}</h2>
                <p>{this.props.card.desc}</p>
                <span className="link-tray">
                    <a href={repoLink}>Github repo</a>
                    {actionAnchor}
                </span>
            </div>
        )
    }
}

export default ProjectCard;
