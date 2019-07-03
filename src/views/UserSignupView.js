"use strict";

import React from 'react';

import UserSignup from '../components/UserSignup';

import UserService from '../services/UserService';

/**
 * UserSignUpView
 *
 * Author: Maria
 */
export class UserSignupView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
        this.registerUser = this.registerUser.bind(this)
    }

    registerUser(user) {
        console.log("View");
        console.log(user);
        let new_user = {};
        if (user.isUniversityUser) {
            new_user = {
                username: user.username,
                email: user.email,
                password: user.password,
                isUniversityUser: user.isUniversityUser,
                university: user.uni,
                faculty: user.faculty,
                chair: user.chair,
                authorization: user.authorization
            }
        } else {
            new_user = {
                username: user.username,
                email: user.email,
                password: user.password,
                isUniversityUser: user.isUniversityUser,
            }
        }

        UserService.register(new_user, user.isUniversityUser).then((data) => {
            if (user.isUniversityUser) {
                //TODO: go to courses of uni
                this.props.history.push('/profile')
            } else {
                this.props.history.push('/profile/studyplans')
            }
        }).catch((e) => {
            console.error(e);
            this.setState({error: true})
        });
    };


    render() {
        return (
            <UserSignup onSubmit={this.registerUser} error={this.state.error}/>
        );
    }
}