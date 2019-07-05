"use strict";
import React from 'react';
import Rating from 'material-ui-rating'
import {Grid, Typography} from "@material-ui/core";

/**
 * Stars
 * For Rating Lecture,Exam, Content
 * Author: Maria
 */
export default class Stars extends React.Component {
    constructor(props) {
        super();
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(value) {
        this.props.clicked(value, this.props.name)
    }

    render() {
        return (
            <Grid container direction="row" justify="space-between">
                <Typography>
                    {this.props.name}
                </Typography>
                <Rating
                    value={this.props.rating}
                    max={5}
                    onChange={this.handleChange}
                />
            </Grid>
        );
    }
};