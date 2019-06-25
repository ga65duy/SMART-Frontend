import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Page from './Page';



export  class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        //const {classes} = this.props;
        return (
            <Page>
                <Paper>
                    <Grid container alignItems={"center"}>
                        <Grid item >
                            <Typography> My Profile </Typography>
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
                            <Button>Studyplans</Button>
                            <Button>Ranking</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Page>
        )};
}
