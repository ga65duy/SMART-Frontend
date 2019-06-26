"use strict";

import React from 'react';

import { MovieList } from '../components/MovieList';

import StudyplanService from '../services/StudyplanService';
import UserService from '../services/UserService';
import StudyplanPreQuery from '../components/StudyplanPreQuery';
import UniversityService from '../services/UniversityService';
import CourseService from '../services/CourseService';
import MovieService from "../services/MovieService";



export class CreateStudyplanQueryView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            studyplan:'',
            user:UserService.getCurrentUser(),
            universities:'',
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        UniversityService.getUniversities().then((data) => {
            this.setState({
                universities: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    createStudyplan(id) {

    }

    updateUniversity(university){

            if(this.state.univeristy == undefined) {
                UniversityService.createUniversity(university).then((data) => {
             //       this.props.history.push('/');
                }).catch((e) => {
                    console.error(e);
                    this.setState(Object.assign({}, this.state, {error: 'Error while creating university'}));
                });
            } else {
                UniversityService.updateUniversity(univeristy).then((data) => {
                 //   this.props.history.push('/');
                }).catch((e) => {
                    console.error(e);
                    this.setState(Object.assign({}, this.state, {error: 'Error while creating university'}));
                });
            }

    }


    updateCourse(course){
        if(this.state.course == undefined) {
            CourseService.createCourse(course).then((data) => {
               // this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating university'}));
            });
        } else {
            CourseService.updateCourse(course).then((data) => {
                //this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState(Object.assign({}, this.state, {error: 'Error while creating university'}));
            });
        }

    }



    render() {

        if(this.state.loading){
            return (<div>loading...</div>);
        }

        return (
            <StudyplanPreQuery  universities={this.state.universities} updateUniversity={(university) => this.updateUniversity(university)} updateCourse={(id) => this.updateCourse(id)}/>
        );
    }
};
