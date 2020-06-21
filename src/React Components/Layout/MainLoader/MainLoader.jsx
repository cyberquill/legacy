import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './mainloader.scss';

class MainLoader extends Component {
    render() {
        return (
            <div className='mainloader'>
                <div className='eisenfoxLoader--wrapper'>
                    <div className='eisenfoxLoader eisenfoxLoader-2'></div>
                </div>
                <div className='mainloader__circle--wrapper'>
                    <div className='mainloader__circle'>
                        <div className='mainloader__centerloader'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MainLoader);