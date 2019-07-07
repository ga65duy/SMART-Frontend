"use strict";
import React from 'react'

import CommentAndStars from "./CommentAndStars"
import {Grid,Typography,Paper} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"
import moment from "moment";

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
});

class RatingPost extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        let dateString = moment(this.props.rating.createdAt).format("LLL");

        return(
                <Grid item>
                    <Paper className={classes.paper}>
                    <Typography align={"left"}>
                        {this.props.rating.user.username} posted on {dateString}
                    </Typography>

                    <CommentAndStars rating={this.props.rating} postExisting={true}/>
                    </Paper>
                </Grid>
        )
    };
}

export default withStyles(styles)(RatingPost);