import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './experience.scss';

class Experience extends Component {
    render() {
        return (
            <div className="experience--wrapper">
                <div className="experience">
                    <div className="experience__heading">EXPERIENCE</div>
                </div>
            </div>
        )
    }
}

export default withRouter(Experience);