import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

/**
 *StudyplanListRow
 *
 * Single Studyplan is shown. This component is used in the studyplanList to show all studyplans of a user
 * Author: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
});



class StudyplanListRow extends React.Component{
    constructor(props){
        super(props);
        this.handleRemove= this.handleRemove.bind(this);
    }

    handleRemove() {
        this.props.remove(this.props.studyplan);
    }

    render () {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={2}>
                        <Typography>
                            {this.props.studyplan.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{this.props.studyplan.img}</Typography>
                    </Grid>
                    <Grid item  container xs={2}>
                        <Grid item container direction="column" spacing={2}>
                            <Grid item>
                                <Button variant="contained">
                                    Edit
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={this.handleRemove}
                                        variant="contained">
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
    )}
}

StudyplanListRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudyplanListRow);

