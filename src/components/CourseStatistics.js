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

    fillAttendees(c){
        let result = [];
        for(let i=0;i<8; i++){
            if(c.attendees[i] != null){}else{

                c.attendees[i]=0;
            }
        }
        result=[
            {x: 1, y: c.attendees[0]},
            {x: 2, y: c.attendees[1]},
            {x: 3, y: c.attendees[2]},
            {x: 4, y: c.attendees[3]},
            {x: 5, y: c.attendees[4]},
            {x: 6, y: c.attendees[5]},
            {x: 7, y: c.attendees[6]},
            {x: 8, y: c.attendees[7]}
        ]
        return result;
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
                                            data={this.fillAttendees(this.props.course)}
                                        />
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