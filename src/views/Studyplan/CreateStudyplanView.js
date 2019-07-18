"use strict";

import React from 'react';

import CreateStudyplanWithFilter from "../../components/CreateStudyplan/CreateStudyplanWithFilter";
import FieldOfStudyService from "../../services/FieldOfStudyService";
import Page from "../../components/PageWithAdvertisement/Page";

/**
 * Create Studyplan view
 * Showing the the courses and structure for creating a studyplan
 * Author: Maria
 */
export class CreateStudyplanView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            courses: []
        }
    }

    componentWillMount(props){
        FieldOfStudyService.getCoursesForFos(this.props.studyplan.fieldOfStudy._id).then((courses)  =>{
            this.setState({
                loading: false,
                courses: courses,
                areas: this.getAllAreasFromFOS(courses)
            })
        })
    }

    getAllAreasFromFOS(courses){
        let areas = [""];
        for (let i = 0; i<courses.length; i++){
            areas.push(...courses[i].area)
        }
        let unique = [...new Set(areas)];
        return unique;
    }

    render(){
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <CreateStudyplanWithFilter studyplan={this.props.studyplan} courses={this.state.courses} areas={this.state.areas}/>
        );
    }
}

