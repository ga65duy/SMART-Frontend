"use strict";

import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import "./Welcome.css";
import BackgroundImage from "../../Background.jpg";
import {Footer} from '../Footer';
import UserLoginView from "../../views/ProfileViews/UserLoginView";
import Dialog from "@material-ui/core/Dialog";
import UserSignupView from "../../views/ProfileViews/UserSignupView";

/**
 * Welcome
 * Initial page showing to every user, when visiting SMART
 * Author: Susanne: Creating and visualizing welcome page
 *         Maria: Button functionalities
 */

export class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            showSignup: false
        };

        this.buttonClicked = this.buttonClicked.bind(this);
        this.handleCloseSignup = this.handleCloseSignup.bind(this);
        this.handleCloseLogin = this.handleCloseLogin.bind(this);

    }

    buttonClicked(e) {
        console.log("clicked");
        const name = e.currentTarget.id;
        switch (name) {
            case "signup":
                this.setState({
                    showSignup: true
                });
                break;
            case "login":
                this.setState({
                    showLogin: true
                });
                break;
            case "uni":
                location.href ="/#/welcomeUniversities";
                break;
            default:
                console.log("Error")
        }
    }

    handleCloseLogin() {
        this.setState({
            showLogin: false
        });

    }

    handleCloseSignup() {
        this.setState({
            showSignup: false
        });
    }

    render() {
        const { classes } = this.props;

        /* if (this.state.loading) {
                return (<h2>Loading...</h2>);
            }*/

        let loginModal = <Dialog open={this.state.showLogin} onClose={this.handleCloseLogin} id={"login"}>
                            <UserLoginView />
                        </Dialog>;
        let signupModal = <Dialog open={this.state.showSignup} onClose={this.handleCloseSignup} id={"signup"}>
                                <UserSignupView />
                        </Dialog>;
        return (
            <div>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <section className="welcome-topnav">
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs />
                                <Grid item xs={8}>
                                    <div className="welcome-topnav-content">
                                        <br />
                                        <img href="/" src={require('../../Smart.jpg')}/>
                                        <div className="right-buttons">
                                            <Button id="uni" onClick={this.buttonClicked}>
                                                <img href="/"
                                                     src={require('./work.png')}
                                                     width={15}
                                                     height={15}
                                                     mode="fit"
                                                /> &nbsp;
                                                    For Universities
                                            </Button>
                                            &nbsp;
                                            &nbsp;
                                            <Button id="login" variant="contained" color="primary" onClick={this.buttonClicked}>
                                                Log In
                                            </Button>
                                            {loginModal}
                                            &nbsp;
                                            <Button id="signup" variant="contained" color="primary" onClick={this.buttonClicked}>
                                                Register
                                            </Button>
                                            {signupModal}
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs />
                            </Grid>
                        </section>
                    </Grid>
                    <Grid item>
                        <section
                            className="welcome-main"
                            style={{ backgroundImage: BackgroundImage }}
                            style={{ backgroundImage: "url(" + BackgroundImage + ")" }}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs />
                                <Grid item xs={8}>
                                    <div className="welcome-main-content">
                                        <h1>Welcome to SMART</h1>
                                        <h2>
                                            SMART is the online Studyplan Management And Rating Tool
                                        </h2>
                                        <p>
                                            You can easily plan your entire Study for each individual
                                            Semester in this WebApp! <br/>
                                            No need to check multiple Websites,
                                            we have got you covered! <br/>
                                            Don't forget to SignIn to save,
                                            edit and export your Studyplan and also to get Registration
                                            Notifications!
                                        </p>

                                        <Button id="signup" variant="contained" color="primary" onClick={this.buttonClicked}>
                                            Start your Studyplan
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs />
                            </Grid>
                        </section>
                    </Grid>
                    <Grid item>
                        <div className="welcome-text">
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="center"
                            >
                                <Grid item xs />
                                <Grid item xs={10}>
                                    <Paper>
                                        <div className="welcome-text-content">
                                            {/*3 Spalten  */}
                                            <Grid
                                                container
                                                direction="column"
                                                justify="space-evenly"
                                                alignItems="center"
                                            >
                                                {/*Überschrift*/}
                                                <Grid item>
                                                    <br/>
                                                    <h1 style={{color:'black'}}> What is SMART? </h1>
                                                </Grid>
                                                <br/>
                                                <br/>
                                                {/*Grid 1. Zeile mit 3 Items*/}
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="space-evenly"
                                                    alignItems="center"
                                                >
                                                    {/*Grid 1. Item*/}
                                                    <Grid item xs>
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            {/*Item Bild*/}
                                                            <Grid item>
                                                                <img href="/"
                                                                     src={require('./lupe.png')}
                                                                     width={100}
                                                                     height={100}
                                                                     mode="fit"/>
                                                            </Grid>
                                                            {/*Item Überschrift*/}
                                                            <Grid item>
                                                                <h2>EASY TO USE</h2>
                                                            </Grid>
                                                            {/*Item erklärung*/}
                                                            <Grid item>
                                                                <h4 style={{textAlign: 'center'}}>
                                                                    All in one place structure.<br/>
                                                                    No need to check multiple websites!
                                                                </h4>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    {/*Grid 2. Item*/}
                                                    <Grid item xs>
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            {/*Item Bild*/}
                                                            <Grid item>
                                                                <img href="/"
                                                                     src={require('./kalender.png')}
                                                                     width={100}
                                                                     height={100}
                                                                     mode="fit"/>
                                                            </Grid>
                                                            {/*Item Überschrift*/}
                                                            <Grid item>
                                                                <h2>ORGANIZATION</h2>
                                                            </Grid>
                                                            {/*Item erklärung*/}
                                                            <Grid item>
                                                                <h4 style={{textAlign: 'center'}}>
                                                                    You will never miss one deadline! <br/>
                                                                    Get notified for your upcoming courses!
                                                                </h4>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    {/*Grid 3. Item*/}
                                                    <Grid item xs>
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            {/*Item Bild*/}
                                                            <Grid item>
                                                                <img href="/"
                                                                     src={require('./geld.png')}
                                                                     width={100}
                                                                     height={100}
                                                                     mode="fit"/>
                                                            </Grid>
                                                            {/*Item Überschrift*/}
                                                            <Grid item>
                                                                <h2>FREE TO USE</h2>
                                                            </Grid>
                                                            {/*Item erklärung*/}
                                                            <Grid item>
                                                                <h4 style={{textAlign: 'center'}}>
                                                                    SMART will always be free for students! <br/>
                                                                    Now and always!
                                                                </h4>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <br/>
                                                {/*2.Zeile*/}
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justify="space-evenly"
                                                    alignItems="center"
                                                >
                                                    {/*Grid 1. Item*/}
                                                    <Grid item xs>
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            {/*Item Bild*/}
                                                            <Grid item>
                                                                <img href="/"
                                                                     src={require('./wegweiser.png')}
                                                                     width={100}
                                                                     height={100}
                                                                     mode="fit"/>
                                                            </Grid>
                                                            {/*Item Überschrift*/}
                                                            <Grid item>
                                                                <h2>GUIDANCE</h2>
                                                            </Grid>
                                                            {/*Item erklärung*/}
                                                            <Grid item>
                                                                <h4 style={{textAlign: 'center'}}>
                                                                    SMART gives you help in every direction! <br/>
                                                                    Mandatory or elective courses, <br/>
                                                                    make your own individual plan!
                                                                </h4>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    {/*Grid 2. Item*/}
                                                    <Grid item xs>
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            {/*Item Bild*/}
                                                            <Grid item>
                                                                <img href="/"
                                                                     src={require('./feedback.png')}
                                                                     width={100}
                                                                     height={100}
                                                                     mode="fit"/>
                                                            </Grid>
                                                            {/*Item Überschrift*/}
                                                            <Grid item>
                                                                <h2>FEEDBACK</h2>
                                                            </Grid>
                                                            {/*Item erklärung*/}
                                                            <Grid item>
                                                                <h4 style={{textAlign: 'center'}}>
                                                                    Rate your courses!<br/>
                                                                    Get feedback from colleagues!
                                                                </h4>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    {/*Grid 3. Item*/}
                                                    <Grid item xs>
                                                        <Grid
                                                            container
                                                            direction="column"
                                                            justify="center"
                                                            alignItems="center"
                                                        >
                                                            {/*Item Bild*/}
                                                            <Grid item>
                                                                <img href="/"
                                                                     src={require('./register.png')}
                                                                     width={100}
                                                                     height={100}
                                                                     mode="fit"/>
                                                            </Grid>
                                                            {/*Item Überschrift*/}
                                                            <Grid item>
                                                                <h2>Registration</h2>
                                                            </Grid>
                                                            {/*Item erklärung*/}
                                                            <Grid item>
                                                                <h4 style={{textAlign: 'center'}}>
                                                                    Coming soon! <br/>
                                                                    Direct course registration on SMART!
                                                                </h4>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs />
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        );
    }
}
