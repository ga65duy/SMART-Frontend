"use strict";

import React from 'react';

import { MovieList } from '../components/MovieList';

import StudyplanService from '../services/StudyplanService';
import UserService from '../services/UserService';
import StudyplanPreQuery from '../components/StudyplanPreQuery';



export class CreateStudyplanQueryView extends React.Component {

    constructor(props) {
        console.log("cinstructor");
        super(props);

        this.state = {
            loading: false,
            studyplan:'',
            user:UserService.getCurrentUser(),
        };
    }

    componentWillMount(){
        console.log("willMount");
        this.setState({
            loading: true
        });

        if (UserService.isAuthenticated()){

            /* StudyplanService.getStudyplan().then((data) => {
                 this.setState({
                     data: [...data],
                     loading: false
                 });
             }).catch((e) => {
                 console.error(e);
             });*/

            this.setState({loading:false});


        }
        else {

            this.setState({loading:false});


        }

    }

    createStudyplan(id) {

    }

    render() {
        console.log("render");

        return (
            <StudyplanPreQuery  createStudyplan={(id) => this.createStudyplan(id)}/>
        );
    }
};
