"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import Page from './PageWithAdvertisement/Page';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import UserService from '../services/UserService';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FieldOfStudyService from '../services/FieldOfStudyService';


import UniversityService from '../services/UniversityService';
import CourseService from "../services/CourseService";

const style = { maxWidth: 500 };
const semester=["Sommer Semester 19", "Winter Semester 19", "Sommer Semester 20", "Winter Semester 20", "Sommer Semester 21", "Winter Semester 21"];



class StudyplanPreQuery extends React.Component {

    constructor(props) {
        super(props);
        this.state={};

        if (this.props.studyplan != undefined) {
            this.state = {


                university: props.studyplan.university,
                FoSs: [], //FieldsOfStudieS
                selectedFoS:{},
                startSemester:semester[0],
                SName: "", //StudyplanName


            };
        } else {
            this.state = {


                univeristy: {},
                FoSs:[], //FieldsOfStudieS
                selectedFoS:{},
                startSemester:semester[0],
                SName:"", //StudyplanName


            };
        }




      //  this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUniveristy = this.handleChangeUniveristy.bind(this);
        this.handleChangeFoS = this.handleChangeFoS.bind(this);
        this.handleChangeStartSemester=this.handleChangeStartSemester.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName=this.handleChangeName.bind(this);

        //this.handleChangeSynopsis = this.handleChangeSynopsis.bind(this);
        //this.handleCourseSubmit=this.handleCourseSubmit.bind(this);
        //this.handleChangeFoSCommit=this.handleChangeFoSCommit.bind(this);

       //
        //this.handleChangeS=this.handleChangeS.bind(this);
    }

    componentWillMount(){

    }



    handleChangeUniveristy(event) {
        var uni=event.target.value;
        this.setState({university: uni});

        var FoSs= uni.fieldsOfStudy;
        this.setState({FoSs:FoSs});

    }


    handleChangeFoS(event){
        var FoS=event.target.value;
        this.setState({selectedFoS:FoS});
    }

    handleChangeStartSemester(event){
        var sS=event.target.value;
        this.setState({startSemester: sS});
    }

    handleSubmit(event) {
        let studyplan={};
        studyplan.name= this.state.SName;
        studyplan.fieldOfStudy=this.state.selectedFoS;
        studyplan.startSemester=this.state.startSemester;

        studyplan.semester1 = this.state.selectedFoS.recommendedSemester1;
        studyplan.semester2 = this.state.selectedFoS.recommendedSemester2;
        studyplan.semester3 = this.state.selectedFoS.recommendedSemester3;
        studyplan.semester4 = this.state.selectedFoS.recommendedSemester4;
        studyplan.semester5 = this.state.selectedFoS.recommendedSemester5;
        studyplan.semester6 = this.state.selectedFoS.recommendedSemester6;


            //TODO  add studyplan to user (in update Studyplan)




        this.props.updateStudyplan(studyplan, this.state.university);

    }

    handleChangeName(event) {
        this.setState({SName: event.target.value})
    }





    render() {

        return (
            <Page>

                <Grid container
                      direction="column"
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}>

                    <Grid item >
                        <form>
                            <TextField
                                id="standard-select-university"
                                select
                                label="Select your university"

                                value={this.state.university}
                                onChange={this.handleChangeUniveristy}


                                helperText="Please select your university"
                                margin="normal"
                            >
                                {this.props.universities.map(option => (
                                    <MenuItem key={option.id} value={option}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </form>
                    </Grid>
                    <Grid item>
                        <form>
                            <TextField
                                id="standard-select-FoS"
                                select
                                label="Select FoS"

                                value={this.state.selectedFoS}
                                onChange={this.handleChangeFoS}


                                helperText="Please select your Field of Study"
                                margin="normal"
                            >
                                {this.state.FoSs.map(option2 => (
                                    <MenuItem key={option2.id} value={option2}>
                                        {option2.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </form>
                    </Grid>

                    <Grid item >
                        <form>
                            <TextField
                                id="standard-select-StartSemester"
                                select
                                label="Select Start Semester"

                                value={this.state.startSemester}
                                onChange={this.handleChangeStartSemester}


                                helperText="Please select your Start Semester"
                                margin="normal"
                            >
                                {semester.map(option3 => (
                                    <MenuItem key={option3.id} value={option3}>
                                        {option3}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </form>
                    </Grid>

                    <Grid item>
                        <TextField
                            id="standard-uncontrolled"
                            label="Studyplan Name"

                            onChange={this.handleChangeName}

                            margin="normal"
                        />
                    </Grid>

                    <Grid item>
                        <Button onClick={this.handleSubmit} variant="contained" > Create New Studyplan</Button>

                    </Grid>


                </Grid>




            </Page>
        );
    }
}

export default withRouter(StudyplanPreQuery);

/*
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



                   {
                  // function(event: object) => void
                    //event: The event source of the callback. You can pull out the new value by accessing event.target.value.
                    }



</Grid>

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


      handleChangeName(event) {
        //this.setState(Object.assign({}, this.state, {name: value}));
        this.setState({Uname: event.target.value})
        console.log(this.state.Uname);

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

 */