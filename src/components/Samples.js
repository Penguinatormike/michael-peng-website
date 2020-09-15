import React, { Component } from "react";
import Iframe from 'react-iframe';

class Samples extends Component {
    render() {
        return (
            <div>
                <h2>Miscellaneous Stuff</h2>
                <p>Travelling Salesman Problem:</p>
                <p>
                    Interactive JS code to solve the travelling salesman problem. Learn more about it here: <a href={"https://simple.wikipedia.org/wiki/Travelling_salesman_problem"}>https://simple.wikipedia.org/wiki/Travelling_salesman_problem</a>
                </p>
                <Iframe url="./AI/ArtificialIntelligence.html"
                        width="450px"
                        height="800px"
                        id="myId"
                        className="iframe"
                        display="initial"
                        position="relative"/>

                <p>
                    Android Apps (deprecated):
                </p>
                <p>
                    Calculator:
                </p>
                <p>
                    TIC-TAC-TOE:
                </p>
                <p>
                    POS: System Test:
                </p>
            </div>
        );
    }
}

export default Samples;