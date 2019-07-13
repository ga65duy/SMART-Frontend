"use strict";

import React from 'react';
import {withRouter} from "react-router-dom";
import {TextField, Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import UniversityService from "../../services/UniversityService";

/**
 *UniversityUserInput
 * Component for the fields, which are needed for the university user in registration and his profile
 * Author: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
    button: {
        marginRight: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
});

class UniversityUserInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textUni: "University required",
            textCourses: "Course required",
            textFac: "Faculty required",
            textChair: "Chair required",
            textAuthorization: "Authorization required",
            coursesWithUniId: [],
            enableUniversities: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.showUniverisitiesInDropdown = this.showUniverisitiesInDropdown.bind(this);
        this.showCoursesInDropDown = this.showCoursesInDropDown.bind(this);
        this.handleCourseChange = this.handleCourseChange.bind(this);
    }

    componentWillMount() {
        if (this.props.profile) {
            this.getCoursesDependingOnSelectedUni(this.props.user.university);
            this.setState({
                textUni: '',
                textCourses: '',
                textChair: '',
                textFac: '',
                textAuthorization: '',
                enableUniversities: false
            })
        }
    }

    validateInput(value, field) {
        let message = '';
        let fieldValid = false;

        switch (field) {
            case "University":
                if (value.length !== 0) {
                    fieldValid = true;
                } else {
                    message = field + " required"
                }
                break;
            case "Faculty":
            case "Chair":
                if (value.length !== 0) {
                    fieldValid = true;
                } else {
                    message = field + " required"
                }
                break;
            case "Authorization":
                if (value === "uni42") {
                    fieldValid = true;
                } else {
                    fieldValid = false;
                    message = "Invalid " + field;
                }
                break;
            default:
                console.log("error")
        }
        return [fieldValid, message]
    }

    handleChange(e) {
        const value = e.target.value;
        const field = e.target.id;
        const valid = this.validateInput(value, field);
        switch (field) {

            case "Faculty":
                this.props.validations.facValid = valid[0];
                this.props.user.faculty = value;
                this.setState({
                    textFac: valid[1]
                });
                break;
            case "Chair":
                this.props.validations.chairValid = valid[0];
                this.props.user.chair = value;
                this.setState({
                    textChair: valid[1]
                });
                break;
            case "Authorization":
                this.props.validations.authorizationValid = valid[0];
                this.props.user.authorization = value;
                this.setState({
                    textAuthorization: valid[1]
                });
                break;
            default:
                console.log("error")
        }
        this.props.onUpdate();
        if (this.props.profile) {
            this.props.resetSaveButton()
        }
    }

    getCoursesDependingOnSelectedUni(university) {
        UniversityService.getCoursesFromUniversity(university)
            .then(courses =>
                this.setState({
                    coursesWithUniId: courses
                })
            ).catch((e) => {
            console.error(e)
        });
    }

    handleDropdown(e) {
        this.props.user.university = e.target.value;
        this.props.validations.uniValid = true;
        this.setState({
            textUni: ""
        });
        this.getCoursesDependingOnSelectedUni(e.target.value);
        this.props.onUpdate();
        if (this.props.profile) {
            this.props.resetSaveButton()
        }
    }

    showUniverisitiesInDropdown(universities) {
        return universities.map((item, i) => {
            return (<MenuItem key={i} value={item._id}> {item.name} </MenuItem>);
        })
    }

    showCoursesInDropDown(courses) {
        return courses.map(course => (
            <MenuItem key={course._id} value={course._id}>
                {course.name}
            </MenuItem>
        ))
    }

    handleCourseChange(event) {
        let value = event.target.value;
        this.props.user.courses = value;
        if (value.length !== 0) {
            this.props.validations.coursesValid = true;
            this.setState({
                textCourses: ""
            });
        } else {
            this.props.validations.coursesValid = false;
            this.setState({
                textCourses: "Course required"
            })
        }
        this.props.onUpdate();
        if (this.props.profile) {
            this.props.resetSaveButton()
        }
    }

    render() {
        let authorizationField = <TextField
            label="Authorization"
            id="Authorization"
            type="text"
            required={true}
            value={this.props.user.authorization}
            onChange={this.handleChange}
            helperText={this.state.textAuthorization}
            variant="standard"
            error={!this.props.validations.authorizationValid}
            margin="dense"/>;
        const classes = this.props;
        const ITEM_HEIGHT = 70;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 200,
                },
            },
        };
        return (
            <Grid container direction="column">
                <FormControl className={classes.formControl} disabled={!this.state.enableUniversities}
                             error={!this.props.validations.uniValid}>
                    <InputLabel> University </InputLabel>
                    <Select
                        style={{maxWidth: 950}}
                        value={this.props.user.university}
                        onChange={this.handleDropdown}
                        autoWidth={true}
                    >
                        {this.showUniverisitiesInDropdown(this.props.universities)}
                    </Select>
                    <FormHelperText>{this.state.textUni}</FormHelperText>
                </FormControl>


                <FormControl className={classes.formControl}
                             error={!this.props.validations.coursesValid}>
                    <InputLabel htmlFor="select-multiple">Course</InputLabel>
                    <Select
                        multiple
                        style={{maxWidth: 950}}
                        value={this.props.user.courses}
                        onChange={this.handleCourseChange}
                        MenuProps={MenuProps}
                    >
                        {this.showCoursesInDropDown(this.state.coursesWithUniId)}
                    </Select>
                    <FormHelperText>{this.state.textCourses}</FormHelperText>
                </FormControl>


                <TextField
                    label="Faculty"
                    id="Faculty"
                    type="text"
                    required={true}
                    value={this.props.user.faculty}
                    onChange={this.handleChange}
                    error={!this.props.validations.facValid}
                    helperText={this.state.textFac}
                    variant="standard"
                    margin="dense"/>
                <TextField
                    label="Chair"
                    id="Chair"
                    type="text"
                    required={true}
                    value={this.props.user.chair}
                    onChange={this.handleChange}
                    helperText={this.state.textChair}
                    error={!this.props.validations.chairValid}
                    variant="standard"
                    margin="dense"/>
                {!this.props.profile ? authorizationField : null}
            </Grid>
        );
    };
}

export default withRouter(withStyles(styles)(UniversityUserInput));

