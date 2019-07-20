"use strict";
import React from 'react'
import Page from "./PageWithAdvertisement/Page";
import {Box, Grid, Typography} from "@material-ui/core";
import {RatingPostList} from "./RatingComponents/RatingPostList";
import Stars from "./RatingComponents/Stars";
import ReactStars from "react-stars";
import CourseService from "../services/CourseService";
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, VerticalBarSeries, LabelSeries} from 'react-vis';
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
                    <Grid container direction="column" wrap="nowrap" align={"center"}>
                        <Grid item>
                            <Typography variant="h4" color={"primary"} gutterBottom>
                                {this.props.course.name + " Statistics"}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container direction="row" spacing={20}>
                                <Grid item xs={7}>
                                    <XYPlot
                                        width={500}
                                        height={300}>
                                        <VerticalGridLines />
                                        <HorizontalGridLines />
                                        <XAxis />
                                        <YAxis />
                                        <VerticalBarSeries
                                            data={[
                                                {x: 1, y: this.props.course.attendees[1]},
                                                {x: 2, y: this.props.course.attendees[2]},
                                                {x: 3, y: this.props.course.attendees[3]},
                                                {x: 4, y: this.props.course.attendees[4]},
                                                {x: 5, y: this.props.course.attendees[5]},
                                                {x: 6, y: this.props.course.attendees[6]},
                                                {x: 7, y: this.props.course.attendees[7]},
                                                {x: 8, y: this.props.course.attendees[8]}
                                            ]}/>
                                    </XYPlot>
                                </Grid>

                                <Grid item xs={3}>
                                    <Grid container direction="row" justify={"space-between"} spacing={5}>
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
                                    <Grid container direction="row" justify={"space-between"} spacing={5}>
                                        <Grid item>
                                            <Typography variant="p" color={"primary"} gutterBottom>
                                            {"Average lecturer rating"}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box m={-1}>
                                            <ReactStars
                                                value={this.props.course.avgRatingLecturer}
                                                size={20}
                                                color1={"#BDBDBD"}
                                                color2={"#FFB90F"}
                                                edit={false}
                                            />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justify={"space-between"} spacing={5}>
                                        <Grid item>
                                            <Typography variant="p" color={"primary"} gutterBottom>
                                                {"Average content rating"}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box m={-1}>
                                            <ReactStars
                                                value={this.props.course.avgRatingContent}
                                                size={20}
                                                color1={"#BDBDBD"}
                                                color2={"#FFB90F"}
                                                edit={false}
                                            />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justify={"space-between"} spacing={5}>
                                        <Grid item>
                                            <Typography variant="p" color={"primary"} gutterBottom>
                                            {"Average exam rating"}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box m={-1}>
                                            <ReactStars
                                                value={this.props.course.avgRatingExam}
                                                size={20}
                                                color1={"#BDBDBD"}
                                                color2={"#FFB90F"}
                                                edit={false}
                                            />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <RatingPostList ratings={this.props.course.ratings} deleteRating={this.deleteRating}
                                                      loggedInUser={this.props.loggedInUser}/>
                        </Grid>
                    </Grid>
                </paper>
            </Page>
        );

    }
}