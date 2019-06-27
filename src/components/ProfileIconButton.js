"use strict";


import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import AccountCircle from '@material-ui/icons/AccountCircle';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import UserService from '../services/UserService';

export default function ProfileIconButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function logout(){
        UserService.logout();
        location.href='/';
    }

    function login(){
        location.href='/#/login';
    }

    function profile(){
        location.href = '/#/profile';
    }

    function register(){
        location.href='/#/register';
    }

    if(UserService.isAuthenticated()){

        return (
            <div>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={profile}>My Profile</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
    else {
        return (
            <div>
                <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={register}>Register</MenuItem>
                    <MenuItem onClick={login}>LogIn</MenuItem>
                </Menu>
            </div>
        );
    }

}

/*
const [anchorEl, setAnchorEl] = React.useState(null);

function handleClick(event) {
    setAnchorEl(event.currentTarget);
};

function handleClose() {
    setAnchorEl(null);
};

export class ProfileIconButton extends React.Component {

    constructor(props) {
        super(props);
    }






    render()
    {


        return (
            <div>


                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem  href="/#/profile">Profile</MenuItem>
                    <MenuItem onClick={handleClose} >My account</MenuItem>
                    <MenuItem  >Logout</MenuItem>
                </Menu>
            </div>
        )
    }

}
*/