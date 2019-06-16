import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
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
    constructor(props){
        super(props);
    }

    render () {
        const {classes} = this.props;
    return (
            <Paper className={classes.paper}>
                <Grid container alignItems={"center"} xs={12}>
                    <Grid item xs={2}>
                        <Typography>
                            {this.props.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{this.props.img}</Typography>
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
    )};
}
StudyplanListRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudyplanListRow);

