import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import ReactStars from 'react-stars'

import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {Box} from "@material-ui/core";
import {Link} from "react-router-dom";

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


export default class CourseListRow extends React.Component{
    constructor(props){
        super(props);

    }

    render () {
        //const {classes} = this.props;
        return (
            <Paper >
                <Grid container direction={"column"}>
                <Box component="div" m={1}>
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
                    <Grid container direction={"row"}>
                    <Grid item>
                        <Typography>
                            Ects: {this.props.course.ects}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Available at: {this.props.course.availableAt}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link to={`/courses/${this.props.course._id}`}> Details </Link>
                    </Grid>
                </Grid>
                </Grid>
            </Paper>
        )
    }
}

CourseListRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(CourseListRow);

