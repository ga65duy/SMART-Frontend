"use strict";
import React from 'react'

import {Box, Grid, Typography} from "@material-ui/core"
import RatingWithButtons from "./RatingWithButtons"
import Page from "../Page"
import Paper from "@material-ui/core/Paper"
import {withStyles} from "@material-ui/core/styles"
import {RatingPostList} from "./RatingPostList"
import ReactStars from "react-stars"

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

class CourseWithRatings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alreadyPosted: false
        };

        this.rate = this.rate.bind(this);
        this.deleteRating = this.deleteRating.bind(this);
    }

    componentWillMount() {
        let loggedInUser = this.props.loggedInUser;
        let ratingList = this.props.course.ratings;
        let userIdList = [];

        for (let i = 0; i < ratingList.length; i++) {
            let userId = ratingList[i].user._id;
            userIdList.push(userId)
        }
        if (userIdList.includes(loggedInUser._id)) {
            this.setState({alreadyPosted: true})
        }
    }

    rate(rating) {
        this.setState({
            alreadyPosted: true
        });
        this.props.rate(rating)
    }

    deleteRating(rating) {
        this.setState({
            alreadyPosted: false
        });
        this.props.deleteRating(rating)
    }

    render() {
        const {classes} = this.props;
        let alreadyCommentedComponent =
            <div>
                <Paper className={classes.paper}>
                    <Typography variant="h6" color={"primary"} gutterBottom> You already rated the course </Typography>
                </Paper>
            </div>;

        let userAlreadyCommented =
            this.state.alreadyPosted ? alreadyCommentedComponent : <RatingWithButtons rate={this.rate}/>;
        return (
            <Page>
                <Paper className={classes.paper}>
                    <Grid container direction="column" wrap="nowrap">
                        <Grid item>
                            <Grid container direction="row" justify={"center"} spacing={4}>
                                <Grid item>
                                    <Typography variant="h3" color={"primary"} gutterBottom={true}>
                                        {this.props.course.name}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Box m={0}>
                                        <ReactStars
                                            value={this.props.course.avgRatingOverall}
                                            size={35}
                                            color1={"#BDBDBD"}
                                            color2={"#FFB90F"}
                                            edit={false}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom>
                                    {this.props.course.description}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            {userAlreadyCommented}
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" color={"primary"} gutterBottom>
                                All previous comments:
                            </Typography>
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

export default withStyles(styles)(CourseWithRatings)

