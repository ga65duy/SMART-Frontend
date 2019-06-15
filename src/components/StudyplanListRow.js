import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
        textAlign: "center",
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class StudyplanListRow extends React.Component{

    render () {
        const {classes} = this.props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container alignItems={"center"} xs={12}>
                    <Grid item xs={2}>
                        <Typography>
                            StudyplanName
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography >DisplayStudyplanImage</Typography>
                    </Grid>
                    <Grid item xs={2} container>
                        <Grid item container direction="column" >
                            <Grid item>
                                <Button>Load</Button>
                            </Grid>
                            <Grid item>
                                <Button>Delete</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )};
}
StudyplanListRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudyplanListRow);

