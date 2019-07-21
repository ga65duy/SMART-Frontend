import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import UserInput from "./UserInput";
import UniversityUserInput from "./UniversityUserInput";


/**
 *Profile
 *
 * Shows the data of the logged in user.
 * Author: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        //textAlign: "center",
    },
    button: {
        marginRight: theme.spacing(2),
    },
});

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sthChanged: false,
            allFieldsValid: false,
            validations: {
                usernameValid: true,
                emailValid: true,
                passwordValid: true,
                uniValid: true,
                coursesValid: true,
                facValid: true,
                chairValid: true,
                authorizationValid: true
            },
            user: this.props.user

        };

        this.changedFields = this.changedFields.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }


    componentWillMount() {
        this.originalUser = JSON.parse(JSON.stringify(this.props.user))
    }

    changedFields() {
        var validateUni = [
            this.state.validations.usernameValid,
            this.state.validations.emailValid,
            this.state.validations.uniValid,
            this.state.validations.coursesValid,
            this.state.validations.facValid,
            this.state.validations.chairValid,
            this.state.validations.authorizationValid
        ];

        var validateStudent = [
            this.state.validations.usernameValid,
            this.state.validations.emailValid,
        ];

        if (this.state.user.isUniversityUser) {
            this.setState({
                allFieldsValid: (validateUni.every(item => item)),
                sthChanged: true,
                userUpdated: false
            })
        } else {
            this.setState({
                allFieldsValid: (validateStudent.every(item => item)),
                sthChanged: true,
            })
        }
    }

    handleSave() {
        this.props.updateProfile();
        this.props.updatesidebar();
    }

    handleCancel() {
        this.setState({
            user: JSON.parse(JSON.stringify(this.originalUser)),
            sthChanged: false,
            validations: {
                usernameValid: true,
                emailValid: true,
                passwordValid: true,
                uniValid: true,
                coursesValid: true,
                facValid: true,
                chairValid: true,
                authorizationValid: true
            },
            allFieldsValid: true,
        })
    }

    render() {
        const {classes} = this.props;
        let universityUser = <UniversityUserInput user={this.state.user}
                                                  profile={true}
                                                  universities={this.props.universities}
                                                  onUpdate={this.changedFields}
                                                  validations={this.state.validations}
                                                  resetSaveButton={this.props.resetSaveButton}
                                                  />;
        return (
                <Paper className={classes.paper}>
                    <Typography variant="h4" color={"primary"} align={"center"} gutterBottom> My Profile </Typography>
                    <UserInput user={this.state.user}
                               profile={true}
                               onUpdate={this.changedFields}
                               validations={this.state.validations}
                               resetSaveButton={this.props.resetSaveButton}
                    />
                    {this.state.user.isUniversityUser ? universityUser : null}
                    <Grid container>
                        <Grid item alignContent="center">
                            <Button className={classes.button}
                                    disabled={!(this.state.sthChanged && this.state.allFieldsValid) || this.props.userUpdated}
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSave}
                            >
                                Save
                            </Button>
                            <Button disabled={!this.state.sthChanged || this.props.userUpdated}
                                    onClick={this.handleCancel}
                                    variant="contained">
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);

