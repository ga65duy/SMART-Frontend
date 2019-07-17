"use strict";

import React from 'react';

import Grid from "@material-ui/core/Grid";
import Filter from "./Filter"

/**
 * Create Studyplan with filter
 * Showing the structure for studyplan with Filter for courses fitting to the university and field of study
 * Author: Maria and Gerhard
 */

export default class CreateStudyplanWithFilter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Grid container direction={"row"}>
                <Grid item>
                    <h2> Create studyplan</h2>
                </Grid>
                <Grid item>
                    <Filter courses = {this.props.courses}/>
                </Grid>
            </Grid>
        )
    }
}