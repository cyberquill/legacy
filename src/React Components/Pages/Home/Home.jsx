import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './home.scss';
import Landing from '../../Layout/Landing/Landing';
import MainLoader from '../../Layout/MainLoader/MainLoader';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: false,
            showPage: false,
        };
    }

    componentDidMount() {
        /* setTimeout(() => {
            this.setState({ showLoader: false, showPage: true });
        }, 5000); */

        this.setState({ showLoader: true });
        // this.setState({ showLoader: false, showPage: true });
    }

    render() {
        return (
            <>
                <TransitionGroup component={null}>
                    {this.state.showLoader && (
                        <CSSTransition
                            in={this.state.showLoader}
                            classNames='mainloader'
                            timeout={3000}>
                            <MainLoader />
                        </CSSTransition>
                    )}
                </TransitionGroup>
                <TransitionGroup component={null}>
                    {this.state.showPage && (
                        <CSSTransition in={this.state.showPage} classNames='home' timeout={5000}>
                            <div className='home'>
                                <Landing />
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </>
        );
    }
}

export default withRouter(Home);
