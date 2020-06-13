import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './React Components/Pages/Home/Home';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/portfolio' component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
