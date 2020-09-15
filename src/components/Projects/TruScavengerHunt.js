import React, { Component } from "react";
import ScreenShot from "../../img/Screenshot_2016-03-11-23-15-421-576x1024-169x300.png";

class TruScavengerHunt extends Component {
    render() {
        return (
            <div>
                <h2>Android Scavenger Hunt GPS Game</h2>
                <p>
                    A scavenger hunt game which is like a really small scale Pokemon GO except with only 3 eggs that look the same. Basically instead of spawning them randomly everywhere in the world, the app uses the users last known location and spawns three eggs within a 50 meter radius of the user. To “catch” the eggs the user just needs to walk towards it to grab it. Once the three eggs are captured, the user wins.
                </p>

                <img src={ScreenShot} alt="An egg being found in the game"/>

                <p>
                    The app uses API 21 and Google Maps. At first the eggs were hard coded into the game so that they were around TRU campus. After thinking about it for awhile. I decided just to have them spawn near the users instead, that way it can be played anywhere. There is a downside to this however, because of the fact that its random, the eggs may spawn on roads, or near dangerous areas. For that reason I strongly advise playing with a big open area, or just use a GPS location spoofer.
                </p>
            </div>
        );
    }
}

export default TruScavengerHunt;