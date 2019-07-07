"use strict";
import React from 'react'
import CourseService from "../services/CourseService";
import CourseWithRatings from "../components/RatingComponents/CourseWithRatings";
import RatingCourseService from "../services/RatingCourseService";
import UserService from "../services/UserService";
import moment from "moment";

/**
 * CourseView
 * Shows the course, courseinfo with already written ratings and possibility to write a rating
 * Author: Maria
 */

export class CourseView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
        };
        this.rateCourse = this.rateCourse.bind(this);
    }

    componentWillMount(){
        let courseId = this.props.match.params.id;

        UserService.getLoggedInUserInfo()
            .then((user) => {
                CourseService.getCourse(courseId)
                    .then((course) => {
                        this.setState({
                            loading: false,
                            user: user,
                            course: course})})
                    .catch((e) => {console.error(e);
                    });
            })
            .catch((e) => {console.error(e);
        });
    }

    rateCourse(rating){
        var createdAt = moment();
        rating = {
            ...rating,
            course: this.state.course._id,
            user: this.state.user._id,
            createdAt: createdAt
        };
        console.log(rating.createdAt);
        RatingCourseService.createRating(rating).then((data) => {
            let courseId = this.props.match.params.id;
            CourseService.getCourse(courseId)
                .then((course) =>
                    this.setState({
                        loading: false,
                        course: course
                    }))
                .catch((e) => {
                    console.error(e.message);
                });
        }).catch((e) => {
            console.error(e.message);
        });
    }

    render(){
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        else {
            console.log(this.state.course);
            return (
                <CourseWithRatings course={this.state.course} rate={this.rateCourse}/>
            );
        }
    }
}