import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './about.scss';

class About extends Component {
    render() {
        return (
            <div className='about'>
                Welcome to About
            </div>
        );
    }
}

export default withRouter(About);