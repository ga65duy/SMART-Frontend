"use strict";
import React from 'react'
import Page from "./Page";
import {Grid, Typography} from "@material-ui/core";
import {RatingPostList} from "./RatingComponents/RatingPostList";
import Stars from "./RatingComponents/Stars";

/**
 * CourseStatistics
 * Component showing the course statistics, information and all ratings
 * Author: Jan
 */

export class CourseStatistics extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <Page>
                <paper>
                    <Grid container direction="column" wrap="nowrap">
                        <Grid item>                                         /* Title Row*/
                            <Typography variant="h4" color={"primary"} gutterBottom>
                                {this.props.course.name + " Statistics"}
                            </Typography>
                        </Grid>
                        <Grid item>                                         /* Row for statistics*/
                            /*ToDo: Calculate statistics*/
                        </Grid>
                        <Grid item>                                         /* all avg Ratings*/
                            <Stars rating={this.props.rating.overallRating} name={"Total Rating"} /*clicked={this.handleRatingChange}*/ postExisting={this.props.postExisting}/>
                            <Stars rating={this.props.rating.lecturerRating} name={"Lecturer"} /*clicked={this.handleRatingChange}*/ postExisting={this.props.postExisting}/>
                            <Stars rating={this.props.rating.contentRating} name = {"Content"} /*clicked={this.handleRatingChange}*/ postExisting={this.props.postExisting}/>
                            <Stars rating={this.props.rating.examRating} name = {"Exam"} /*clicked={this.handleRatingChange}*/ postExisting={this.props.postExisting}/>
                        </Grid>
                        <Grid item>                                         /* Row all comments*/
                            <RatingPostList ratings={this.props.course.ratings} deleteRating={this.deleteRating}
                                                      loggedInUser={this.props.loggedInUser}/>
                        </Grid>
                    </Grid>
                </paper>
            </Page>
        );

    }
}