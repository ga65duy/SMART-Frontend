"use strict";

import React from 'react';

import StudyplanService from '../../services/StudyplanService';
import UserService from '../../services/UserService';
import StudyplanPreQuery from '../../components/StudyplanPreQuery';
import UniversityService from '../../services/UniversityService';
import CourseService from '../../services/CourseService';
import FieldOfStudyService from '../../services/FieldOfStudyService';
import Page from "../../components/PageWithAdvertisement/Page";
import CircularProgress from "@material-ui/core/CircularProgress";


export class CreateStudyplanQueryView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user:UserService.getCurrentUser(),
            universities:'',
            courses:CourseService.getCourses(),
            foss:'',
        };
        this.createStudyplan = this.createStudyplan.bind(this)

    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        UniversityService.getUniversities().then((data) => {

            this.setState({
                universities: [...data],

            });
            CourseService.getCourses().then((data2) => {
                this.setState({
                    courses: [...data2],

                });
                FieldOfStudyService.getFoSs().then((data3) => {
                    this.setState({
                        foss: [...data3],
                        loading:false,
                    });

                }).catch((e) => {
                    console.error(e);
                });

            }).catch((e) => {
                console.error(e);
            });
        }).catch((e) => {
            console.error(e);
        });


    }

    createStudyplan(studyplan, uni){
        StudyplanService.createStudyplan(studyplan).then((studyplan) => {
            this.props.history.push(`/studyplans/${studyplan._id}`)

        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while creating studyplan'}));
        })
    }

    render() {
        if (this.state.loading) {
            return <Page>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: 200}}>
                    <CircularProgress color={"primary"}/>
                </div>
            </Page>}
        else {
            return (
                <StudyplanPreQuery foss={this.state.foss} courses={this.state.courses}
                                   universities={this.state.universities}
                                   createStudyplan={(data) => this.createStudyplan(data)}/>
            );
        }
    }
}
