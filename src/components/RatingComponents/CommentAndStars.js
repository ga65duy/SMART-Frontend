"use strict";
import React from 'react';

import {Box, Grid, TextField} from "@material-ui/core"
import Stars from "./Stars"

import Star from '@material-ui/icons/Star'
import orange from '@material-ui/core/colors/orange'

import Rating from 'material-ui-rating'

import {withStyles} from "@material-ui/core"

/**
 * CommentAndStars
 * Component for rating and commenting a course
 * Author:Maria
 */

const styles = theme => ({
    button: {
        marginRight: theme.spacing(2),
    },
});

class CommentAndStars extends React.Component {
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
        const classes = this.props;
        return (
                <Grid>
                    <Grid container
                          direction="row"
                          justify={"space-between"}

                          >
                            <Grid item xs={6}>
                            <TextField
                                label="Title"
                                id="Title"
                                value={this.props.rating.title}
                                onChange={this.handleTitleAndCommentChange}
                                //error={!this.props.validations.emailValid}
                                //helperText={}
                                fullWidth
                                disabled={this.props.postExisting}
                                variant="outlined"
                                margin="dense"/>
                            </Grid>
                            <Grid item >
                                <Box component="div" m={2}>
                                <Rating
                                    value={this.props.rating.overallRating}
                                    max={5}
                                    iconHovered={<Star htmlColor={orange[500]}/>}
                                    readOnly = {true}
                                />
                                </Box>
                            </Grid>
                    </Grid>
                    <Grid container direction="row" justify={"space-between"}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Comment"
                                    id="Comment"
                                    placeholder="Your comment on the course"
                                    value={this.props.rating.comment}
                                    onChange={this.handleTitleAndCommentChange}
                                    //error={!this.props.validations.emailValid}
                                    //helperText={}
                                    multiline
                                    rows="8"
                                    fullWidth
                                    disabled={this.props.postExisting}
                                    variant="outlined"
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                    <Stars rating={this.props.rating.lecturerRating} name={"Lecturer"} clicked={this.handleRatingChange} postExisting={this.props.postExisting}/>
                                    <Stars rating={this.props.rating.contentRating} name = {"Content"} clicked={this.handleRatingChange} postExisting={this.props.postExisting}/>
                                    <Stars rating={this.props.rating.examRating} name = {"Exam"} clicked={this.handleRatingChange} postExisting={this.props.postExisting}/>
                                </Grid>
                    </Grid>
                </Grid>
        );
    }
}
//disabled={!this.state.sthChanged || this.props.userUpdated}
export default withStyles(styles)(CommentAndStars)