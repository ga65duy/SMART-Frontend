"use strict";
import React from 'react'
import Page from "./PageWithAdvertisement/Page";
import Paper from "@material-ui/core/Paper";
import {Box, Grid, Typography} from "@material-ui/core";
import {RatingPostList} from "./RatingComponents/RatingPostList";
import ReactStars from "react-stars";
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
/**
 * CourseStatistics
 * Component showing the course statistics, information and all ratings
 * Author: Jan
 */

export default class CourseStatistics extends React.Component {
    constructor(props) {
        super(props);
    }

    fillAttendees(c){
        let result;
        for(let i=0;i<8; i++){
            if(c.attendees[i] != null){}else{

                c.attendees[i]=0;
            }
        }
        result=[
            {x: "Next Sem.", y: c.attendees[0]},
            {x: "2nd", y: c.attendees[1]},
            {x: "3rd", y: c.attendees[2]},
            {x: "4th", y: c.attendees[3]},
            {x: "5th", y: c.attendees[4]},
            {x: "6th", y: c.attendees[5]},
            {x: "7th", y: c.attendees[6]},
            {x: "8th", y: c.attendees[7]},
            {x: "Semesters", y: 0}
        ]
        return result;
    }


    render(){
        const {classes} = this.props;


        return (
            <Page>
                <Paper>
                    <Grid container direction="column" wrap="nowrap" align={"center"}>
                        <Grid item>
                            <Typography variant="h4" color={"primary"} gutterBottom>
                                {this.props.course.name + " Statistics"}
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Grid container direction="row">
                                <Grid item xs={7}>
                                    <XYPlot
                                        width={600}
                                        height={300}
                                        xType="ordinal">
                                        <VerticalGridLines />
                                        <HorizontalGridLines />
                                        <XAxis/>
                                        <YAxis/>

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
                </Paper>
            </Page>
        );

    }
}
