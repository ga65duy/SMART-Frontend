"use strict";

import React from 'react';

import Grid from "@material-ui/core/Grid";
import FilterComponents from "./FilterComponents";
import CourseListSmall from "./CourseListSmall";

/**
 * Filter
 * Component for filtering the courses according to different parameters(coursename, area, ects, semester, rating)
 * Author: Maria
 */

export default class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state={
            filteredCourses: []
        };
        this.filter = this.filter.bind(this);
    }

    componentWillMount() {
        this.setState({
            filteredCourses: this.props.courses
        });
    }

    filter(selections){
        let courses = JSON.parse(JSON.stringify(this.props.courses));

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

        this.setState({
            filteredCourses: courses
        })
    }


    render() {
        return (
            <Grid container direction={"column"}>
                <Grid container direction={"row"}>
                    <FilterComponents areas={this.props.areas} onSelection={this.filter}/>
                </Grid>
                <Grid item>
                    <CourseListSmall courses={this.state.filteredCourses}/>
                </Grid>
            </Grid>
        )
    }
}