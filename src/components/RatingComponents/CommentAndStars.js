"use strict";
import React from 'react';

import {Grid, TextField} from "@material-ui/core";
import Stars from "./Stars"

import Rating from 'material-ui-rating'

/**
 * CommentAndStars
 * Component for rating and commenting a course
 * Author:Maria
 */

export class CommentAndStars extends React.Component {
    constructor(props) {
        super();
        this.state = {
            ratingValueLecture: 0,
            ratingValueExam: 0,
            ratingValueContent: 0
        };

        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(value, ratingName) {
        switch (ratingName) {
            case "Lecture":
                this.setState({
                    ratingValueLecture: value
                });
            case "Exma":
                this.setState({
                    ratingValueLecture: value
                });
            case "Content":
                this.setState({
                    ratingValueContent: value
                });
        }
    }

    render() {
        return (

                <Grid>
                    <Grid container
                          direction="row"
                          justify="space-between">
                            <TextField
                                label="Title"
                                id="Title"
                                //value={"Comment"}
                                //onChange={}
                                //error={!this.props.validations.emailValid}
                                //helperText={}
                                variant="standard"
                                margin="dense"/>
                                <Rating
                                    value={this.state.ratingValue}
                                    max={5}
                                    onChange={this.handleChange}
                                />
                    </Grid>
                    <Grid container direction="row" justify="space-between">
                            <Grid item>
                                <TextField
                                    label="Comment"
                                    id="Comment"
                                    placeholder="Your comment on the course"
                                    //value={"Comment"}
                                    //onChange={}
                                    //error={!this.props.validations.emailValid}
                                    //helperText={}
                                    variant="standard"
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item direction="column">
                                    <Stars rating={this.state.ratingValueLecture} name={"Lecture"} clicked={this.handleChange}/>
                                    <Stars rating={this.state.ratingValueContent} name = {"Content"} clicked={this.handleChange}/>
                                    <Stars rating={this.state.ratingValueExam} name = {"Exam"} clicked={this.handleChange}/>
                                </Grid>
                    </Grid>
                </Grid>
        );
    }
};
