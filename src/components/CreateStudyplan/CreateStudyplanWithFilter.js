"use strict";

import React from 'react';

import Grid from "@material-ui/core/Grid";
import Filter from "./Filter"
import StudyplanEdit from "../StudyplanEdit";

/**
 * Create Studyplan with filter
 * Showing the structure for studyplan with Filter for courses fitting to the university and field of study
 * Author: Maria
 */

export default class CreateStudyplanWithFilter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Grid container direction={"row"}>
                <Grid item>
                    <StudyplanEdit courses={this.props.courses} studyplan={this.props.studyplan}/>
                </Grid>
                <Grid item>
                    <Filter courses = {this.props.courses} areas={this.props.areas}/>
                </Grid>
            </Grid>
        )
    }
}