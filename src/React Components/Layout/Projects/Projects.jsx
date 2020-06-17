import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { projects } from '../../../db/projects.json';
import './projects.scss';

class Projects extends Component {
    render() {
        const project_cards = projects.map((project, index) => (
            <div className='projects__card' key={`project${index}`}>
                <div className='projects__card__header'>
                    <img
                        src={project.display}
                        alt={project.title}
                        className='projects__card__header--img'
                    />
                    <div className='projects__card__link-grp'>
                        <a
                            href={project.github}
                            target='_blank'
                            className='projects__card__link'
                            rel='noopener noreferrer'>
                            <i className='fa fa-github-square' aria-hidden='true'></i>
                            &emsp;View on GitHub
                        </a>
                        <a
                            href={project.hosted}
                            target='_blank'
                            className='projects__card__link'
                            rel='noopener noreferrer'>
                            <i className='fa fa-desktop' aria-hidden='true'></i>
                            &emsp;View Demo
                        </a>
                    </div>
                </div>
                <div className='projects__card__info'>
                    <div className='projects__card__title'>{project.title}</div>
                    <div className='projects__card__field'>{project.field}</div>
                    <div className='projects__card__tech-grp'>
                        {project.technologies.map((tech, id) => (
                            <div className='projects__card__tech' key={`tech${index}${id}`}>
                                {id ? (<span>&#8226;&emsp;</span>) : null}{tech}&emsp;
                            </div>
                        ))}
                    </div>
                    <div className='projects__card__overview'>{project.overview}</div>
                </div>
            </div>
        ));
        return (
            <div className='projects--wrapper'>
                <div className='projects--planet'></div>
                <div className='projects'>
                    <div className='projects__heading'>Personal Projects</div>
                    <div className='projects__card--wrapper'>{project_cards}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Projects);
