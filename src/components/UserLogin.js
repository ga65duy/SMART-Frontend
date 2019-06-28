"use strict";

import React from 'react';

import {withStyles} from "@material-ui/core/styles";
import {withRouter, Link} from 'react-router-dom';

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Page from './Page';
import {Grid, Paper} from "@material-ui/core";
import UserService from "../services/UserService";


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


class UserLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            usernameValid: '',
            passwordValid: '',
            textUser: 'User required',
            textPassword: 'Password required'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    validateInput(value, field) {
        let message = '';
        let fieldValid = false;

        switch (field) {
            case "Username":
            case "Password":
                if (value.length !== 0) {
                    fieldValid = true;
                } else {
                    message = field + " required"
                }
                break;
            default:
                console.log("error")
        }
        return [fieldValid, message]
    }

    handleChange(e) {
        const value = e.target.value;
        const field = e.target.id;
        const valid = this.validateInput(value, field);
        switch (field) {
            case "Username":
                this.setState({username: value, usernameValid: valid[0], textUser: valid[1]});
                break;
            case "Password":
                this.setState({password: value, passwordValid: valid[0], textPassword: valid[1]});
                break;
            default:
                console.log("error")
        }
    }

    showLoginButton() {
        return !(this.state.usernameValid & this.state.passwordValid)
    }

    handleSubmit(event) {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.onSubmit(user);
    }

    loginUser(e) {
        e.preventDefault();

        const username = this.state.username;
        const password = this.state.password;

        UserService.login(username, password).then((data) => {
            const universityUser = UserService.isUniversityUser();
            if (universityUser) {
                //TODO: go to courses of uni
                this.props.history.push('/profile')
            } else {
                this.props.history.push('/profile/studyplans')
            }
            console.log(data)
        }).catch((e) => {
            console.error(e);
            this.setState({
                usernameValid: false,
                textUser: "Username or password are wrong",
                passwordValid: false,
                textPassword: "Username or password are wrong"
            });
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <Page>
                <Paper className={classes.paper}>
                    <Grid container direction="column">
                        <TextField
                            label="Username"
                            id="Username"
                            type="text"
                            required={true}
                            value={this.state.username}
                            onChange={this.handleChange}
                            error={!this.state.usernameValid}
                            helperText={this.state.textUser}
                            variant="standard"
                            margin="dense"/>
                        <TextField
                            label="Password"
                            id="Password"
                            type="text"
                            required={true}
                            value={this.state.password}
                            onChange={this.handleChange}
                            error={!this.state.passwordValid}
                            helperText={this.state.textPassword}
                            variant="standard"
                            margin="dense"/>

                        <Grid item alignContent="center">
                            <Button id="submit" type="submit" variant="contained" color="primary"
                                    className={classes.button}
                                    disabled={this.showLoginButton()}
                                    onClick={this.loginUser}>
                                Login
                            </Button>
                            <Button id="reset" type="reset" variant="contained">Dismiss</Button>
                        </Grid>
                        <Link to={'/register'}>Not registered yet?</Link>
                    </Grid>
                </Paper>
            </Page>
        );
    }
}

export default withRouter(withStyles(styles)(UserLogin));
