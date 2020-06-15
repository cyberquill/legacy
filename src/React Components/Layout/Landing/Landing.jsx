import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import './landing.scss';
import planet from '../../../assets/landing_planet.png';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.particle_params = {
            particles: {
                number: {
                    value: 355,
                    density: {
                        enable: true,
                        value_area: 789.1476416322727,
                    },
                },
                color: {
                    value: '#ffffff',
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000',
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                },
                opacity: {
                    value: 0.48927153781200905,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 0.2,
                        opacity_min: 0,
                        sync: false,
                    },
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 0.75,
                    direction: 'top-right',
                    random: false,
                    straight: true,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: 'window',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'bubble',
                    },
                    onclick: {
                        enable: true,
                        mode: 'push',
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 80,
                        size: 2,
                        duration: 2,
                        opacity: 1,
                        speed: 5,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
        };
    }

    render() {
        return (
            <div className='landing--wrapper'>
                <div className='landing--bg'>
                    <div className='landing--bg__particles'>
                        <Particles params={this.particle_params} />
                    </div>
                    <div className='landing--bg__planet'>
                        <img src={planet} alt='' className='landing--bg__planet--img' />
                    </div>
                </div>

                <div className='landing'>
                    <div className='landing__name'>Hey! It's me, Brij....</div>
                    <div className='landing__typer'>
                        <div className='landing__typer--line1'>
                            A passionate web developer, who loves
                        </div>
                        <div className='landing__typer--line2'>
                            deep-diving in the realm of data-science,
                        </div>
                        <div className='landing__typer--line3'>
                            and knows his way around the piano keys... :)
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);


/* <div className='landing__name'>Hey! I'm Brij....</div>
<div className='landing__typer'>
    <div className='landing__typer--line1'>
        A passionate web developer, who loves
    </div>
    <div className='landing__typer--line2'>
        deep-diving in the realm of data-science,
    </div>
    <div className='landing__typer--line3'>
        and knows his way around the piano keys... :)
    </div>
</div>
<div className='landing__btn-grp'>
    <div className='landing__btn'>
        <div className='landing__btn--text'>Contact</div>
    </div>
    <div className='landing__btn'>
        <div className='landing__btn--text'>Resume</div>
    </div>
</div> */