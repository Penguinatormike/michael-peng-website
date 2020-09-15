import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Samples from "./Samples";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className={'container'}>
                    <h1>Michael Peng</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/samples">Misc.</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/samples" component={Samples}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;