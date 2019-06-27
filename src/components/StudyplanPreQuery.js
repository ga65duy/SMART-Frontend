"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import Page from './Page';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FieldOfStudyService from '../services/FieldOfStudyService';


import UniversityService from '../services/UniversityService';
import CourseService from "../services/CourseService";

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

        if (this.props.studyplan != undefined) {
            this.state = {
                Uname:'',
                Sname: props.studyplan.name,
                university: props.studyplan.university,
                fieldOfStudyName: props.studyplan.fos,
                courses:props.courses,
                selectedCourses:[],
                fieldsOfStudy:FieldOfStudyService.getFoSs(),


            };
        } else {
            this.state = {
                Uname:'',
                Sname: '',
                univeristy: '',
                fieldOfStudyName: '',
                courses: props.courses,
                selectedCourses:[],
                fieldsOfStudy:FieldOfStudyService.getFoSs(),

            };
        }
        this.setState({fieldsOfStudy:[]})



        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUniveristy = this.handleChangeUniveristy.bind(this);
        this.handleChangeFieldOfStudy = this.handleChangeFieldOfStudy.bind(this);
        this.handleChangeSynopsis = this.handleChangeSynopsis.bind(this);
        this.handleCourseSubmit=this.handleCourseSubmit.bind(this);
        this.handleChangeFoSCommit=this.handleChangeFoSCommit.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeS=this.handleChangeS.bind(this);
    }

    componentWillMount(){
        FieldOfStudyService.getFoSs().then((data) => {
            this.setState({
                fieldsOfStudy: [...data],
            });
        }).catch((e) => {
            console.error(e);
        });
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

    handleChangeFoSCommit(event){

        event.preventDefault();

        let FoS=this.props.fieldOfStudy;
        if (FoS==undefined)
        {
            FoS={};
        }

        FoS.name=this.state.fieldOfStudyName;
        FoS.mandatory=[]+this.props.courses;

        this.props.updateFoS(FoS);



    }

   handleChangeS(event,name){

  //    this.setState({[name]: event.target.checked });


       console.log(this.state[name])

    }


    checkBoxes(){

        const courses=this.props.courses;

        courses.map(o=>(

            this.setState({[o.name]:false})
        ))


       return(
        courses.map(option => (


            <FormControlLabel
                control={
                    <Checkbox
                        key={option.id}
                        checked= {this.state.checkedA}
                        onChange={this.handleChangeS(option.name)}
                        value={option.name}
                        inputProps={{
                            'aria-label': 'primary checkbox',
                        }}
                    />
                }
                label={option.name}
            />


        )))
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

                <form>
                <TextField
                    id="standard-uncontrolled"
                    label="FoS Name"

                    onChange={this.handleChangeFieldOfStudy}

                    margin="normal"
                />

                    {this.props.courses.map(option => (

                        <Typography>{option.name}</Typography>

                    ))}




                <Button onClick={this.handleChangeFoSCommit}> SUBMIT FoS </Button>
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