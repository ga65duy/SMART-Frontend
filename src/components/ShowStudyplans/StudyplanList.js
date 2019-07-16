import React from "react";
import Grid from '@material-ui/core/Grid';
import StudyplanListRow from "./StudyplanListRow";
import Page from "../PageWithAdvertisement/Page";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

/**
 * StudyplanList
 *
 * Shows the studyplan of the logged in user.
 * Author: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
});

class StudyplanList extends React.Component {
    constructor(props) {
        super(props);
    }

    getStudyplanListItems(studyplanItems) {
        return studyplanItems.map(item => {
            return (<Grid item>
                        <StudyplanListRow studyplan={item} remove={this.props.remove}/>
            </Grid>);
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Typography variant="h4" color={"primary"} gutterBottom>
                    My Studyplans
                </Typography>
                <Grid style={{maxHeight: 500, overflow: 'auto'}}>
                    {this.getStudyplanListItems(this.props.studyplans)}
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(StudyplanList)