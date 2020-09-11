import React, { Component } from "react";
import IotAutoFridgeLogger from "./Projects/IotAutoFridgeLogger";

class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expandedIot: false,
        }
    }

    toggleExpandedIot() {
        this.setState({ expandedIot: !this.state.expandedIot });
    }

    static showArrow(hideValue) {
        return hideValue ? <span>&#8595;</span> : <span>&#8594;</span>
    }

    render() {
        return (
            <div>
                <h1>Projects</h1>
                <ul className={'list'}>
                    <li><a href={"#/projects"} onClick={() => this.toggleExpandedIot()}>
                        {Projects.showArrow(this.state.expandedIot)} IOT Automatic Fridge Logger
                    </a></li>
                </ul>

                <div className={this.state.expandedIot ? '' : 'hidden'}>
                    <IotAutoFridgeLogger/>
                </div>
            </div>
        );
    }
}

export default Projects;