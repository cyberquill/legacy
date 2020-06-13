import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                Welcome Home
                <Link to='/about'>Go to About</Link>
            </div>
        );
    }
}

export default withRouter(Home);