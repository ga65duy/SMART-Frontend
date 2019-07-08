"use strict";
import React from 'react';
import {Grid, Box} from "@material-ui/core"
import ReactStars from 'react-stars'

/**
 * Stars
 * For Rating Lecture, Exam, Content
 * Author: Maria
 */

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.props.clicked(value, this.props.name)
    }

    render() {
        return (
            <Box component="div" m={1}>
                <Grid container direction={"row"} justify={"space-between"}>
                    <Box m={1}>
                        {this.props.name}
                    </Box>
                    <Box>
                        <ReactStars
                            value={this.props.rating}
                            onChange={this.handleChange}
                            size={25}
                            edit={!this.props.postExisting}
                            color1={"#BDBDBD"}
                            color2={"#FFB90F"}
                        />
                    </Box>
                </Grid>
            </Box>
        );
    }
};