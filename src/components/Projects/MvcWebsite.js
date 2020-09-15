import React, { Component } from "react";
import ScreenShot from "../../img/mvc-1-285x300.png";

class MvcWebsite extends Component {
    render() {
        return (
            <div>
                <h2>MVC Website: Memo Storage</h2>
                <p>
                    A website where users can create an account sign in, and create their own memos. From there, they can choose to view their last 10 memos, or search for them. Once signed in, if the user stays idle for 5 minutes, the user will be automatically signed out. If the user has cookies enabled, then they will see their own username on the homescreen.
                </p>

                <img src={ScreenShot} alt="MVC website showing notes"/>

                <p>
                    The memos and user information is stored into two tables in the database. The form also only shows one users posts at a time, so different users should not be able to access other memos. The database is using mysql, and the server side language used was PHP.
                </p>
            </div>
        );
    }
}

export default MvcWebsite;