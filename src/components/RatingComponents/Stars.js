"use strict";
import React from 'react';
import Rating from 'material-ui-rating'
import {Grid,Box} from "@material-ui/core";
import Star from "@material-ui/core/SvgIcon/SvgIcon";
import orange from "@material-ui/core/colors/orange";

/**
 * Stars
 * For Rating Lecture,Exam, Content
 * Author: Maria
 */


export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(value) {
        this.props.clicked(value, this.props.name)
    }

    render() {
        return (
                <Box component="div" m={2}>
                    <Grid container direction={"row"} justify={"space-between"}>
                    <Box m={1}>
                        {this.props.name}
                    </Box>
                    <Box >
                        <Rating
                            value={this.props.rating}
                            max={5}
                            onChange={this.handleChange}
                            readOnly={this.props.postExisting}
                        />
                    </Box>
                    </Grid>
                </Box>
        );
    }
};