import React from "react";
import Grid from '@material-ui/core/Grid';
import StudyplanListRow from "./StudyplanListRow";
import Page from "../PageWithAdvertisement/Page";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

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

        this.createStudyplan = this.createStudyplan.bind(this);
    }

    getStudyplanListItems(studyplanItems) {
        return studyplanItems.map(item => {
            return (<Grid item>
                        <StudyplanListRow studyplan={item} remove={this.props.remove}/>
            </Grid>);
        })
    }

    createStudyplan(){
        location.href = `/#/studyplans/create`;
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Typography variant="h4" color={"primary"} gutterBottom>
                    My Studyplans
                </Typography>
                <Button variant="contained" color="primary" onClick={this.createStudyplan}> Create new studyplan </Button>
                <Grid style={{maxHeight: 500, overflow: 'auto'}}>
                    {this.getStudyplanListItems(this.props.studyplans)}
                </Grid>
            </Paper>
        )
    }
}

export default withStyles(styles)(StudyplanList)