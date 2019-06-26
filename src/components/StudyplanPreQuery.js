"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import Page from './Page';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import UniversityService from '../services/UniversityService';

const style = { maxWidth: 500 };
const currencies = [
    {
        value: 'TUM',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class StudyplanPreQuery extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.universities);

        if (this.props.studyplan != undefined) {
            this.state = {
                Uname:'',
                Sname: props.studyplan.name,
                university: props.studyplan.university,
                fieldOfStudyName: props.studyplan.fos


            };
        } else {
            this.state = {
                Uname:'',
                Sname: '',
                univeristy: '',
                fieldOfStudyName: ''

            };
        }


        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUniveristy = this.handleChangeUniveristy.bind(this);
        this.handleChangeFieldOfStudy = this.handleChangeFieldOfStudy.bind(this);
        this.handleChangeSynopsis = this.handleChangeSynopsis.bind(this);
        this.handleCourseSubmit=this.handleCourseSubmit.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        //this.setState(Object.assign({}, this.state, {name: value}));
        this.setState({Uname: event.target.value})
        console.log(this.state.Uname);

    }

    handleChangeUniveristy(event) {
        this.setState({univeristy: event.target.value});
        console.log(this.state.university);
        //this.setState(Object.assign({}, this.state, {year: value}));
    }

    handleChangeFieldOfStudy(event) {
        this.setState({fieldOfStudyName:event.target.value});
    }

    handleChangeSynopsis(event) {
        this.setState({courseName:event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();


        let university = this.props.university;
        if(university == undefined) {
            university = {};
        }

        university.name = this.state.Uname;
        university.fieldsOfStudy = [];


       // this.props.onSubmit(university);
        this.props.updateUniversity(university);


        console.log(university);

    }

    handleCourseSubmit(event){
        event.preventDefault();

        let course=this.props.course;
        if (course==undefined)
        {
            course={};
        }

        course.name=this.state.courseName;
        this.props.updateCourse(course);
        console.log(course);
    }

    render() {
        return (
            <Page>
                <form>
                    <Grid container direction="column" alignContent="center">
                    <TextField
                        id="standard-name"
                        label="UName (Name)"

                        onChange={this.handleChangeName}
                        margin="normal"
                    />
                    <TextField
                        id="standard-uncontrolled"
                        label="FoS (Uncontrolled)"
                        defaultValue="foo"
                        onChange={this.handleChangeFieldOfStudy}

                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Required"
                        defaultValue="Hello World"

                        margin="normal"
                    />

                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"

                        value={""}
                        onChange={this.handleChangeUniveristy}


                        helperText="Please select your currency"
                        margin="normal"
                    >
                        {this.props.universities.map(option => (
                            <MenuItem key={option.id} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>


                    <Button onClick={this.handleSubmit}>SUBMIT</Button>
                    </Grid>
                </form>

                <form>
                    <TextField
                        id="standard-uncontrolled"
                        label="Course Name"
                        defaultValue="CourseName"
                        onChange={this.handleChangeSynopsis}

                        margin="normal"
                    />

                    <Button onClick={this.handleCourseSubmit}> SUBMIT COURSE </Button>
                </form>
               <Grid container>



                   { /*
                   function(event: object) => void
                    event: The event source of the callback. You can pull out the new value by accessing event.target.value.
                    */}


               </Grid>
            </Page>
        );
    }
}

export default withRouter(StudyplanPreQuery);