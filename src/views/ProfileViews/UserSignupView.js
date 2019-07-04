"use strict";

import React from 'react';

import UserSignup from '../../components/ProfileComponents/UserSignup';

import UserService from '../../services/UserService';
import UniversityService from "../../services/UniversityService";

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
        };
        this.registerUser = this.registerUser.bind(this)
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        UniversityService.getUniversities().then((universites) => {
            this.setState({
                universities: [...universites],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    registerUser(user) {
        let new_user = {};
        if (user.isUniversityUser) {
            new_user = {
                username: user.username,
                email: user.email,
                password: user.password,
                isUniversityUser: user.isUniversityUser,
                university: user.university,
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
            <UserSignup onSubmit={this.registerUser} universities = {this.state.universities} error={this.state.error}/>
        );
    }
}