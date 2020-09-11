import React, { Component } from "react";
import PiImage from "../../img/pi-1024x576.jpg";
import TempLogs from "../../img/temp-logs.jpg";
import ScreenShot from "../../img/webapp1-1024x653.jpg";

class IotAutoFridgeLogger extends Component {
    render() {
        return (
            <div>
                <h2>Internet of Things: Automatic Fridge Logger</h2>
                <p>
                    One of the problems that we have in the restaurant industry is that we have to manually log the temperature of fridges and freezer with pen and paper. When there are multiple fridges and freezers this task can be quite tedious. We end up with many sheets of paper like this:
                </p>

                <img src={TempLogs} alt="Temperature Logs"/>

                <p>
                    A prototype using a Raspberry pi and a temperature sensor was implemented to log the temperatures in a fridge and put them into a database online.
                </p>

                <img src={PiImage} alt="Raspberry Pi temperature sensors in a fridge"/>

                <p>
                    This project was built to enable automatic logging of temperatures for refrigeration units and to display that information in a web server. The user should be able to easily access any day that has records in it. When the user clicks on a day they should see the temperatures that are safe and dangerous. Temperature that is not up to standards with the the current food safety (i.e. temperature that is greater than 4 degrees or 0 degrees Celsius) will be marked in a red background. For all other temperatures within 0 to 4 degrees it will show up with no background colors. This is to distinguish between safe temperatures and will let them know if there is a certain time period when their fridge is below or above the recommended temperatures.
                </p>

                <img src={ScreenShot} alt="Screenshot of the website"/>

                <p>
                    Youtube video demo(not the best production quality): <a href="https://www.youtube.com/watch?v=50-vFkI0qMg&feature=youtu.be">https://www.youtube.com/watch?v=50-vFkI0qMg&feature=youtu.be</a>
                </p>
            </div>
        );
    }
}

export default IotAutoFridgeLogger;