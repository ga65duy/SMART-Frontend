import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Page from './Page';
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import UserService from "../services/UserService";

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

        this.state = {
            user: {},
        }
        this.changeField = this.changeField.bind(this);
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        const user = UserService.getCurrentUser();
        this.setState({user: user})
    }

    changeField(e){
        const value = e.target.value;
        this.setState(
            {user:
                {username: value}
            })

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
                                value={this.state.user.username}
                                variant="outlined"
                                margin="dense"
                                onChange={this.changeField}
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
                            <Grid item align="center">
                                <Button> Save </Button>
                                <Button> Cancle </Button>
                            </Grid>
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

