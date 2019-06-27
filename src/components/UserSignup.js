"use strict";

import React from 'react';

import {withStyles} from "@material-ui/core/styles";

import {TextField, Button, Paper, Grid,RadioGroup,FormControlLabel, Radio, IconButton,  InputAdornment, Input} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Page from './Page';
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

class UserSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            isUniversityUser: false,
            showPassword: false,
            usernameValid: false,
            emailValid: false,
            passwordValid: false,
            textUser: 'Username required',
            textEmail:'Email required',
            textPassword:'Password required'
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.registerUser = this.registerUser.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);
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
                    message = field+" required"
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
                    message = "Invalid "+field;
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

    handleChangeUsername(e) {
        console.log(e.target.id);
        const value = e.target.value;
        const field = e.target.id;
        const valid = this.validateInput(value, field);
        this.setState(Object.assign({}, this.state, {username: value, usernameValid: valid[0], textUser: valid[1]}));
    }

    handleChangeEmail(e) {
        const value = e.target.value;
        const field = e.target.id;
        const valid = this.validateInput(value, field);
        this.setState(Object.assign({}, this.state, {email: value, emailValid: valid[0], textEmail: valid[1]}));
    }

    handleChangePassword(e) {
        const value = e.target.value;
        const field = e.target.id;
        const valid = this.validateInput(value, field);
        this.setState(Object.assign({}, this.state, {password: value, passwordValid: valid[0], textPassword: valid[1]}));
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            isUniversityUser: this.state.isUniversityUser,

        };

        this.props.onSubmit(user);
    }

    handleOptionChange () {
        this.setState({isUniversityUser: !this.state.isUniversityUser})

    }

    registerUser(){
        const studentData= {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
            };

        UserService.register(studentData).then((data) => {

        }).catch((e)=> {
            console.error(e)
            this.setState({usernameValid: false, textUser: "User already exists"})
        });

    };

    render() {
        const {classes} = this.props;
        return (
            <Page>
                <Paper className={classes.paper}>
                        <Grid container direction="column">
                            <RadioGroup onChange={this.handleOptionChange} row >
                                <FormControlLabel value="student" control={<Radio color="primary"/>} label="Student User" checked={!this.state.isUniversityUser}/>
                                <FormControlLabel value="uni" control={<Radio color="primary"/>} label="University User" checked={this.state.isUniversityUser}/>
                            </RadioGroup>
                            {/*<label>*/}
                            {/*    <input*/}
                            {/*        type="radio"*/}
                            {/*        value="true"*/}
                            {/*        checked={this.state.isUniversityUser}*/}
                            {/*        onChange={this.handleOptionChange}*/}
                            {/*    />*/}
                            {/*    Univeristy User*/}
                            {/*</label>*/}
                            {/*<label>*/}
                            {/*    <input*/}
                            {/*        type="radio"*/}
                            {/*        value="false"*/}
                            {/*        checked={!this.state.isUniversityUser}*/}
                            {/*        onChange={this.handleOptionChange}*/}
                            {/*    />*/}
                            {/*    Student User*/}
                            {/*</label>*/}
                            <TextField
                                label="Username"
                                id="Username"
                                type="text"
                                required={true}
                                value={this.state.username}
                                onChange={this.handleChangeUsername}
                                helperText={this.state.textUser}
                                variant="standard"
                                error={!this.state.usernameValid}
                                margin="dense"/>
                            <TextField
                                label="E-mail"
                                id="Email"
                                type="email"
                                required={true}
                                value={this.state.email}
                                onChange={this.handleChangeEmail}
                                error={!this.state.emailValid}
                                helperText={this.state.textEmail}
                                variant="standard"
                                margin="dense"/>
                            <TextField
                                error={true}
                                label="Password"
                                id="Password"
                                type= {this.state.showPassword ? 'text' : 'password'}
                                required={true}
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                                error={!this.state.passwordValid}
                                helperText={this.state.textPassword}
                                variant="standard"
                                margin="dense"
                                InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton  onClick={this.handleClickShowPassword}>
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }}
                            />
                            <Grid item alignContent="center">
                                <Button id="submit" type="submit" variant="contained" color = "primary" className={classes.button}
                                        disabled={!(this.state.usernameValid & this.state.emailValid & this.state.passwordValid)}
                                onClick = {this.registerUser}>
                                    Register
                                </Button>
                                <Button id="reset" type="reset" variant="contained" >Dismiss</Button>
                            </Grid>
                        </Grid>
                </Paper>
            </Page>
        );
    }
};
export default withStyles(styles)(UserSignup);