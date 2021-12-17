import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>HELLO WORLD</h2>
                <p>
                    I am currently a Software Engineer. I have graduated from Thompson Rivers University studying in their computer science program. If you would like to know more about me, please refer to my resume or you may contact me by email.

                    <br/>
                    <br/>
                    Email: <a href="mailto:mail@pengmichael.com">mail@pengmichael.com</a>

                    <br/>
                    Resume: <a href={"https://pengmichaelresume.s3.us-west-2.amazonaws.com/MichaelPengResume.pdf"} target={"_blank"}>MichaelPengResume</a>
                </p>
            </div>
        );
    }
}

export default Home;