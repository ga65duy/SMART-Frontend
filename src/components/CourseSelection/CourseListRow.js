import React from 'react';
import {Link} from "react-router-dom";
import {Box,Grid, Paper} from "@material-ui/core";
import ReactStars from 'react-stars'

import {withStyles} from "@material-ui/core/styles";

/**
 *CourseList Row
 *
 * Single Course is shown. This component is used in the CourseList to show all Courses, depending on filtering
 * Author: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
});


class CourseListRow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Grid container direction={"column"}>
                    <Box component="div">
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
                    </Box>
                    <Box component="div" m={1}>
                        <Grid container direction={"row"} justify={"space-between"}>
                            <Box>
                                Ects: {this.props.course.ects}
                            </Box>
                            <Box>
                                Available in: {this.props.course.SS ? "SS" : "WS"}
                            </Box>
                            <Box>
                                Area: {this.props.course.area}
                            </Box>
                            <Link to={`/courses/${this.props.course._id}`}> Details </Link>
                        </Grid>
                    </Box>
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(CourseListRow);

