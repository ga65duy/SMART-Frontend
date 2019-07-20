"use strict";

import React from 'react';

import StudyplanEdit from '../../components/StudyplanEdit';

import StudyplanService from '../../services/StudyplanService';
import UserService from "../../services/UserService";


export class CreateStudyplanView extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            areas:[],

        };
        this.updateStudyplan=this.updateStudyplan.bind(this);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let id = this.props.match.params.id;

        StudyplanService.getStudyplan(id).then((data) => {
            //studyplan.allcourses.area -> this.state.areas

            this.setState({
                studyplan: data,
                areas: this.getAllAreasFromFOS(data),
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    getAllAreasFromFOS(studyplan){
        let areas = [""];
        let allCourses = [];
        console.log(studyplan)
        allCourses.push(studyplan.semester1);
        allCourses.push(studyplan.semester2);
        allCourses.push(studyplan.semester3);
        allCourses.push(studyplan.semester4);
        allCourses.push(studyplan.semester5);
        allCourses.push(studyplan.semester6);
        allCourses.push(studyplan.semester7);
        allCourses.push(studyplan.semester8);
        allCourses.push(studyplan.notChosenCourses);
        allCourses = allCourses.flat();
        console.log(allCourses)

        for (let i = 0; i<allCourses.length; i++){
            areas.push(...allCourses[i].area)
        }
        let unique = [...new Set(areas)];
        console.log(unique)
        return unique;
    }

    updateStudyplan(studyplan){
        StudyplanService.updateStudyplan(studyplan).then((data) => {


        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while creating studyplan'}));
        });

        /* TODO meldung dass erfolgreich gespeichert wurde */

    }



    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <StudyplanEdit studyplan={this.state.studyplan} updateStudyplan={this.updateStudyplan} areas={this.state.areas}  />
        );


    }
}
