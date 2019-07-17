"use strict";
import React from 'react'

import {Box, Grid, TextField} from "@material-ui/core"
import Stars from "./Stars"
import ReactStars from "react-stars"

/**
 * CommentAndStars
 * Component for rating and commenting a course
 * Author:Maria
 */

export default class CommentAndStars extends React.Component {
    constructor(props) {
        super(props);

        this.handleRatingChange= this.handleRatingChange.bind(this);
        this.handleTitleAndCommentChange=this.handleTitleAndCommentChange.bind(this);
    }

    handleRatingChange(value, ratingName) {
        this.props.onChange(ratingName, value);
    }

    handleTitleAndCommentChange(e){
        this.props.onChange(e.target.id, e.target.value);
    }

    render() {
        return (
                <Grid>
                    <Grid container
                          direction="row"
                          spacing={5}>
                            <Grid item xs={7}>
                            <TextField
                                label="Title"
                                id="Title"
                                value={this.props.rating.title}
                                onChange={this.handleTitleAndCommentChange}
                                fullWidth
                                disabled={this.props.postExisting}
                                variant="outlined"
                                margin="dense"/>
                            </Grid>
                            <Grid item >

                                <Box component="div" m={1}>
                                    <Grid container direction={"row"} justify={"space-between"}>
                                        <Box m={1}>
                                            Average
                                        </Box>
                                        <Box>
                                            <ReactStars
                                                value={this.props.rating.overallRating}
                                                size={25}
                                                edit={false}
                                                color1={"#BDBDBD"}
                                                color2={"#FFB90F"}
                                            />
                                        </Box>
                                    </Grid>
                                </Box>
                            </Grid>
                    </Grid>
                    <Grid container direction="row" spacing={5}>
                            <Grid item xs={7}>
                                <TextField
                                    label="Comment"
                                    id="Comment"
                                    placeholder="Your comment on the course"
                                    value={this.props.rating.comment}
                                    onChange={this.handleTitleAndCommentChange}
                                    multiline
                                    rows="8"
                                    fullWidth
                                    disabled={this.props.postExisting}
                                    variant="outlined"
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item>
                                    <Stars rating={this.props.rating.lecturerRating} name={"Lecturer"} clicked={this.handleRatingChange} postExisting={this.props.postExisting}/>
                                    <Stars rating={this.props.rating.contentRating} name = {"Content"} clicked={this.handleRatingChange} postExisting={this.props.postExisting}/>
                                    <Stars rating={this.props.rating.examRating} name = {"Exam"} clicked={this.handleRatingChange} postExisting={this.props.postExisting}/>
                            </Grid>
                    </Grid>
                </Grid>
        );
    }
}
