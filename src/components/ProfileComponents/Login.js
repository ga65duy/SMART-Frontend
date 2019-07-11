"use strict";

import React from 'react';

import {withStyles} from "@material-ui/core/styles";
import {withRouter, Link} from 'react-router-dom';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Page from '../Page';
import {Grid, Paper} from "@material-ui/core";
import UserService from "../../services/UserService";
import UserInput from "./UserInput";

/**
 * UserLogin
 *
 * Either the universtiyuser or the student can login with his username and password
 * Author: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
    button: {
        marginRight: theme.spacing(2),
    },
});


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
            },
            validations: {
                usernameValid: false,
                passwordValid: false
            },
            sthTyped: false
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    showLoginButton() {
        return !(this.state.validations.usernameValid & this.state.validations.passwordValid)
    }

    handleUpdate() {
        this.setState({
            sthTyped: true
        })
    }

    handleSubmit() {
        this.props.onSubmit(this.state.user)
    }

    handleCancel() {
        this.setState({
            user: {
                username: '',
                password: ''
            },
            validations: {
                usernameValid: false,
                passwordValid: false
            },
            sthTyped: false
        })
    }

    render() {
        const {classes} = this.props;
        return (

            <Paper className={classes.paper}>
                <UserInput user={this.state.user}
                           login={true}
                           onUpdate={this.handleUpdate}
                           validations={this.state.validations}
                           error={this.props.error}
                />
                <Grid item alignContent="center">
                    <Button id="submit" type="submit" variant="contained" color="primary"
                            className={classes.button}
                            disabled={this.showLoginButton()}
                            onClick={this.handleSubmit}>
                        Login
                    </Button>
                    <Button id="reset"
                            type="reset"
                            variant="contained"
                            onClick={this.handleCancel}
                            disabled={!this.state.sthTyped}
                    >Dismiss</Button>
                </Grid>
                <Link to={'/register'}>Not registered yet?</Link>
            </Paper>

        );
    }
}

export default withRouter(withStyles(styles)(Login));
