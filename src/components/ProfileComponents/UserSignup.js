"use strict";

import React from 'react';

import {withStyles} from "@material-ui/core/styles";

import {Button, Paper, Grid} from "@material-ui/core";
import Page from '../Page';
import {withRouter} from "react-router-dom";
import UserInput from "./UserInput";
import UniversityUserInput from "./UniversityUserInput";

/**
 *User SignUp
 * A university user (after authorization, with a special key after paying) and a student can register.
 * Author: Maria
 */
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

class UserSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allValidationsSuccessful: true,
            sthTyped: false,
            user: {
                username: '',
                email: '',
                password: '',
                university: '',
                faculty: '',
                chair: '',
                authorization: '',
                isUniversityUser: false,
                courses: []
            },
            validations: {
                usernameValid: false,
                emailValid: false,
                passwordValid: false,
                uniValid: false,
                facValid: false,
                chairValid: false,
                authorizationValid: false,
                coursesValid: false
            }
        };

        this.showRegisterButton = this.showRegisterButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    showRegisterButton() {
        var validateUni = [
            this.state.validations.usernameValid,
            this.state.validations.emailValid,
            this.state.validations.passwordValid,
            this.state.validations.uniValid,
            this.state.validations.facValid,
            this.state.validations.chairValid,
            this.state.validations.authorizationValid,
            this.state.validations.coursesValid
        ];

        var validateStudent = [
            this.state.validations.usernameValid,
            this.state.validations.emailValid,
            this.state.validations.passwordValid
        ];

        if (this.state.user.isUniversityUser) {
            this.setState({
                allValidationsSuccessful: !(validateUni.every(item => item)),
                sthTyped: true
            })
        } else {
            this.setState({
                allValidationsSuccessful: !(validateStudent.every(item => item)),
                sthTyped: true
            })
        }
    }

    handleSubmit() {
        this.props.onSubmit(this.state.user)
    }

    handleCancel() {
        this.setState({
            user: {
                username: '',
                email: '',
                password: '',
                university: '',
                faculty: '',
                chair: '',
                authorization: '',
                isUniversityUser: false,
                courses: []
            },
            validations: {
                usernameValid: false,
                emailValid: false,
                passwordValid: false,
                uniValid: false,
                facValid: false,
                chairValid: false,
                authorizationValid: false,
                coursesValid: false
            },
            sthTyped: false
        })
    }

    render() {
        const {classes} = this.props;
        let universityUser = <UniversityUserInput user={this.state.user}
                                                  profile={false}
                                                  universities={this.props.universities}
                                                  onUpdate={this.showRegisterButton}
                                                  validations={this.state.validations}/>
        return (
            <Paper className={classes.paper}>
                <Grid container direction="column" alignContent="center">
                    <UserInput user={this.state.user}
                               onUpdate={this.showRegisterButton}
                               validations={this.state.validations}
                               error={this.props.error}
                    />
                    {this.state.user.isUniversityUser ? universityUser : null}
                    <Grid item>
                        <Button id="submit" type="submit" variant="contained" color="primary"
                                className={classes.button}
                                disabled={this.state.allValidationsSuccessful}
                                onClick={this.handleSubmit}>
                            Register
                        </Button>
                        <Button id="reset"
                                type="reset"
                                variant="contained"
                                onClick={this.handleCancel}
                                disabled={!this.state.sthTyped}>
                            Dismiss
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
};

export default withRouter(withStyles(styles)(UserSignup));