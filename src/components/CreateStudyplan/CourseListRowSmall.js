import React from 'react';
import {Link} from "react-router-dom";
import {Box,Grid, Paper} from "@material-ui/core";
import ReactStars from 'react-stars'

import {withStyles} from "@material-ui/core/styles";

/**
 *CourseListRowSmall
 *
 * Single Course is shown. This component is used in the CourseList to show all Courses, depending on filtering
 * in the create studyplan view
 * Author: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
});


class CourseListRowSmall extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Grid container direction={"column"}>
                        <Grid container direction={"row"} justify={"space-between"}>
                            <Box m={1}>
                                {this.props.course.name}
                            </Box>
                            <Box>
                                <ReactStars
                                    value={this.props.course.avgRatingOverall}
                                    size={25}
                                    edit={false}
                                    color1={"#BDBDBD"}
                                    color2={"#FFB90F"}
                                />
                            </Box>
                        </Grid>
                    <Grid item alignItems={"flex-end"}>
                        <Link to={`/courses/${this.props.course._id}`}> Details </Link>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(CourseListRowSmall);

