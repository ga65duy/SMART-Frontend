"use strict";

import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./WelcomeUniversity.css";
import BackgroundImage from "../../Background.jpg";
import Header from "../Header";
import {Footer} from '../Footer';
import Dialog from "@material-ui/core/Dialog";
import UserLoginView from "../../views/ProfileViews/UserLoginView";
import UserSignupView from "../../views/ProfileViews/UserSignupView";

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
                                        {/*<Button variant="contained" color="primary">
                                            REGISTER NOW!
                                        </Button>*/}
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
                                                alignItems="flex-start"
                                            >
                                                {/*Überschrift*/}
                                                <Grid item>
                                                    <br/>
                                                    <h2 style={{color:'black'}}> SHORT AND SWEET: </h2>
                                                </Grid>
                                                <br/>
                                                <Grid item>
                                                    <h4 style={{color:'black'}}>
                                                        Join the SMART community. <br/>
                                                        A lot more text is coming here
                                                    </h4>
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
