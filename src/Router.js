import React from "react";

import {HashRouter,Route, Switch} from "react-router-dom";
import Home from "./page/Home";
import Second from "./page/Second";

class Router extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/second" component={Second}/>
                </Switch>
            </HashRouter>
        )
    }
}
export default Router;