"use strict";

import React from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
/*
.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
}
.popup_inner {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    background: white;
}*/

export default class Popup extends React.Component {
    render() {
        return (
            < div style={{
                "position":"fixed","width":"100%",
                "height":"100%","top":"0","left":"0",
                "right":"0","bottom":"0","margin":"auto",
                "backgroundColor":"rgba(0,0,0, 0.5)"

            }} >
                <Paper style={{"position":"absolute",
                    "left":"25%","right":"25%","top":"25%",
                    "bottom":"25%","margin":"auto"}}>
                    <h1>{this.props.text}</h1>
                    <Button onClick={this.props.closePopup} variant="contained" color="primary">OK</Button>
                </Paper>
            </div>
        );
    }
}