"use strict";
import React from 'react'

import {Grid, Typography} from "@material-ui/core"
import RatingWithButtons from "./RatingWithButtons"
import Page from "../Page"
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import {RatingPostList} from "./RatingPostList";

/**
 * CourseWithRatings
 * Component showing the coursename, info and all ratings, with the possibility to rate and comment the course
 * Author: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
});

class CourseWithRatings extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {classes} = this.props;
        return(
            <Page>
                <Paper className={classes.paper}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography align="center" variant="h6">
                                    {this.props.course.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>
                                    {this.props.course.description}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <RatingWithButtons rate={this.props.rate}/>
                            </Grid>
                            <Grid item>
                                <RatingPostList ratings={this.props.course.ratings}/>
                            </Grid>
                        </Grid>
                </Paper>
            </Page>
        );
    }
}

export default withStyles(styles)(CourseWithRatings)

