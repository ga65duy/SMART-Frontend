"use strict";
import React from 'react'

import Page from "../components/Page";
import CourseService from "../services/CourseService";
import CourseListWithDropDowns from "../components/CourseSelection/CourseListWithDropDowns";
import UniversityService from "../services/UniversityService";
import FieldOfStudyService from "../services/FieldOfStudyService";


/**
 * CourseSelectionView
 * View for selecting courses according to university, field of study
 * Author: Maria
 */

export class CourseSelectionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            fosId: "",
            fos: [],
            courses: [],
            unis: []
        };

        this.handleUniDropdown = this.handleUniDropdown.bind(this);
        this.filterByTextfield = this.filterByTextfield.bind(this);
        this.handleFosDropdown = this.handleFosDropdown.bind(this);
    }

    componentWillMount() {
        CourseService.getCourses().then((courses) =>
            UniversityService.getUniversities().then((unis) => {
                this.setState({
                    originalCourses: JSON.parse(JSON.stringify(courses)),
                    courses: courses,
                    unis: unis,
                    loading: false
                });
            }).catch((e) => {
                console.error(e)
            })
        ).catch((e) => {
            console.error(e)
        });
    }

    handleUniDropdown(uniId) {
        UniversityService.getCoursesFromUniversity(uniId)
            .then(courses =>
                UniversityService.getFosFromUniversity(uniId).then((fos) => {
                    this.setState({
                        originalCourses: JSON.parse(JSON.stringify(courses)),
                        courses: courses,
                        fos: fos
                    });
                }).catch((e) => {
                    console.error(e)
                })
            ).catch((e) => {
            console.error(e)
        });
    }

    handleFosDropdown(fosId) {
        FieldOfStudyService.getCoursesForFos(fosId).then((courses) => {
            this.setState({
                originalCourses: JSON.parse(JSON.stringify(courses)),
                courses: courses
            })
        })
    }

    filterByTextfield(value) {
        const courses = this.state.originalCourses;
        const filteredCourses = courses.filter((course) => {
            return course.name.toLowerCase().includes(value.toLowerCase())
        });
        this.setState({
            courses: filteredCourses
        });
    }


    render() {
        return (
            <Page>
                <CourseListWithDropDowns courses={this.state.courses}
                                         unis={this.state.unis}
                                         fos={this.state.fos}
                                         onUniDropdown={this.handleUniDropdown}
                                         onFosDropdown={this.handleFosDropdown}
                                         handleTextField={this.filterByTextfield}/>
            </Page>
        )
    }
}