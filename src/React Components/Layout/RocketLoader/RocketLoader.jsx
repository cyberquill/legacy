import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './rocket_loader.scss';

class RocketLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='loader--container'>
                <div className='rocketloader--wrapper'>
                    <span className='rocketloader'>
                        <span className='rocketloader__rocket'>
                            <svg width='164' height='164'>
                                <circle
                                    className='rocketloader__circle'
                                    cx='78'
                                    cy='82'
                                    r='77'
                                    transform='rotate(-90, 80, 80)'
                                />
                            </svg>
                            <i className='rocketloader__icon'>
                                <svg className='rocketloader__svg'>
                                    <polygon points='21 26.24 15.15 21.04 15.15 6.22 10.51 0 5.86 6.22 5.86 17.46 5.85 21.04 0 26.24 0 36 5.86 30.79 5.86 32.39 10.51 32.39 15.15 32.39 15.15 30.8 21 36 21 26.24' />
                                </svg>
                            </i>
                        </span>
                    </span>
                </div>
                <div className='eisenfoxLoader--wrapper'>
                    <div className='eisenfoxLoader eisenfoxLoader-2'></div>
                </div>
            </div>
        );
    }
}

export default withRouter(RocketLoader);