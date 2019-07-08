"use strict";
import React from 'react'

import CommentAndStars from "./CommentAndStars"
import {Grid, Typography, Paper, Button} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"
import moment from "moment"

/**
 * RatingPost
 * Component for a single rating for a course
 * Autor: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
    button: {
        marginRight: theme.spacing(2),
    },
});

class RatingPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userIsAuthor: false,
            edit: false
        };
        this.deleteRating = this.deleteRating.bind(this);
        this.userIsAuthor = this.userIsAuthor.bind(this);
    }

    deleteRating() {
        this.props.deleteRating(this.props.rating);
    }

    userIsAuthor() {
        return this.props.loggedInUser._id === this.props.rating.user._id
    }

    render() {
        const {classes} = this.props;
        let dateString = moment(this.props.rating.createdAt).format("LLL");
        let editButtons =
            <Button
                className={classes.button}
                onClick={this.deleteRating}
                variant="contained">
                Delete
            </Button>;

        return (
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography align={"left"}>
                        {this.props.rating.user.username} posted on {dateString}
                    </Typography>
                    <CommentAndStars rating={this.props.rating} edit={this.state.edit} postExisting/>
                    {this.userIsAuthor() ? editButtons : null}
                </Paper>
            </Grid>
        )
    };
}

export default withStyles(styles)(RatingPost);