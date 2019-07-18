"use strict";

import React from 'react';

import Page from './PageWithAdvertisement/Page';

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


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#11175e",
        },
        secondary: {
            main: "#ffffff",
        },
        error: {
            main: "#d32f2f",
        },
    }
});

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
            courses: props.courses,



        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

    }

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
                <div key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </div>
            )
        });

        this.state.studyplan.semester2.forEach((t)=>{
            courses.semester2.push(
                <div key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </div>
            )
        });

        this.state.studyplan.semester3.forEach((t)=>{
            courses.semester3.push(
                <div key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </div>
            )
        });

        this.state.studyplan.semester4.forEach((t)=>{
            courses.semester4.push(
                <div key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </div>
            )
        });

        this.state.studyplan.semester5.forEach((t)=>{
            courses.semester5.push(
                <div key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </div>
            )
        });

        this.state.studyplan.semester6.forEach((t)=>{
            courses.semester6.push(
                <div key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </div>
            )
        });

        this.state.studyplan.semester7.forEach((t)=>{
            courses.semester7.push(
                <div key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </div>
            )
        });

        this.state.studyplan.semester8.forEach((t)=>{
            courses.semester8.push(
                <div key={t.name}
                     draggable
                     onDragStart={(e)=>this.onDragStart(e, t)}
                     style={{width:150}}
                >
                    <Paper>
                        {t.name}
                    </Paper>

                </div>
            )
        });



        if(this.state.studyplan.fieldOfStudy.elective=== undefined)
        {

        }
        else {

            this.state.studyplan.fieldOfStudy.elective.forEach((t) => {
                if (true /*is in courses*/) {
                    courses.available.push(
                        <div key={t.name}
                             draggable
                             style={{width: 150}}
                        >
                            <Paper>
                                {t.name}
                            </Paper>

                        </div>
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

    onDropSem1(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        let sp= this.state.studyplan;
        sp.semester1.splice(sp.semester1.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester2.splice(sp.semester2.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester3.splice(sp.semester3.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester4.splice(sp.semester4.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester5.splice(sp.semester5.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester6.splice(sp.semester6.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester7.splice(sp.semester7.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester8.splice(sp.semester8.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester1.push(id);
      this.setState({
            studyplan:sp,
        });
    }

    onDropSem2(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        let sp= this.state.studyplan;
        sp.semester1.splice(sp.semester1.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester2.splice(sp.semester2.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester3.splice(sp.semester3.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester4.splice(sp.semester4.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester5.splice(sp.semester5.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester6.splice(sp.semester6.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester7.splice(sp.semester7.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester8.splice(sp.semester8.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester2.push(id);
        this.setState({
            studyplan:sp,
        });
    }



    onDropSem3(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        let sp= this.state.studyplan;
        sp.semester2.splice(sp.semester2.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester1.splice(sp.semester3.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester4.splice(sp.semester4.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester5.splice(sp.semester5.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester6.splice(sp.semester6.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester7.splice(sp.semester7.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester8.splice(sp.semester8.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester3.push(id);
        this.setState({
            studyplan:sp,
        });
    }

    onDropSem4(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        let sp= this.state.studyplan;
        sp.semester2.splice(sp.semester2.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester3.splice(sp.semester3.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester1.splice(sp.semester4.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester5.splice(sp.semester5.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester6.splice(sp.semester6.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester7.splice(sp.semester7.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester8.splice(sp.semester8.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester4.push(id);
        this.setState({
            studyplan:sp,
        });
    }

    onDropSem5(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        let sp= this.state.studyplan;
        sp.semester2.splice(sp.semester2.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester3.splice(sp.semester3.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester4.splice(sp.semester4.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester1.splice(sp.semester5.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester6.splice(sp.semester6.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester7.splice(sp.semester7.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester8.splice(sp.semester8.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester5.push(id);
        this.setState({
            studyplan:sp,
        });
    }

    onDropSem6(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        let sp= this.state.studyplan;
        sp.semester2.splice(sp.semester2.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester3.splice(sp.semester3.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester4.splice(sp.semester4.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester5.splice(sp.semester5.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester1.splice(sp.semester6.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester7.splice(sp.semester7.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester8.splice(sp.semester8.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester6.push(id);
        this.setState({
            studyplan:sp,
        });
    }

    onDropSem7(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        let sp= this.state.studyplan;
        sp.semester2.splice(sp.semester2.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester3.splice(sp.semester3.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester4.splice(sp.semester4.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester5.splice(sp.semester5.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester6.splice(sp.semester6.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester1.splice(sp.semester7.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester8.splice(sp.semester8.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester7.push(id);
        this.setState({
            studyplan:sp,
        });
    }

    onDropSem8(e)
    {
        let id= JSON.parse(e.dataTransfer.getData("course"));
        let sp= this.state.studyplan;
        sp.semester2.splice(sp.semester2.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester3.splice(sp.semester3.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester4.splice(sp.semester4.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester5.splice(sp.semester5.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester6.splice(sp.semester6.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester7.splice(sp.semester7.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester1.splice(sp.semester8.findIndex(function(i){
            return i.id==id._id;
        }),1);
        sp.semester8.push(id);
        this.setState({
            studyplan:sp,
        });
    }

    onDragStart(e, course){

        console.log("onStart: " + course);

        var c = JSON.stringify(course);
        e.dataTransfer.setData("course",c);

    }

    handleSubmit(){
        //check if mandatory is in available => if yes, dont save
        // (all mandatory courses must be "zugewiesen" in the studyplan)
        //also check for ects & groups
        var sp = this.state.studyplan;
        console.log("submit: " + sp);


    }





    render() {
        const classes = useStyles;



        return(
            <Page>
                <Grid container direction = "row" className={classes.paper} style={{flex:1}} >
                    <Grid item spacing={4}>
                        <Paper square={true} style={{width:600}}>
                            <Typography variant="h3" >{this.state.studyplan.name} </Typography>
                            <Grid container direction="column" style={{overflow:scroll}} >

                                <Grid item onDrop={(e)=>this.onDropSem1(e)} onDragOver={(e)=>this.onDragOver(e)} >
                                    <Paper square={true} style={{height:200}}>
                                        <Typography> Semester 1</Typography>
                                        {this.displaySemesters().semester1}

                                    </Paper>
                                </Grid>

                                <Grid item onDrop={(e)=>this.onDropSem2(e)} onDragOver={(e)=>this.onDragOver(e)} >
                                    <Paper square={true} style={{height:200}}>
                                        <Typography> Semester 2</Typography>
                                        {this.displaySemesters().semester2}

                                    </Paper>
                                </Grid>

                                <Grid item onDrop={(e)=>this.onDropSem3(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                    <Paper square={true} style={{height:200}}>
                                        <Typography> Semester 3</Typography>
                                        {this.displaySemesters().semester3}

                                    </Paper>
                                </Grid>

                                <Grid item onDrop={(e)=>this.onDropSem4(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                    <Paper square={true} style={{height:200}}>
                                        <Typography> Semester 4</Typography>
                                        {this.displaySemesters().semester4}

                                    </Paper>
                                </Grid>

                                <Grid item onDrop={(e)=>this.onDropSem5(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                    <Paper square={true} style={{height:200}}>
                                        <Typography> Semester 5</Typography>
                                        {this.displaySemesters().semester5}

                                    </Paper>
                                </Grid>

                                <Grid item onDrop={(e)=>this.onDropSem6(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                    <Paper style={{height:200}}>
                                        <Typography> Semester 6</Typography>
                                        {this.displaySemesters().semester6}

                                    </Paper>
                                </Grid>

                                <Grid item onDrop={(e)=>this.onDropSem7(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                    <Paper square={true} style={{height:200}}>
                                        <Typography> Semester 7</Typography>
                                        {this.displaySemesters().semester7}

                                    </Paper>
                                </Grid>

                                <Grid item onDrop={(e)=>this.onDropSem8(e)} onDragOver={(e)=>this.onDragOver(e)}>
                                    <Paper square={true} style={{height:200}}>
                                        <Typography> Semester 8</Typography>
                                        {this.displaySemesters().semester8}

                                    </Paper>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item>


                    </Grid>

                </Grid>
                <Button onClick={this.handleSubmit}>
                    SAVE
                </Button>


            </Page>
        )

    }
}