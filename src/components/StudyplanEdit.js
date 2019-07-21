"use strict";

import React from 'react';

import Page from './PageWithAdvertisement/Page';
import FilterComponents from './FilterComponents'

import Header from './Header';
import {Footer} from './Footer';

import {withStyles} from "@material-ui/core/styles";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import StudyplanService from "../services/StudyplanService";
import CourseService from "../services/CourseService";
import UserService from "../services/UserService";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';
import {withRouter} from "react-router-dom";
import Box from "@material-ui/core/Box";

/**
 *StudyplanEdit
 * Component for creating and editing a studyplan
 * Author: Gerhard,  Maria: pdf and styling, Jan: Attendee Handling
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
});

class StudyplanEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            studyplan: props.studyplan,
            availableCourses: props.courses,
            ects: [],
            filteredCourses: props.studyplan.notChosenCourses,
            selections: {
                area: "",
                ects: "",
                name: "",
                rating: "",
                semester: ""
            },


        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.filter = this.filter.bind(this);
        this.createPDF = this.createPDF.bind(this);
        this.updateECTS();

    }

    componentWillMount() {


        /* let ele=this.state.studyplan.fieldOfStudy.elective;
         this.setState({
             filteredCourses: ele,
         })*/

    }

    updateECTS() {
        // ects for the corresnponding semesters
        //ects[9] is for overall ects of whole studyplan
        let sp = this.state.studyplan;
        let ects = [];

        ects[1] = 0;
        sp.semester1.forEach(
            (e) => {
                ects[1] += e.ects;
            }
        );

        ects[2] = 0;
        sp.semester2.forEach(
            (e) => {
                ects[2] += e.ects;
            }
        );

        ects[3] = 0;
        sp.semester3.forEach(
            (e) => {
                ects[3] += e.ects;
            }
        );

        ects[4] = 0;
        sp.semester4.forEach(
            (e) => {
                ects[4] += e.ects;
            }
        );

        ects[5] = 0;
        sp.semester5.forEach(
            (e) => {
                ects[5] += e.ects;
            }
        );

        ects[6] = 0;
        sp.semester6.forEach(
            (e) => {
                ects[6] += e.ects;
            }
        );

        ects[7] = 0;
        sp.semester7.forEach(
            (e) => {
                ects[7] += e.ects;
            }
        );

        ects[8] = 0;
        sp.semester8.forEach(
            (e) => {
                ects[8] += e.ects;
            }
        );


        ects[9] = 0;

        var x;
        for (x = 1; x < 9; x++) {
            ects[9] = ects[9] + ects[x];
        }


        return ects;
    }

    displayECTS(semester) {
        let sp = this.state.studyplan;
        if (sp.fieldOfStudy.degree == "Bachelor" || semester < 5) {
            return (
                <div>
                    <Typography> Semester {semester}</Typography>
                    <Typography style={{flex: 1}}/>
                    <Typography>
                        {this.updateECTS()[semester]}/30 ECTS
                    </Typography>
                </div>
            )
        } else {
            return (
                <div>
                    <Typography> Semester {semester}</Typography>
                    <Typography style={{flex: 1}}/>
                    <Typography>
                        {this.updateECTS()[semester]}/0 ECTS
                    </Typography>

                </div>
            )
        }
    }

    displayOverallECTS() {
        let sp = this.state.studyplan;
        console.log(sp.fieldOfStudy.degree);
        if (sp.fieldOfStudy.degree == "Master") {
            return (
                <Typography>
                    {this.updateECTS()[9]}/120 ECTS
                </Typography>
            )
        } else {
            return (
                <Typography>
                    {this.updateECTS()[9]}/180 ECTS
                </Typography>
            )
        }
    }


    //änderungen an den Drag and Drop Cards in displaySemesters() machen

    displaySemesters() {
        var courses = {
            semester1: [],
            semester2: [],
            semester3: [],
            semester4: [],
            semester5: [],
            semester6: [],
            semester7: [],
            semester8: [],
            available: []
        };

        this.state.studyplan.semester1.forEach((t) => {
            courses.semester1.push(
                <Grid item key={t.name}
                      draggable
                      onDragStart={(e) => this.onDragStart(e, t)}
                      style={{width: 150}}
                >
                    <Paper className={this.props.classes.paper}>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester2.forEach((t) => {
            courses.semester2.push(
                <Grid item key={t.name}
                      draggable
                      onDragStart={(e) => this.onDragStart(e, t)}
                      style={{width: 150}}
                >
                    <Paper className={this.props.classes.paper}>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester3.forEach((t) => {
            courses.semester3.push(
                <Grid item key={t.name}
                      draggable
                      onDragStart={(e) => this.onDragStart(e, t)}
                      style={{width: 150}}
                >
                    <Paper className={this.props.classes.paper}>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester4.forEach((t) => {
            courses.semester4.push(
                <Grid item key={t.name}
                      draggable
                      onDragStart={(e) => this.onDragStart(e, t)}
                      style={{width: 150}}
                >
                    <Paper className={this.props.classes.paper}>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester5.forEach((t) => {
            courses.semester5.push(
                <Grid item
                      key={t.name}
                      draggable
                      onDragStart={(e) => this.onDragStart(e, t)}
                      style={{width: 150}}
                >
                    <Paper className={this.props.classes.paper}>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester6.forEach((t) => {
            courses.semester6.push(
                <Grid item
                      key={t.name}
                      draggable
                      onDragStart={(e) => this.onDragStart(e, t)}
                      style={{width: 150}}
                >
                    <Paper className={this.props.classes.paper}>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester7.forEach((t) => {
            courses.semester7.push(
                <Grid item
                      key={t.name}
                      draggable
                      onDragStart={(e) => this.onDragStart(e, t)}
                      style={{width: 150}}
                >
                    <Paper className={this.props.classes.paper}>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });

        this.state.studyplan.semester8.forEach((t) => {
            courses.semester8.push(
                <Grid
                    item
                    key={t.name}
                    draggable
                    onDragStart={(e) => this.onDragStart(e, t)}
                    style={{width: 150}}
                >
                    <Paper className={this.props.classes.paper}>
                        {t.name}
                    </Paper>

                </Grid>
            )
        });


        if (this.state.filteredCourses !== undefined) {


            this.state.filteredCourses.forEach((t) => {
                if (true /*is in courses*/) {
                    courses.available.push(
                        <Grid item key={t.name}
                              draggable
                              onDragStart={(e) => this.onDragStart(e, t)}
                              style={{maxWidth: 220, minWidth: 220}}
                        >
                            <Paper className={this.props.classes.paper}>
                                {t.name}
                            </Paper>

                        </Grid>
                    )

                }
            });

        }


        return courses;
    }


    onDragOver(e) {
        e.preventDefault();
    }


    filter(selections) {


        // let courses = JSON.parse(JSON.stringify(this.props.courses));


        let courses = [];

        if (this.state.studyplan.notChosenCourses !== undefined) {
            courses = this.state.studyplan.notChosenCourses;
        }

        if (selections !== undefined) {

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
        }

        this.setState({
            filteredCourses: courses,
            selections: selections,
        })
    }


    removeFromAll(id) {

        let sp = this.state.studyplan;
        let fc = this.state.filteredCourses;

        if (sp.semester1.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            sp.semester1.splice(sp.semester1.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester2.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            sp.semester2.splice(sp.semester2.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester3.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            sp.semester3.splice(sp.semester3.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester4.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            sp.semester4.splice(sp.semester4.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester5.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            sp.semester5.splice(sp.semester5.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester6.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            sp.semester6.splice(sp.semester6.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester7.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            sp.semester7.splice(sp.semester7.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (sp.semester8.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            sp.semester8.splice(sp.semester8.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }


        if (sp.notChosenCourses.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            sp.notChosenCourses.splice(sp.notChosenCourses.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        if (fc.findIndex(function (i) {
            return i._id == id._id;
        }) > -1) {
            fc.splice(fc.findIndex(function (i) {
                return i._id == id._id;
            }), 1);
        }

        this.setState({
            studyplan: sp,
            filteredCourses: fc
        });

    }

    onDropSem1(e) {
        let id = JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp = this.state.studyplan;
        sp.semester1.push(id);
        this.setState({
            studyplan: sp,
        });

    }

    onDropSem2(e) {
        let id = JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp = this.state.studyplan;
        sp.semester2.push(id);
        this.setState({
            studyplan: sp,
        });

    }

    onDropSem3(e) {
        let id = JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp = this.state.studyplan;
        sp.semester3.push(id);
        this.setState({
            studyplan: sp,
        });

    }

    onDropSem4(e) {
        let id = JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp = this.state.studyplan;
        sp.semester4.push(id);
        this.setState({
            studyplan: sp,
        });

    }

    onDropSem5(e) {
        let id = JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp = this.state.studyplan;
        sp.semester5.push(id);
        this.setState({
            studyplan: sp,
        });

    }

    onDropSem6(e) {
        let id = JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp = this.state.studyplan;
        sp.semester6.push(id);
        this.setState({
            studyplan: sp,
        });

    }

    onDropSem7(e) {
        let id = JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp = this.state.studyplan;
        sp.semester7.push(id);
        this.setState({
            studyplan: sp,
        });

    }

    onDropSem8(e) {
        let id = JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp = this.state.studyplan;
        sp.semester8.push(id);
        this.setState({
            studyplan: sp,
        });

    }

    onDropAvailable(e) {
        let id = JSON.parse(e.dataTransfer.getData("course"));
        this.removeFromAll(id);
        let sp = this.state.studyplan;
        sp.notChosenCourses.push(id);

        this.setState({
            studyplan: sp,
        }, () => {
            this.filter(this.state.selections);
        });
    }

    onDragStart(e, course) {


        var c = JSON.stringify(course);
        e.dataTransfer.setData("course", c);

    }

    handleSubmit() {
        //check if mandatory is in available => if yes, dont save
        // (all mandatory courses must be "zugewiesen" in the studyplan)
        //also check for ects & groups
        var sp = this.state.studyplan;
        console.log(sp);
        this.handleAttendees(sp);
        this.props.updateStudyplan(sp);


    }
    switchSemester(start){
        switch(start){
            case "2019": return 0;
            case "2020": return 2;
            case "2021": return 4;
            case "2022": return 6;
            default:  return 0;

        }
    }
    handleAttendees(sp){
        let e= this.switchSemester(sp.startSemester);
        console.log(e);
        console.log(sp.startSemester);
        for(let i=0; i< sp.semester1.length; i++){
            let id = sp.semester1[i]._id;
            CourseService.getCourse(id).then(function (result) {
                if(result.attendees[0+e] != null) {
                    result.attendees[0+e] = result.attendees[0+e] + 1;
                } else{
                    result.attendees[0+e] = 1;
                }
                CourseService.updateCourse(result);
            });
        }
        for(let i=0; i< sp.semester2.length; i++){
            let id = sp.semester2[i]._id;
            CourseService.getCourse(id).then(function (result) {
                if(result.attendees[1+e] != null) {
                    result.attendees[1+e] = result.attendees[1+e] + 1;
                } else{
                    result.attendees[1+e] = 1;
                }
                CourseService.updateCourse(result);
            });
        }
        for(let i=0; i< sp.semester4.length; i++){
            let id = sp.semester4[i]._id;
            CourseService.getCourse(id).then(function (result) {
                if(result.attendees[3+e] != null) {
                    result.attendees[3+e] = result.attendees[3+e] + 1;
                } else{
                    result.attendees[3+e] = 1;
                }
                CourseService.updateCourse(result);
            });
        }
        for(let i=0; i< sp.semester5.length; i++){
            let id = sp.semester5[i]._id;
            CourseService.getCourse(id).then(function (result) {
                if(result.attendees[4+e] != null) {
                    result.attendees[4+e] = result.attendees[4+e] + 1;
                } else{
                    result.attendees[4+e] = 1;
                }
                CourseService.updateCourse(result);
            });
        }
        for(let i=0; i< sp.semester6.length; i++){
            let id = sp.semester6[i]._id;
            CourseService.getCourse(id).then(function (result) {
                if(result.attendees[5+e] != null) {
                    result.attendees[5+e] = result.attendees[5+e] + 1;
                } else{
                    result.attendees[5+e] = 1;
                }
                CourseService.updateCourse(result);
            });
        }
        for(let i=0; i< sp.semester7.length; i++){
            let id = sp.semester7[i]._id;
            CourseService.getCourse(id).then(function (result) {
                if(result.attendees[6+e] != null) {
                    result.attendees[6+e] = result.attendees[6+e] + 1;
                } else{
                    result.attendees[6+e] = 1;
                }
                CourseService.updateCourse(result);
            });
        }
        for(let i=0; i< sp.semester7.length; i++){
            let id = sp.semester7[i]._id;
            CourseService.getCourse(id).then(function (result) {
                if(result.attendees[7+e] != null) {
                    result.attendees[7+e] = result.attendees[7+e] + 1;
                } else{
                    result.attendees[7+e] = 1;
                }
                CourseService.updateCourse(result);
            });
        }
        for(let i=0; i< sp.semester3.length; i++){
            let id = sp.semester3[i]._id;
            CourseService.getCourse(id).then(function (result) {
                if(result.attendees[2+e] != null) {
                    result.attendees[2+e] = result.attendees[2+e] + 1;
                } else{
                    result.attendees[2+e] = 1;
                }
                CourseService.updateCourse(result);
            });
        }
    }


    createPDF() {
        const input = document.getElementById("studyplanDiv");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL(`${this.state.studyplan.name}.png`);
            const pdf = new jsPDF({orientation: "l"});
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save(`${this.state.studyplan.name}.pdf`)
        })
    }


    render() {
        const {classes} = this.props;
        const ects = this.updateECTS();

        return (
            <Page>
                <Paper className={classes.paper}>
                    <Grid container direction="row">
                        <div id={"studyplanDiv"}>
                            <Grid item xs={5}>
                                <Typography variant="h4" color={"primary"}
                                            gutterBottom>{this.state.studyplan.name} </Typography>
                                {this.displayOverallECTS()}
                                <Grid container direction="row" alignItems={"stretch"}
                                      style={{width: 700, maxHeight: 650, maxWidth: 700, overflow: 'auto'}}>

                                    <Grid onDrop={(e) => this.onDropSem1(e)}
                                          onDragOver={(e) => this.onDragOver(e)}>
                                        <Paper className={classes.paper}>

                                            {this.displayECTS(1)}
                                            {this.displaySemesters().semester1}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e) => this.onDropSem2(e)}
                                          onDragOver={(e) => this.onDragOver(e)}>
                                        <Paper className={classes.paper}>
                                            {this.displayECTS(2)}
                                            {this.displaySemesters().semester2}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e) => this.onDropSem3(e)}
                                          onDragOver={(e) => this.onDragOver(e)}>
                                        <Paper className={classes.paper}>
                                            {this.displayECTS(3)}
                                            {this.displaySemesters().semester3}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e) => this.onDropSem4(e)}
                                          onDragOver={(e) => this.onDragOver(e)}>
                                        <Paper className={classes.paper}>
                                            {this.displayECTS(4)}
                                            {this.displaySemesters().semester4}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e) => this.onDropSem5(e)}
                                          onDragOver={(e) => this.onDragOver(e)}>
                                        <Paper className={classes.paper}>
                                            {this.displayECTS(5)}
                                            {this.displaySemesters().semester5}

                                        </Paper>
                                    </Grid>

                                    <Grid item onDrop={(e) => this.onDropSem6(e)}
                                          onDragOver={(e) => this.onDragOver(e)}>
                                        <Paper className={classes.paper}>
                                            {this.displayECTS(6)}
                                            {this.displaySemesters().semester6}

                                        </Paper>
                                    </Grid>

                                    {/*<Grid item onDrop={(e) => this.onDropSem7(e)}
                                              onDragOver={(e) => this.onDragOver(e)}>
                                            <Paper className={classes.paper}>
                                                {this.displayECTS(7)}
                                                {this.displaySemesters().semester7}

                                            </Paper>
                                        </Grid>

                                        <Grid item onDrop={(e) => this.onDropSem8(e)}
                                              onDragOver={(e) => this.onDragOver(e)}>
                                            <Paper className={classes.paper}>
                                                {this.displayECTS(8)}
                                                {this.displaySemesters().semester8}

                                            </Paper>
                                        </Grid>*/}

                                </Grid>

                            </Grid>
                        </div>
                        <Grid container
                              style={{minWidth: 200, maxHeight: 650, overflow: 'auto', marginTop: 60, marginBottom: 50}}
                              xs={3}
                              onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => this.onDropAvailable(e)}>
                            <Grid item>
                                <FilterComponents areas={this.props.areas} onSelection={this.filter}/>
                            </Grid>
                            {this.displaySemesters().available}
                        </Grid>
                    </Grid>
                    <Button onClick={this.handleSubmit} variant="contained" color="primary"
                            className={classes.button}>
                        SAVE STUDYPLAN
                    </Button>
                    <Button href={"/#/profile/studyplans"} variant="contained"
                            className={classes.button}>
                        CANCEL
                    </Button>
                    <Button onClick={this.createPDF} variant="contained"
                            className={classes.button}>
                        SAVE AS PDF
                    </Button>


                </Paper>
            </Page>
        )

    }
}

export default withRouter(withStyles(styles)(StudyplanEdit));