import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Portfolio from "./portfolio";
import Spotlight from "./spotlight";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/spotlight/:photo" component={Spotlight}/>
                </Switch>
            </Router>
        )
    }
}
