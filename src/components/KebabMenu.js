"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { MenuButton, ListItem, Avatar, FontIcon } from 'react-md';
import { withRouter } from 'react-router-dom';
import ProfileIconButton from './ProfileIconButton';


import Button from '@material-ui/core/Button';



import UserService from  '../services/UserService';


class KebabMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    render() {
        return (
            <MenuButton
                id={this.props.id}
                icon
                className={this.props.className}
                menuItems={[
                    <Button edge="start" color="primary" href="/">Home</Button>,

                <Button edge="start" color="primary" href="/#/profile/studyplans">Studyplans</Button>,

                    <Button edge="start" color="primary" href="/#/contact">Contact</Button>,

                    <Button edge="start" color="primary" href="/#/profile">Profile</Button>,


                    ]}
            >
                more_vert
            </MenuButton>
        );
    }
}

KebabMenu.propTypes = {
    className: PropTypes.string,
    menuItems: PropTypes.array
};


export default withRouter(KebabMenu);