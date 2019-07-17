"use strict";

import React from 'react';
import Login from '../../components/ProfileComponents/Login'
import UserService from '../../services/UserService';
import {withRouter} from "react-router-dom";

/**
 * UserLoginView
 * Shows the login fields to log into the account
 * Author: Maria
 */

class UserLoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.login = this.login.bind(this)
    }

    login(user) {
        UserService.login(user.username, user.password).then(() => {
            UserService.getLoggedInUserInfo().then((user) => {
                if (user.isUniversityUser){
                    this.props.history.push('/profile');
                } else {
                    this.props.history.push('/profile/studyplans')
                }
            }).catch((e) => {
                console.error(e);
                this.setState({
                    error: e
                });
            });
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
    }

    render() {
        return (
            <Login onSubmit={this.login} error={this.state.error}/>
        )
    }
}

export default withRouter(UserLoginView)