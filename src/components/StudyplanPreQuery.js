"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import Page from './PageWithAdvertisement/Page';
import {Paper} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import UserService from '../services/UserService';
import {withStyles} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FieldOfStudyService from '../services/FieldOfStudyService';


import UniversityService from '../services/UniversityService';
import CourseService from "../services/CourseService";

/***
 * StudyplanPreQuery
 * Asking the student for university, fieldofstudy, start year of studies and studyplan name
 * Author: Gerhard / Maria
 */

const semester=["2019", "2020", "2021", "2022","2023"];

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px"
    },
});

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

                    uniValid:false,
                    fosValid: false,
                    nameValid: false,

                isValid: false,

            };
        } else {
            this.state = {


                univeristy: {},
                FoSs:[], //FieldsOfStudieS
                selectedFoS:{},
                startSemester:semester[0],
                SName:"", //StudyplanName

                    uniValid:false,
                    fosValid: false,
                    nameValid: false,

                isValid: false,
            };
        }




      //  this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUniveristy = this.handleChangeUniveristy.bind(this);
        this.handleChangeFoS = this.handleChangeFoS.bind(this);
        this.handleChangeStartSemester=this.handleChangeStartSemester.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName=this.handleChangeName.bind(this);
        this.checkIfAllValid=this.checkIfAllValid.bind(this);

        //this.handleChangeSynopsis = this.handleChangeSynopsis.bind(this);
        //this.handleCourseSubmit=this.handleCourseSubmit.bind(this);
        //this.handleChangeFoSCommit=this.handleChangeFoSCommit.bind(this);

       //
        //this.handleChangeS=this.handleChangeS.bind(this);
    }

    componentWillMount(){

    }

    checkIfAllValid(){




    }



    handleChangeUniveristy(event) {
        var uni=event.target.value;
        this.setState({university: uni, uniValid:true});

        var FoSs= uni.fieldsOfStudy;
        this.setState({FoSs:FoSs});


    }


    handleChangeFoS(event){
        var FoS=event.target.value;
        this.setState({selectedFoS:FoS, fosValid:true});
        this.checkIfAllValid();
    }

    handleChangeStartSemester(event){
        var sS=event.target.value;
        this.setState({startSemester: sS});

    }

    handleSubmit(event) {
        let studyplan = {};
        studyplan.user = UserService.getCurrentUser().id;
        studyplan.name= this.state.SName;
        studyplan.fieldOfStudy=this.state.selectedFoS;
        studyplan.wsSs=this.state.selectedFoS.startSemester;
        studyplan.startSemester=this.state.startSemester;

        studyplan.semester1 = this.state.selectedFoS.recommendedSemester1;
        studyplan.semester2 = this.state.selectedFoS.recommendedSemester2;
        studyplan.semester3 = this.state.selectedFoS.recommendedSemester3;
        studyplan.semester4 = this.state.selectedFoS.recommendedSemester4;
        studyplan.semester5 = this.state.selectedFoS.recommendedSemester5;
        studyplan.semester6 = this.state.selectedFoS.recommendedSemester6;
        studyplan.semester7 = [];
        studyplan.semester8 = [];
        studyplan.notChosenCourses = this.state.selectedFoS.elective;




        this.props.createStudyplan(studyplan, this.state.university);




        //push /studyplan/${this.state.studyplan._id}

       // location.href='/#/studyplan/${studyplan._id}';

    }

    handleChangeName(event) {
        if(event.target.value != ""){
            this.setState({SName: event.target.value, nameValid: true })
        }
        else {
            this.setState({SName:event.target.value, nameValid:false})
        }



    }





    render() {
        const {classes} = this.props;
        return (
            <Page>
                <Paper className={classes.paper}>
                <Typography variant="h4" color={"primary"} gutterBottom align={"center"}> Studyplan selection </Typography>
                <Grid container
                      direction="column"
                      alignContent="center"
                      spacing={2}>

                    <Grid item >
                        <form>
                            <TextField
                                id="standard-select-university"
                                select
                                label="Select my university"
                                style={{minWidth: 400,maxWidth: 400}}
                                value={this.state.university}
                                onChange={this.handleChangeUniveristy}


                                helperText="Please select my university"
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
                                style={{minWidth: 400,maxWidth: 400}}
                                value={this.state.selectedFoS}
                                onChange={this.handleChangeFoS}


                                helperText="Please select my Field of Study"
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
                                label="Select Start Year"
                                style={{minWidth: 400,maxWidth: 400}}
                                value={this.state.startSemester}
                                onChange={this.handleChangeStartSemester}


                                helperText="My first year of study"
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
                            style={{minWidth: 400,maxWidth: 400}}
                            onChange={this.handleChangeName}

                            margin="normal"
                        />
                    </Grid>

                    <Button disabled={!(this.state.nameValid&&this.state.fosValid&&this.state.uniValid)}
                            onClick={this.handleSubmit} color ="primary" variant="contained" > Create New Studyplan</Button>



                </Grid>



                </Paper>
            </Page>
        );
    }
}

export default withRouter(withStyles(styles)(StudyplanPreQuery));