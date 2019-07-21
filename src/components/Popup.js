"use strict";

import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {DialogContent} from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";

/**
 * Author: Gerhard/Maria
 */
export default class Popup extends React.Component {
    render() {
        return (
            <Dialog
                open={this.props.showPopup}
                onClose={this.props.closePopup}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText>
                    {this.props.text}
                    </DialogContentText>
                </DialogContent>
                    <Button onClick={this.props.closePopup} color={"primary"}>
                        OK
                    </Button>
            </Dialog>

        );
    }
}