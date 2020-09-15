import React, { Component } from "react";
import IotAutoFridgeLogger from "./Projects/IotAutoFridgeLogger";
import MvcWebsite from "./Projects/MvcWebsite";
import TruScavengerHunt from "./Projects/TruScavengerHunt";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandedIot: false,
            expandedMvc: false,
            expandedTru: false,
            order: []
        }
    }

    appendRemoveFromOrder(expandedState, key) {
        if (expandedState) {
            this.setState({order: this.state.order.filter(function(order) {
                return order !== key
            })});
        } else {
            this.setState({ order: [key, ...this.state.order] });
        }
    }

    toggleExpandedIot() {
        this.appendRemoveFromOrder(this.state.expandedIot, 'iot');
        this.setState({ expandedIot: !this.state.expandedIot });
    }

    toggleExpandedMvc() {
        this.appendRemoveFromOrder(this.state.expandedMvc, 'mvc');
        this.setState({ expandedMvc: !this.state.expandedMvc });
    }

    toggleExpandedTru() {
        this.appendRemoveFromOrder(this.state.expandedTru, 'tru');
        this.setState({ expandedTru: !this.state.expandedTru });
    }

    static showArrow(hideValue) {
        return hideValue ? <span>&#8595;</span> : <span>&#8594;</span>
    }

    render() {
        const PROJECT_MAP = {
            iot: this.state.expandedIot && <IotAutoFridgeLogger/>,
            mvc: this.state.expandedMvc && <MvcWebsite/>,
            tru: this.state.expandedTru && <TruScavengerHunt/>
        };

        return (
            <div>
                <h1>Projects</h1>
                <ul className={'list'}>
                    <li><a href={"#/projects"} onClick={() => this.toggleExpandedIot()}>
                        {Projects.showArrow(this.state.expandedIot)} IOT Automatic Fridge Logger
                    </a></li>
                    <li><a href={"#/projects"} onClick={() => this.toggleExpandedMvc()}>
                        {Projects.showArrow(this.state.expandedMvc)} MVC Website
                    </a></li>
                    <li><a href={"#/projects"} onClick={() => this.toggleExpandedTru()}>
                        {Projects.showArrow(this.state.expandedTru)} Scavenger Hunt
                    </a></li>

                </ul>

                {
                    this.state.order.map(function(item, i){
                        return <div key={i}>{PROJECT_MAP[item]}</div>
                    })
                }

            </div>
        );
    }
}

export default Projects;