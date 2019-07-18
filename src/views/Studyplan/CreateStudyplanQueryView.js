"use strict";

import React from 'react';


import StudyplanService from '../../services/StudyplanService';
import UserService from '../../services/UserService';
import StudyplanPreQuery from '../../components/StudyplanPreQuery';
import UniversityService from '../../services/UniversityService';
import CourseService from '../../services/CourseService';
import FieldOfStudyService from '../../services/FieldOfStudyService';
import {withRouter} from "react-router-dom";



 export default class CreateStudyplanQueryView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user:UserService.getCurrentUser(),
            universities:'',
            courses:CourseService.getCourses(),
            foss:'',
        };
        this.updateStudyplan = this.updateStudyplan.bind(this)

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



    updateStudyplan(studyplan){

        console.log(studyplan);

        console.log(this.props);
        this.props.onSubmit(studyplan);
        StudyplanService.createStudyplan(studyplan).then((data) => {

            let u = UserService.getCurrentUser();
            if (u.studyplans===undefined){
                u.studyplans=[data._id];
            }
            else{
                u.studyplans = u.studyplans.push(data._id);
            }


            UserService.updateUser(u).catch((e)=>{console.error(e);});
                    //TODO  get add studyplan to user (in update Studyplan) to work

                    UserService.updateUser(u).catch((e)=>{console.error(e);});

            // TODO get: this.props.history.push('/studyplan/'+data._id); working

            console.log(u);


        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while creating studyplan'}));
        });

      /*  */

    }








    render() {
        if(this.state.loading){
            return (<div>Loading...</div>);
        }

        return (
            <StudyplanPreQuery foss={this.state.foss} courses={this.state.courses} universities={this.state.universities} updateStudyplan={(data) => this.updateStudyplan(data)} />
        );
    }
};
