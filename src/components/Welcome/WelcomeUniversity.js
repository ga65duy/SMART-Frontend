"use strict";

import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import "./WelcomeUniversity.css";
import BackgroundImage from "../../Background.jpg";
import {Footer} from '../Footer';
import Dialog from "@material-ui/core/Dialog";
import UserLoginView from "../../views/ProfileViews/UserLoginView";
import UserSignupView from "../../views/ProfileViews/UserSignupView";

/**
 * WelcomeUniversity
 * Page showing to Users clicked on "for universities" from Welcome
 * Author: Susanne
 */

export class WelcomeUniversity extends React.Component {
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
            case "student":
                location.href ="/#/";
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
                        <section className="welcome-uni-topnav">
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs />
                                <Grid item xs={8}>
                                    <div className="welcome-uni-topnav-content">
                                        <br />
                                        <img href="/" src={require('../../Smart.jpg')}/>
                                        <div className="uni-right-buttons">
                                            <Button id="student" onClick={this.buttonClicked}>
                                                <img href="/"
                                                     src={require('./student.png')}
                                                     width={15}
                                                     height={15}
                                                     mode="fit"
                                                /> &nbsp;
                                                For Students
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
                            className="welcome-uni-main"
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
                                    <div className="welcome-uni-main-content">
                                        <h1 style={{textAlign: 'center'}}>
                                            SMART for Universities
                                        </h1>
                                    </div>
                                </Grid>
                                <Grid item xs />
                            </Grid>
                        </section>
                    </Grid>
                    <Grid item>
                        <div className="welcome-uni-text">
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="center"
                            >
                                <Grid item xs />
                                <Grid item xs={10}>
                                    <Paper>
                                        <div className="welcome-uni-text-content">
                                            <Grid
                                                container
                                                direction="column"
                                                justify="space-evenly"
                                                alignItems="center"
                                            >
                                                {/*Überschrift*/}
                                                <Grid item>
                                                    <br/>
                                                    <h2 style={{color:'black'}}> SHORT AND SWEET: </h2>
                                                </Grid>
                                                <br/>
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
                                                                <h2>EASY</h2>
                                                            </Grid>
                                                            {/*Item erklärung*/}
                                                            <Grid item>
                                                                <h4 style={{textAlign: 'center'}}>
                                                                    Help your students find courses easily.<br/>
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
                                                                     src={require('./counsel.png')}
                                                                     width={100}
                                                                     height={100}
                                                                     mode="fit"/>
                                                            </Grid>
                                                            {/*Item Überschrift*/}
                                                            <Grid item>
                                                                <h2>COUNSEL</h2>
                                                            </Grid>
                                                            {/*Item erklärung*/}
                                                            <Grid item>
                                                                <h4 style={{textAlign: 'center'}}>
                                                                    Give your counsellors a clear platform.<br/>
                                                                    SMART simplifies their work to give students better support!
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
                                                                     src={require('./statistics.png')}
                                                                     width={100}
                                                                     height={100}
                                                                     mode="fit"/>
                                                            </Grid>
                                                            {/*Item Überschrift*/}
                                                            <Grid item>
                                                                <h2>STATISTICS</h2>
                                                            </Grid>
                                                            {/*Item erklärung*/}
                                                            <Grid item>
                                                                <h4 style={{textAlign: 'center'}}>
                                                                    Get predictions on student count for upcoming semester.<br/>
                                                                    Receive student feedback on lecturer, content and exam!
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
