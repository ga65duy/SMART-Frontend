import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Page from './Page';
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        //textAlign: "center",
    },
});

class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        const {classes} = this.props;
        return (
            <Page>
                <Paper className={classes.paper}>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h5"> My Profile </Typography>
                        </Grid>
                        <Grid item container direction = "column">
                            <Typography>Username</Typography>
                            <TextField
                                placeholder="Username"
                                variant="outlined"
                                margin="dense"
                            />
                            <Typography>E-Mail</Typography>
                            <TextField
                                placeholder="E-mail"
                                variant="outlined"
                                margin = "dense"
                            />
                            <Typography>Password</Typography>
                            <TextField
                                placeholder="Password"
                                variant="outlined"
                                margin = "dense"
                            />
                            <Grid item direction="row" align="center">
                                <Button> Save </Button>
                                <Button> Cancle </Button>
                            </Grid>
                            <Button>Studyplans</Button>
                            <Button>Ratings</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Page>
        )};
}
Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);

