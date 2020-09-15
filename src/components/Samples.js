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
                    Calculator: <a href={"https://play.google.com/store/apps/details?id=com.peng.t00055798.com.peng.t00055798.com.peng.t00055798.calculator"}>https://play.google.com/store/apps/details?id=com.peng.t00055798.com.peng.t00055798.com.peng.t00055798.calculator</a>
                </p>
                <p>
                    TIC-TAC-TOE: <a href={"https://play.google.com/store/apps/details?id=com.peng.tictactoe_peng"}>https://play.google.com/store/apps/details?id=com.peng.tictactoe_peng</a>
                </p>
                <p>
                    POS: System Test: <a href={"https://play.google.com/store/apps/details?id=com.peng.pos"}>https://play.google.com/store/apps/details?id=com.peng.pos</a>
                </p>
            </div>
        );
    }
}

export default Samples;