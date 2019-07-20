"use strict";

import React from 'react';

import Page from './PageWithAdvertisement/Page';
import FilterComponents from './FilterComponents'

import Header from './Header';
import {Footer} from './Footer';

import {createMuiTheme} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import StudyplanService from "../services/StudyplanService";
import CourseService from "../services/CourseService";
import UserService from "../services/UserService";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';




const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    paper:{
        width: 750,
        height: 250,


    },
}));



export default class StudyplanEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            studyplan : props.studyplan,
            availableCourses: props.courses,
            ects:[],
            filteredCourses:props.studyplan.notChosenCourses,
            selections:{},


        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.filter=this.filter.bind(this);
        this.createPDF = this.createPDF.bind(this);
        this.updateECTS();

    }

    componentWillMount(){


       /* let ele=this.state.studyplan.fieldOfStudy.elective;
        this.setState({
            filteredCourses: ele,
        })*/

    }

    updateECTS()
    {
        // ects for the corresnponding semesters
        //ects[9] is for overall ects of whole studyplan
        let sp=this.state.studyplan;
        let ects=[];

        ects[1]=0;
        sp.semester1.forEach(
            (e)=>{ ects[1]+=e.ects;
            }
        );

        ects[2]=0;
        sp.semester2.forEach(
            (e)=>{ ects[2]+=e.ects;
            }
        );

        ects[3]=0;
        sp.semester3.forEach(
            (e)=>{ ects[3]+=e.ects;
            }
        );

        ects[4]=0;
        sp.semester4.forEach(
            (e)=>{ ects[4]+=e.ects;
            }
        );

        ects[5]=0;
        sp.semester5.forEach(
            (e)=>{ ects[5]+=e.ects;
            }
        );

        ects[6]=0;
        sp.semester6.forEach(
            (e)=>{ ects[6]+=e.ects;
            }
        );

        ects[7]=0;
        sp.semester7.forEach(
            (e)=>{ ects[7]+=e.ects;
            }
        );

        ects[8]=0;
        sp.semester8.forEach(
            (e)=>{ ects[8]+=e.ects;
            }
        );


        ects[9]=0;

        var x;
        for(x=1; x<9; x++){
            ects[9] = ects[9]+ ects[x];
        }



        return ects;
    }

    displayECTS(semester){
        let sp= this.state.studyplan;
        if(sp.fieldOfStudy.degree=="Bachelor" || semester<7){
            return(
                <div>
                    <Typography> Semester {semester}</Typography>
                    <Typography style={{flex:1}}/>
                    <Typography>
                    {this.updateECTS()[semester]}/30 ECTS
                    </Typography>

                </div>
            )
        }
        else{
            return(
                <div>
                    <Typography> Semester {semester}</Typography>
                    <Typography style={{flex:1}}/>
                    <Typography>
                        {this.updateECTS()[semester]}/0 ECTS
                    </Typography>

                </div>
            )
        }
    }

    displayOverallECTS()
    {
        let sp= this.state.studyplan;
        if(sp.fieldOfStudy.degree=="Master"){
            return(
                <Typography>
                    {this.updateECTS()[9]}/120 ECTS
                </Typography>
            )
        }
        else {
            return(
                <Typography>
                    {this.updateECTS()[9]}/180 ECTS
                </Typography>
            )
        }
    }


    //änderungen an den Drag and Drop Cards in displaySemesters() machen

    displaySemesters(){
        var courses={
            semester1:[],
            semester2:[],
            semester3:[],
            semester4:[],
            semester5:[],
            semester6:[],
            semester7:[],
            semester8:[],
            available:[]
        };

        this.state.studyplan.semester1.forEach((t)=>{
            courses.semester1.push(
                <Grid item key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester2.forEach((t)=>{
            courses.semester2.push(
                <Grid item key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester3.forEach((t)=>{
            courses.semester3.push(
                <Grid item key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester4.forEach((t)=>{
            courses.semester4.push(
                <Grid item key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester5.forEach((t)=>{
            courses.semester5.push(
                <Grid item
                      key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester6.forEach((t)=>{
            courses.semester6.push(
                <Grid item
                      key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester7.forEach((t)=>{
            courses.semester7.push(
                <Grid item
                      key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester8.forEach((t)=>{
            courses.semester8.push(
                <Grid
                     item
                     key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });



        if(this.state.filteredCourses!==undefined) {


            this.state.filteredCourses.forEach((t) => {
                if (true /*is in courses*/) {
                    courses.available.push(
                        <Grid item key={t.name}
                             draggable
                             onDragStart={(e) => this.onDragStart(e, t)}
                             style={{width: 150}}
                        >
                            <Paper>
                                {t.name}
                            </Paper>

                        </Grid>
                    )

                }
            });

        }







        return courses;
    }


    onDragOver(e)
    {
        e.preventDefault();
    }



    filter(selections){


       // let courses = JSON.parse(JSON.stringify(this.props.courses));

        let courses= [];

        if(this.state.studyplan.notChosenCourses !== undefined) {
             courses = this.state.studyplan.notChosenCourses;
        }

        courses = courses.filter((course) => {
            if (selections.ects.length === 0) {
                return true;
            } else {
                return course.ects === selections.ects;
            }
        });

        courses = courses.filter((course) => {
            if (selections.area.length === 0) {
                return true;
            } else {
                return course.area.includes(selections.area);
            }
        });

        courses = courses.filter((course) => {
            if (selections.rating.length === 0) {
                return true;
            } else {
                return course.avgRatingOverall >= selections.rating;
            }
        });

        courses = courses.filter((course) => {
            if (selections.semester.length === 0) {
                return true;
            } else {
                let offeredIn = course.SS ? "SS" : "WS";
                return offeredIn === selections.semester;
            }
        });

        courses = courses.filter((course) => {
            if (selections.name.length === 0) {
                return true;
            } else {
                return course.name.toLowerCase().includes(selections.name.toLowerCase())
            }
        });

        this.setState({
            filteredCourses: courses,
            selections:selections,
        })
    }


    removeFromAll(id){

        let sp=this.state.studyplan;
        let fc=this.state.filteredCourses;

        if (sp.semester1.findIndex(function (i) {
            return i._id == id._id;}) > -1)
        {
            sp.semester1.splice(sp.semester1.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester2.findIndex(function (i) {
            return i._id == id._id;}) > -1)
        {
            sp.semester2.splice(sp.semester2.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester3.findIndex(function (i) {
            return i._id == id._id;}) > -1) {
            sp.semester3.splice(sp.semester3.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester4.findIndex(function (i) {
            return i._id == id._id;}) > -1) {
            sp.semester4.splice(sp.semester4.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester5.findIndex(function (i) {
            return i._id == id._id;}) > -1) {
            sp.semester5.splice(sp.semester5.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester6.findIndex(function (i) {
            return i._id == id._id;}) > -1) {
            sp.semester6.splice(sp.semester6.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester7.findIndex(function (i) {
            return i._id == id._id;}) > -1) {
            sp.semester7.splice(sp.semester7.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester8.findIndex(function (i) {
            return i._id == id._id;}) > -1) {
            sp.semester8.splice(sp.semester8.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }


            if (sp.notChosenCourses.findIndex(function (i) {
                return i._id == id._id;}) > -1) {
                sp.notChosenCourses.splice(sp.notChosenCourses.findIndex(function (i) {
                    return i._id == id._id;
                }), 1);
            }

        if (fc.findIndex(function (i) {
            return i._id == id._id;}) > -1) {
            fc.splice(fc.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        this.setState({studyplan:sp,
        filteredCourses:fc});

    }
    /**
     * CourseService Parts: attendee update for course statistics
     * Author: Jan
     */
    onDropSem1(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp=this.state.studyplan;
        sp.semester1.push(id);
        this.setState({
            studyplan:sp,
        });
        CourseService.getCourse(id._id).then(function (result) {
            result.attendees[1] = 0;
            result.attendees[1] = result.attendees[1]+1;
            CourseService.updateCourse(result);
        });
    }

    onDropSem2(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp= this.state.studyplan;
        sp.semester2.push(id);
        this.setState({
            studyplan:sp,
        });
        CourseService.getCourse(id._id).then(function (result) {
            result.attendees[2] = 0;
            result.attendees[2] = result.attendees[2]+1;
            console.log(result);
            CourseService.updateCourse(result);
        });
    }



    onDropSem3(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp= this.state.studyplan;
        sp.semester3.push(id);
        this.setState({
            studyplan:sp,
        });
        CourseService.getCourse(id._id).then(function (result) {
            result.attendees[3] = 0;
            result.attendees[3] = result.attendees[3]+1;
            console.log(result);
            CourseService.updateCourse(result);
        });
    }

    onDropSem4(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp= this.state.studyplan;
        sp.semester4.push(id);
        this.setState({
            studyplan:sp,
        });
        CourseService.getCourse(id._id).then(function (result) {
            result.attendees[4] = 0;
            result.attendees[4] = result.attendees[4]+1;
            console.log(result);
            CourseService.updateCourse(result);
        });
    }

    onDropSem5(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp= this.state.studyplan;
        sp.semester5.push(id);
        this.setState({
            studyplan:sp,
        });
        CourseService.getCourse(id._id).then(function (result) {
            result.attendees[5] = 0;
            result.attendees[5] = result.attendees[5]+1;
            console.log(result);
            CourseService.updateCourse(result);
        });
    }

    onDropSem6(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp= this.state.studyplan;
        sp.semester6.push(id);
        this.setState({
            studyplan:sp,
        });
        CourseService.getCourse(id._id).then(function (result) {
            result.attendees[6] = 0;
            result.attendees[6] = result.attendees[6]+1;
            console.log(result);
            CourseService.updateCourse(result);
        });
    }

    onDropSem7(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp= this.state.studyplan;
        sp.semester7.push(id);
        this.setState({
            studyplan:sp,
        });
        CourseService.getCourse(id._id).then(function (result) {
            result.attendees[7] = 0;
            result.attendees[7] = result.attendees[7]+1;
            console.log(result);
            CourseService.updateCourse(result);
        });
    }

    onDropSem8(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp= this.state.studyplan;
        sp.semester8.push(id);
        this.setState({
            studyplan:sp,
        });
        CourseService.getCourse(id._id).then(function (result) {
            result.attendees[8] = 0;
            result.attendees[8] = result.attendees[8]+1;
            console.log(result);
            CourseService.updateCourse(result);
        });
    }

    onDropAvailable(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp= this.state.studyplan;
        sp.notChosenCourses.push(id);

        this.setState({
            studyplan: sp,
        }, ()=>{
            this.filter(this.state.selections);
        });
    }

    onDragStart(e, course){



        var c = JSON.stringify(course);
        e.dataTransfer.setData("course",c);

    }

    handleSubmit(){
        //check if mandatory is in available => if yes, dont save
        // (all mandatory courses must be "zugewiesen" in the studyplan)
        //also check for ects & groups
        var sp = this.state.studyplan;
        console.log("submit: ");
        console.log(sp);
        this.props.updateStudyplan(sp);


    }


    createPDF () {
        const input = document.getElementById("studyplanDiv");
        html2canvas(input).
            then((canvas) => {
                const imgData = canvas.toDataURL(`${this.state.studyplan.name}.png`);
                const pdf = new jsPDF({orientation: "l"});
                pdf.addImage(imgData, "PNG", 0, 0);
                pdf.save(`${this.state.studyplan.name}.pdf`)
        })
    }


    render() {
        const classes = useStyles;
        const ects= this.updateECTS();

        return(
            <Page>
                <Paper>
                    <Grid container direction = "row">
                        <div id={"studyplanDiv"}>
                        <Grid item >
                            <Paper square={true} >
                                <Typography variant="h3" >{this.state.studyplan.name} </Typography>
                                {this.displayOverallECTS()}
                                <Grid container direction="column" style={{ width:500,maxHeight:650,maxWidth:500, overflow: 'auto'}} >

                                    <Grid item onDrop={(e)=>this.onDropSem1(e)} onDragOver={(e)=>this.onDragOver(e)} >
                                        <Paper square={true} style={{height:200}}>

                                            {this.displayECTS(1)}
                                            {this.displaySemesters().semester1}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e)=>this.onDropSem2(e)} onDragOver={(e)=>this.onDragOver(e)} >
                                        <Paper square={true} style={{height:200}}>
                                            {this.displayECTS(2)}
                                            {this.displaySemesters().semester2}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e)=>this.onDropSem3(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                        <Paper square={true} style={{height:200}}>
                                            {this.displayECTS(3)}
                                            {this.displaySemesters().semester3}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e)=>this.onDropSem4(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                        <Paper square={true} style={{height:200}}>
                                            {this.displayECTS(4)}
                                            {this.displaySemesters().semester4}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e)=>this.onDropSem5(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                        <Paper square={true} style={{height:200}}>
                                            {this.displayECTS(5)}
                                            {this.displaySemesters().semester5}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e)=>this.onDropSem6(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                        <Paper style={{height:200}}>
                                            {this.displayECTS(6)}
                                            {this.displaySemesters().semester6}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e)=>this.onDropSem7(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                        <Paper square={true} style={{height:200}}>
                                            {this.displayECTS(7)}
                                            {this.displaySemesters().semester7}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e)=>this.onDropSem8(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                        <Paper square={true} style={{height:200}}>
                                            {this.displayECTS(8)}
                                            {this.displaySemesters().semester8}

                                        </Paper>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </Grid>
                        </div>
                        <Grid item >
                            <Grid container direction="column" style={{maxHeight: 600,maxWidth:350, overflow: 'auto'}} onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDropAvailable(e)}>
                               <Grid item>
                                   <FilterComponents areas={this.props.areas} onSelection={this.filter}/>
                               </Grid>
                                <Grid item>
                                    Select
                                </Grid>

                                    {this.displaySemesters().available}

                            </Grid>
                        </Grid>

                    </Grid>
                    <Button onClick={this.handleSubmit}>
                        SAVE STUDYPLAN
                    </Button>
                    <Button href={"/#/profile/studyplans"} >
                        CANCEL
                    </Button>
                    <Button onClick={this.createPDF} >
                        PDF
                    </Button>


                </Paper>
            </Page>
        )

    }
}