"use strict";

import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MediaQuery from 'react-responsive';

import { AlertMessage } from './AlertMessage';
import Page from './Page';


const style = { maxWidth: 500 };


class StudyplanPreQuery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username : '',
            password : ''
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

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
            password: this.state.password
        };

        this.props.onSubmit(user);
    }

    render() {
        return (
            <Page>



                <div>
                    <div>Device Test!</div>
                    <MediaQuery query="(min-device-width: 1224px)">
                        <div>You are a desktop or laptop</div>
                        <MediaQuery query="(min-device-width: 1824px)">
                            <div>You also have a huge screen</div>
                        </MediaQuery>
                        <MediaQuery query="(max-width: 1224px)">
                            <div>You are sized like a tablet or mobile phone though</div>
                        </MediaQuery>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width: 1224px)">
                        <div>You are a tablet or mobile phone</div>
                    </MediaQuery>
                    <MediaQuery query="(orientation: portrait)">
                        <div>You are portrait</div>
                    </MediaQuery>
                    <MediaQuery query="(orientation: landscape)">
                        <div>You are landscape</div>
                    </MediaQuery>
                    <MediaQuery query="(min-resolution: 2dppx)">
                        <div>You are retina</div>
                    </MediaQuery>
                </div>

            </Page>
        );
    }
};

export default withRouter(StudyplanPreQuery);