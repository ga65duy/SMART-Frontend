"use strict";

import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./Welcome.css";
import BackgroundImage from "../../Background.jpg";
import Header from "../Header";
import {Footer} from '../Footer';

export class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        /* if (this.state.loading) {
                return (<h2>Loading...</h2>);
            }*/
        return (
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
                                        <Button variant="contained" color="primary">
                                            Sign In
                                        </Button>
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
                                        Semester in this WebApp! No need to check multiple Websites,
                                        we have got you covered! Don't forget to SignIn to save,
                                        edit and export your Studyplan and also to get Registration
                                        Notifications!
                                    </p>

                                    <Button variant="contained" color="primary">
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
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs />
                            <Grid item xs={10}>
                                <Paper>
                                    <div className="welcome-text-content" />
                                </Paper>
                            </Grid>
                            <Grid item xs />
                        </Grid>
                    </div>
                </Grid>
                <Footer />
            </Grid>
        );
    }
}
