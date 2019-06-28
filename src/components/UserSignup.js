"use strict";

import React from 'react';

import {withStyles} from "@material-ui/core/styles";

import {
    TextField,
    Button,
    Paper,
    Grid,
    RadioGroup,
    FormControlLabel,
    Radio,
    IconButton,
    InputAdornment
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Page from './Page';
import UserService from "../services/UserService";
import {withRouter} from "react-router-dom";

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
            uni: '',
            faculty: '',
            chair: '',
            authorization: '',
            isUniversityUser: false,
            showPassword: false,
            usernameValid: false,
            emailValid: false,
            passwordValid: false,
            uniValid: false,
            facValid: false,
            chairValid: false,
            authorizationValid: false,
            textUser: 'Username required',
            textEmail: 'Email required',
            textPassword: 'Password required',
            textUni: "University required",
            textFac: "Faculty required",
            textChair: "Chair required",
            textAuthorization: "Authorization required",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.registerUser = this.registerUser.bind(this);

    }

    validateInput(value, field) {
        let message = '';
        let fieldValid = false;

        switch (field) {
            case "Username":
            case "Password":
            case "University":
            case "Faculty":
            case "Chair":
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
            case "Authorization":
                //TODO: safe AuthorizationKey in backend
                if (value === "xxx") {
                    fieldValid = true;
                } else {
                    fieldValid = false;
                    message = "Invalid " + field;
                }
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
                this.setState({username: value, usernameValid: valid[0], textUser: valid[1]});
                break;
            case "Email":
                this.setState({email: value, emailValid: valid[0], textEmail: valid[1]});
                break;
            case "Password":
                this.setState({password: value, passwordValid: valid[0], textPassword: valid[1]});
                break;
            case "University":
                this.setState({uni: value, uniValid: valid[0], textUni: valid[1]});
                break;
            case "Faculty":
                this.setState({faculty: value, facValid: valid[0], textFac: valid[1]});
                break;
            case "Chair":
                this.setState({chair: value, chairValid: valid[0], textChair: valid[1]});
                break;
            case "Authorization":
                this.setState({authorization: value, authorizationValid: valid[0], textAuthorization: valid[1]})
            default:
                console.log("error")
        }
    }

    handleOptionChange() {
        this.setState({isUniversityUser: !this.state.isUniversityUser})
    }

    showAdditionlFieldsForUni() {
        return (
            <Grid container direction="column">
                <TextField
                    label="University"
                    id="University"
                    type="text"
                    required={true}
                    value={this.state.uni}
                    onChange={this.handleChange}
                    helperText={this.state.textUni}
                    variant="standard"
                    error={!this.state.uniValid}
                    margin="dense"/>
                <TextField
                    label="Faculty"
                    id="Faculty"
                    type="text"
                    required={true}
                    value={this.state.faculty}
                    onChange={this.handleChange}
                    error={!this.state.facValid}
                    helperText={this.state.textFac}
                    variant="standard"
                    margin="dense"/>
                <TextField
                    label="Chair"
                    id="Chair"
                    type="text"
                    required={true}
                    value={this.state.chair}
                    onChange={this.handleChange}
                    helperText={this.state.textChair}
                    error={!this.state.chairValid}
                    variant="standard"
                    margin="dense"/>
                <TextField
                    label="Authorization"
                    id="Authorization"
                    type="text"
                    required={true}
                    value={this.state.authorization}
                    onChange={this.handleChange}
                    helperText={this.state.textAuthorization}
                    variant="standard"
                    error={!this.state.authorizationValid}
                    margin="dense"/>
            </Grid>)
    }

    showRegisterButton() {
        var validateUni = [
            this.state.usernameValid, this.state.emailValid, this.state.passwordValid,
            this.state.uniValid, this.state.facValid, this.state.chairValid, this.state.authorizationValid];
        var validateStudent = [this.state.usernameValid, this.state.emailValid, this.state.passwordValid];
        if (this.state.isUniversityUser) {
            return !(validateUni.every(item => item))
        } else {
            return !(validateStudent.every(item => item))
        }
    }

    registerUser(e) {
        e.preventDefault();

        if (this.state.isUniversityUser) {
            var user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                isUniversityUser: this.state.isUniversityUser,
            };
        } else {
            var user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                isUniversityUser: this.state.isUniversityUser,
                university: this.state.uni,
                faculty: this.state.faculty,
                authorization: this.state.authorization
            };
        }


        UserService.register(user).then((data) => {
            if (this.state.isUniversityUser) {
                //TODO: go to courses of uni
                this.props.history.push('/profile')
            } else {
                this.props.history.push('/profile/studyplans')
            }
        }).catch((e) => {
            console.error(e);
            this.setState({usernameValid: false, textUser: "User already exists"})
        });
    };

    render() {
        const {classes} = this.props;
        const isUni = this.state.isUniversityUser;
        let universityUser;

        if (isUni) {
            universityUser = this.showAdditionlFieldsForUni();
        }
        return (
            <Page>
                <Paper className={classes.paper}>
                    <Grid container direction="column">
                        <RadioGroup onChange={this.handleOptionChange} row>
                            <FormControlLabel value="student" control={<Radio color="primary"/>} label="Student User"
                                              checked={!this.state.isUniversityUser}/>
                            <FormControlLabel value="uni" control={<Radio color="primary"/>} label="University User"
                                              checked={this.state.isUniversityUser}/>
                        </RadioGroup>
                        <TextField
                            label="Username"
                            id="Username"
                            type="text"
                            required={true}
                            value={this.state.username}
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
                            error={!this.state.emailValid}
                            helperText={this.state.textEmail}
                            variant="standard"
                            margin="dense"/>
                        {universityUser}
                        <TextField
                            error={true}
                            label="Password"
                            id="Password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            required={true}
                            value={this.state.password}
                            onChange={this.handleChange}
                            error={!this.state.passwordValid}
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
                            }}
                        />
                        <Grid item alignContent="center">
                            <Button id="submit" type="submit" variant="contained" color="primary"
                                    className={classes.button}
                                    disabled={this.showRegisterButton()}
                                    onClick={this.registerUser}>
                                Register
                            </Button>
                            <Button id="reset" type="reset" variant="contained">Dismiss</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Page>
        );
    }
};
export default withRouter(withStyles(styles)(UserSignup));