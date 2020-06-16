import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './landing.scss';
import planet from '../../../assets/landing_planet.png';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    scrollHandler() {
        const text = document.querySelector('.landing');
        const planet_wrapper = document.querySelector('.landing--planet');
        const planet = document.querySelector('.landing--planet--img');
        const scrollPos = window.pageYOffset;
        const scrollHt = window.innerHeight;
        
        const dec_dim = (scrollHt - scrollPos) / scrollHt;
        const inc_dim = (scrollHt + scrollPos) / scrollHt;
        text.style.transform = `translateY(${scrollPos*0.75}px) scale(${dec_dim})`;
        planet_wrapper.style.height = `${inc_dim*(scrollHt*1.5/2)}px`;
        planet_wrapper.style.transform = `scale(${dec_dim*0.75})`;
        planet_wrapper.style.bottom = `-2rem`;
        
        if(scrollPos<150) {
            planet_wrapper.style.height = `${scrollHt * 0.5 * inc_dim}px`;
            planet_wrapper.style.transform = `scale(${dec_dim * 0.9})`;
        }
    }

    render() {
        return (
            <div className='landing--wrapper'>
                <div className='landing--planet'>
                    <img src={planet} alt='' className='landing--planet--img' />
                </div>
                <div className='landing'>
                    {/* <div className='landing__primary'>Hey! It's me, Brij....</div> */}
                    <div className='landing__primary'>Brijgopal Bharadwaj</div>
                    <div className='landing__typer'>
                        <div className='landing__typer--line1'>
                            A passionate web developer, who loves
                        </div>
                        <div className='landing__typer--line2'>
                            deep-diving in the concepts of data-science,
                        </div>
                        <div className='landing__typer--line3'>
                            and knows his way around the realm of IoT...
                        </div>
                    </div>
                    <div className='landing__btn-grp'>
                        <div className='landing__btn'>Get in Touch!</div>
                        <div className='landing__btn'>Download Resume</div>
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