import React, { Component } from "react";
import IotAutoFridgeLogger from "./Projects/IotAutoFridgeLogger";
import MvcWebsite from "./Projects/MvcWebsite";
import TruScavengerHunt from "./Projects/TruScavengerHunt";

class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expandedIot: false,
            expandedMvc: false,
            expandedTru: false,
        }
    }

    toggleExpandedIot() {
        this.setState({ expandedIot: !this.state.expandedIot });
    }

    toggleExpandedMvc() {
        this.setState({ expandedMvc: !this.state.expandedMvc });
    }

    toggleExpandedTru() {
        this.setState({ expandedTru: !this.state.expandedTru });
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
                    <div className={this.state.expandedIot ? '' : 'hidden'}>
                        <IotAutoFridgeLogger/>
                    </div>
                    <li><a href={"#/projects"} onClick={() => this.toggleExpandedMvc()}>
                        {Projects.showArrow(this.state.expandedMvc)} MVC Website
                    </a></li>
                    <div className={this.state.expandedMvc ? '' : 'hidden'}>
                        <MvcWebsite/>
                    </div>
                    <li><a href={"#/projects"} onClick={() => this.toggleExpandedTru()}>
                        {Projects.showArrow(this.state.expandedTru)} Scavenger Hunt
                    </a></li>
                    <div className={this.state.expandedTru ? '' : 'hidden'}>
                        <TruScavengerHunt/>
                    </div>
                </ul>




            </div>
        );
    }
}

export default Projects;