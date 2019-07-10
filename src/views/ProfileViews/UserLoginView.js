"use strict";

import React from 'react';

import UserLogin from '../../components/ProfileComponents/UserLogin';
import Login from '../../components/ProfileComponents/Login'

import UserService from '../../services/UserService';

/**
 * UserLoginView
 *
 * Author: Maria
 */
export class UserLoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.login = this.login.bind(this)
    }


    login(user) {
        UserService.login(user.username, user.password).then((data) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
    }

    render() {
        return(
            <Login onSubmit={this.login} error={this.state.error}> </Login>
        )
        // return (
        //   <UserLogin onSubmit={(user) => this.login(user)} error={this.state.error}/>
        // );
    }
}