import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './home.scss';
import Landing from '../../Layout/Landing/Landing';
import Experience from '../../Layout/Experience/Experience';
import RocketLoader from '../../Layout/RocketLoader/RocketLoader';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,
            showPage: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showLoader: false, showPage: true });
        }, 5000);
        this.setState({ showLoader: true });
        window.addEventListener('scroll', this.scrollHandler);
    }

    render() {
        return (
            <>
                <div className='home--bg'>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </div>

                <TransitionGroup component={null}>
                    {this.state.showLoader && (
                        <CSSTransition
                            in={this.state.showLoader}
                            classNames='rocketloader'
                            timeout={3000}>
                            <RocketLoader />
                        </CSSTransition>
                    )}
                </TransitionGroup>
                <TransitionGroup component={null}>
                    {this.state.showPage && (
                        <CSSTransition in={this.state.showPage} classNames='home' timeout={5000}>
                            <div className='home'>
                                <Landing />
                                <Experience />
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </>
        );
    }
}

export default withRouter(Home);
