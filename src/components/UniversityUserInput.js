"use strict";

import React from 'react';

import {withStyles} from "@material-ui/core/styles";

import {TextField, Button, Paper, Grid, RadioGroup, FormControlLabel, Radio, IconButton, InputAdornment} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Page from './Page';
import UserService from "../services/UserService";
import {withRouter} from "react-router-dom";

/**
 *UniversityUserInput
 * Component for the fields, which are needed for the university user in registration
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

class UniversityUserInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            validations: {
                uniValid: false,
                facValid: false,
                chairValid: false,
                authorizationValid: false
            },
            textUni: "University required",
            textFac: "Faculty required",
            textChair: "Chair required",
            textAuthorization: "Authorization required",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        if (this.props.profile){
            this.setState({
                validations: {
                    uniValid: true,
                    facValid: true,
                    chairValid:true,
                    authorizationValid: true}
            })
        }

        this.setState({
            validations: this.props.validations
        })
    }

    validateInput(value, field) {
        let message = '';
        let fieldValid = false;

        switch (field) {
            case "University":
            case "Faculty":
            case "Chair":
                if (value.length !== 0) {
                    fieldValid = true;
                } else {
                    message = field + " required"
                }
                break;
            case "Authorization":
                //TODO: safe AuthorizationKey in backend
                if (value === "uni42") {
                    fieldValid = true;
                } else {
                    fieldValid = false;
                    message = "Invalid " + field;
                }
            default:
                break;
        }
        return [fieldValid, message]
    }

    handleChange(e) {
        const value = e.target.value;
        const field = e.target.id;
        const valid = this.validateInput(value, field);
        switch (field) {
            case "University":
                this.props.validations.uniValid = valid[0];
                this.props.user.uni = value;
                this.setState({
                    uniValid: valid[0],
                    textUni: valid[1]
                });
                break;
            case "Faculty":
                this.props.validations.facValid = valid[0];
                this.props.user.faculty = value;
                this.setState({
                    facValid: valid[0],
                    textFac: valid[1]});
                break;
            case "Chair":
                this.props.validations.chairValid = valid[0];
                this.props.user.chair = value
                this.setState({
                    chairValid: valid[0],
                    textChair: valid[1]});
                break;
            case "Authorization":
                this.props.validations.authorizationValid = valid[0];
                this.props.user.authorization = value;
                this.setState({
                    authorizationValid: valid[0],
                    textAuthorization: valid[1]});
            default:
                console.log("error")
        }
        this.props.onUpdate()
    }

    render() {
        return (
            <Grid container direction="column">
                <TextField
                    label="University"
                    id="University"
                    type="text"
                    required={true}
                    value={this.props.user.uni}
                    onChange={this.handleChange}
                    helperText={this.state.textUni}
                    variant="standard"
                    error={!this.props.validations.uniValid}
                    margin="dense"/>
                <TextField
                    label="Faculty"
                    id="Faculty"
                    type="text"
                    required={true}
                    value={this.props.user.faculty}
                    onChange={this.handleChange}
                    error={!this.props.validations.facValid}
                    helperText={this.state.textFac}
                    variant="standard"
                    margin="dense"/>
                <TextField
                    label="Chair"
                    id="Chair"
                    type="text"
                    required={true}
                    value={this.props.user.chair}
                    onChange={this.handleChange}
                    helperText={this.state.textChair}
                    error={!this.props.validations.chairValid}
                    variant="standard"
                    margin="dense"/>
                <TextField
                    label="Authorization"
                    id="Authorization"
                    type="text"
                    required={true}
                    value={this.props.user.authorization}
                    onChange={this.handleChange}
                    helperText={this.state.textAuthorization}
                    variant="standard"
                    error={!this.props.validations.authorizationValid}
                    margin="dense"/>
            </Grid>
        );
    };
}

export default withRouter(UniversityUserInput);

