"use strict";

import React from 'react';

import CourseList from "../CourseSelection/CourseList";

/**
 * Filter
 * Component for filtering the courses according to different parameters
 * Author: Maria
 */

export default class Filter extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
          <CourseList courses={this.props.courses}/>
        )
    }
}