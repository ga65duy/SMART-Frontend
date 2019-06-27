"use strict";

import React from 'react';
import { Card, Button, TextField } from 'react-md';
import { withRouter } from 'react-router-dom';

import { AlertMessage } from './AlertMessage';
import Page from './Page';


const style = { maxWidth: 500 };


class UserSignup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : '',
            isUniversityUser: true,
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleOptionChange=this.handleOptionChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(value) {
        this.setState(Object.assign({}, this.state, {username: value}));
    }

    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, {password: value}));
    }

    handleSubmit(event) {
        event.preventDefault();


        let user = {
            username: this.state.username,
            password: this.state.password,
            isUniversityUser: this.state.isUniversityUser,
        };

        console.log(user);

        this.props.onSubmit(user);
    }

    handleOptionChange ( event) {
        if(event.target.value==="true")
        {
            this.setState({
                isUniversityUser:true,
            })
        }
        else {
            this.setState({
                isUniversityUser:false,
            })
        }

    }

    render() {
        return (
            <Page>
                <Card style={style} className="md-block-centered">
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Username"
                            id="UsernameField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.username}
                            onChange={this.handleChangeUsername}
                            errorText="Username is required"/>
                        <TextField
                            label="Password"
                            id="PasswordField"
                            type="password"
                            className="md-row"
                            required={true}
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            errorText="Password is required"/>

                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="true"
                                checked={this.state.isUniversityUser}
                                onChange={this.handleOptionChange}

                            />
                            Univeristy User
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="react-tips2"
                                value="false"
                                checked={!this.state.isUniversityUser}
                                onChange={this.handleOptionChange}

                            />
                            Student User
                        </label>




                        <Button id="submit" type="submit"
                                disabled={this.state.username == undefined || this.state.username == '' || this.state.password == undefined || this.state.password == '' ? true : false}
                                raised primary className="md-cell md-cell--2">Register</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
            </Page>
        );
    }
};

export default withRouter(UserSignup);