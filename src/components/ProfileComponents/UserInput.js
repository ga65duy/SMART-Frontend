"use strict";

import React from 'react';

import {TextField, Button, Paper, Grid, RadioGroup, FormControlLabel, Radio, IconButton, InputAdornment} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {withRouter} from "react-router-dom";

/**
 *User Input
 * Component for the fields for registration, which has the university user and student in common
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

class UserInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            showPasswordField: true,
            showEmailField: true,
            showUserTypeSelection: true,

            validations: {
                usernameValid: false,
                emailValid: false,
                passwordValid: false
            },
            textUser: 'Username required',
            textEmail: 'Email required',
            textPassword: 'Password required',
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);

    }

    componentWillMount() {
        if (this.props.profile) {
            this.setState({
                showPasswordField: false,
                showUserTypeSelection: false,
                textUser: '',
                textEmail: '',
                textPassword: '',
            })
        }

        this.setState({
            validations: this.props.validations
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.error !== this.props.error) {
            if (this.props.error) {
                this.props.validations.usernameValid = false;
                this.setState({
                    validations: {
                        ...this.state.validations,
                        usernameValid: false
                    },
                    textUser: "User already exists"
                });
            }
        }
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
            case "Email":
                const email = value;
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const result = re.test(email.toLowerCase());

                if (result) {
                    fieldValid = true;
                } else {
                    fieldValid = false;
                    message = "Invalid " + field;
                }
                break;
            default:
                break;
        }
        return [fieldValid, message]
    }

    handleClickShowPassword(e) {
        this.setState({showPassword: !this.state.showPassword})
    }

    handleChange(e) {
        const value = e.target.value;
        const field = e.target.id;
        const valid = this.validateInput(value, field);
        switch (field) {
            case "Username":
                this.props.validations.usernameValid = valid[0];
                this.props.user.username = value;
                this.setState({
                    usernameValid: valid[0],
                    textUser: valid[1]
                });
                break;
            case "Email":
                this.props.validations.emailValid = valid[0];
                this.props.user.email = value;
                this.setState({
                    emailValid: valid[0],
                    textEmail: valid[1]
                });
                break;
            case "Password":
                this.props.validations.passwordValid = valid[0];
                this.props.user.password = value;
                this.setState({
                    passwordValid: valid[0],
                    textPassword: valid[1]
                });
                break;
            default:
                console.log("error")
        }

        this.props.onUpdate();
        if (this.props.profile) {
            this.props.resetSaveButton()
        }
    }

    handleOptionChange() {
        this.props.user.isUniversityUser = !this.props.user.isUniversityUser;
        this.props.onUpdate()
    }


    render() {
        let userTypeSelection = <RadioGroup onChange={this.handleOptionChange} row>
                                     <FormControlLabel value="student" control={<Radio color="primary"/>} label="Student User"
                                                        checked={!this.props.user.isUniversityUser}/>
                                     <FormControlLabel value="uni" control={<Radio color="primary"/>} label="University User"
                                        checked={this.props.user.isUniversityUser}/>
                                </RadioGroup>;

        let passwordField = <TextField
                            label="Password"
                            id="Password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            required={true}
                            value={this.props.user.password}
                            onChange={this.handleChange}
                            error={!this.props.validations.passwordValid}
                            helperText={this.state.textPassword}
                            variant="standard"
                            margin="dense"
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton onClick={this.handleClickShowPassword}>
                                            {this.state.showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                            }}/>;

        let emailField = <TextField
            label="E-mail"
            id="Email"
            type="email"
            required={true}
            value={this.props.user.email}
            onChange={this.handleChange}
            error={!this.props.validations.emailValid}
            helperText={this.state.textEmail}
            variant="standard"
            margin="dense"/>;

        return (
                    <Grid container direction="column">
                        {this.state.showUserTypeSelection ? userTypeSelection : null}
                        <TextField
                            label="Username"
                            id="Username"
                            type="text"
                            required={true}
                            value={this.props.user.username}
                            onChange={this.handleChange}
                            helperText={this.state.textUser}
                            variant="standard"
                            error={!this.props.validations.usernameValid}
                            margin="dense"/>
                        {this.state.showEmailField ? emailField : null}
                        {this.state.showPasswordField ? passwordField : null}
                    </Grid>
        );
    }
};

export default withRouter(UserInput);