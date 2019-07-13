"use strict";
import React from 'react'
import CourseService from "../services/CourseService";
import CourseWithRatings from "../components/RatingComponents/CourseWithRatings";
import RateCourseService from "../services/RateCourseService";
import UserService from "../services/UserService";
import moment from "moment";
import {CourseStatistics} from "../components/CourseStatistics";
import Page from "../components/Page";


/**
 * CourseView
 * Shows the course, courseinfo with already written ratings and possibility to write a rating, if not already rated.
 * Author: Maria
 */

export class CourseView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        this.rateCourse = this.rateCourse.bind(this);
        this.deleteRating = this.deleteRating.bind(this);
    }

    componentWillMount() {
        let courseId = this.props.match.params.id;

        UserService.getLoggedInUserInfo()
            .then((user) => {
                CourseService.getCourse(courseId)
                    .then((course) => {
                        this.setState({
                            loading: false,
                            user: user,
                            course: course
                        })
                    })
                    .catch((e) => {
                        console.error(e);
                    });
            })
            .catch((e) => {
                console.error(e);
            });
        this.setState({
            isUniversityUser : UserService.getCurrentUser().isUniversityUser,

        });

    }

    rateCourse(rating) {
        var createdAt = moment();
        rating = {
            ...rating,
            course: this.state.course._id,
            user: this.state.user._id,
            createdAt: createdAt
        };
        RateCourseService.createRating(rating).then((data) => {
            let courseId = this.props.match.params.id;
            CourseService.getCourse(courseId)
                .then((course) => {
                    console.log(course);
                    this.setState({
                        loading: false,
                        course: course
                    })
                })
                .catch((e) => {
                    console.error(e.message);
                });
        }).catch((e) => {
            console.error(e.message);
        });
    }

    deleteRating(rating) {
        RateCourseService.deleteRating(rating._id)
            .then(() => {
                let courseId = this.state.course._id;
                CourseService.getCourse(courseId)
                    .then((course) => {
                        console.log(course);
                        this.setState({
                            loading: false,
                            course: course
                        })
                    })
                    .catch((e) => {
                        console.error(e.message);
                    });
            }).catch((e) => {
            console.error(e)
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        } else {
            console.log(this.state.course);
            if(this.state.isUniversityUser) {
                return (<CourseStatistics course={this.state.course} rate={this.rateCourse}
                                          loggedInUser={this.state.user}/>);
            }
            else{
                return (
                    <Page>
                       <CourseWithRatings course={this.state.course} rate={this.rateCourse} deleteRating={this.deleteRating}
                                       loggedInUser={this.state.user}/>
                    </Page>
            );}
        }
    }
}