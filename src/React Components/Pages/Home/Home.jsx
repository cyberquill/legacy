import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './home.scss';
import Landing from '../../Layout/Landing/Landing';
import Experience from '../../Layout/Experience/Experience';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Landing />
                <Experience />
            </div>
        );
    }
}

export default withRouter(Home);
