import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './React Components/Pages/Home/Home';
import About from './React Components/Pages/About/About';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router basename='/'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </Router>
        );
    }
}

export default App;
