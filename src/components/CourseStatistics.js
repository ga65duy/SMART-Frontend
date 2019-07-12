"use strict";
import React from 'react'
import Page from "./Page";
import {Box, Grid, Typography} from "@material-ui/core";
import {RatingPostList} from "./RatingComponents/RatingPostList";
import Stars from "./RatingComponents/Stars";
import ReactStars from "react-stars";

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
                            <Grid container direction="row" justify={"space-between"} spacing={2}>
                                <Grid item>
                                    <Typography variant="p" color={"primary"} gutterBottom>
                                        {"Average total rating"}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Box m={-1}>
                                        <ReactStars
                                            value={this.props.course.avgRatingOverall}
                                            size={20}
                                            color1={"#BDBDBD"}
                                            color2={"#FFB90F"}
                                            edit={false}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify={"space-between"} spacing={2}>
                                <Grid item>
                                    <Typography variant="p" color={"primary"} gutterBottom>
                                        {"Average lecturer rating"}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Box m={-1}>
                                        <ReactStars
                                            value={this.props.course.lecturerRating}
                                            size={20}
                                            color1={"#BDBDBD"}
                                            color2={"#FFB90F"}
                                            edit={false}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify={"space-between"} spacing={2}>
                                <Grid item>
                                    <Typography variant="p" color={"primary"} gutterBottom>
                                        {"Average content rating"}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Box m={-1}>
                                        <ReactStars
                                            value={this.props.course.contentRating}
                                            size={20}
                                            color1={"#BDBDBD"}
                                            color2={"#FFB90F"}
                                            edit={false}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify={"space-between"} spacing={2}>
                                <Grid item>
                                    <Typography variant="p" color={"primary"} gutterBottom>
                                        {"Average exam rating"}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Box m={-1}>
                                        <ReactStars
                                            value={this.props.course.examRating}
                                            size={20}
                                            color1={"#BDBDBD"}
                                            color2={"#FFB90F"}
                                            edit={false}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
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