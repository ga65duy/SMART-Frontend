"use strict";

import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core";


const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        //textAlign: "center",
    },
    button: {
        marginRight: theme.spacing(2),
    },
});

export class Welcome extends React.component {

    render() {
        const {classes} = this.props;

        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <Paper className={classes.paper}>
                <Grid item style={{flexGrow: 1}} xs={8}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item alignContent="center">
                            <h1>Welcome to SMART</h1>
                            <h2>SMART is the online Studyplan Management And Rating Tool</h2>
                            <h3>You can easily plan your entire Study for each individual Semester in this WebApp!
                                No need to check multiple Websites, we have got you covered!
                                Don't forget to SignIn to save, edit and export your Studyplan and also to get Registration Notifications!
                            </h3>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        //onClick={go to sign in page}
                                    >SignIn
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        //onClick={/*go to Studyplan page}
                                    >Start your Studyplan
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

























