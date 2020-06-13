import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './landing.scss';

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div className='landing__name'>Hey! I'm Brij....</div>
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
                </div>
            </div>
        );
    }
}

export default withRouter(Landing);
