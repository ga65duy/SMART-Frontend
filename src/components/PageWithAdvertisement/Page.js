"use strict";

import React from 'react';

import Header from '../Header';
import {Footer} from '../Footer';

import {createMuiTheme} from '@material-ui/core/styles';
import SideBar from "../SideBar";
import Grid from '@material-ui/core/Grid';
import StudyplanService from "../../services/StudyplanService";
import CourseService from "../../services/CourseService";
import UserService from "../../services/UserService";

/**
 * Page
 * Sourrounding all views
 * Author: Maria and Gerhard
 */


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#11175e",
        },
        secondary: {
            main: "#ffffff",
        },
        error: {
            main: "#d32f2f",
        },
    }
});

function recursiveMap(children, fn) {
    return React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
            return child;
        }

        if (child.props.children) {
            child = React.cloneElement(child, {
                children: recursiveMap(child.props.children, fn)
            });
        }
        return fn(child);
    });
}

const rectangleAdvertisement = ["rectangle1.jpg", "rectangle2.jpg"];
const skyscraperAdvertisement = ["skyscraper1.jpg", "skyscraper2.jpg"];

export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            loading: true,
            studyplans: []
        };
        this.updateSideBar = this.updateSideBar.bind(this);
        this.getRandomAdvertisement = this.getRandomAdvertisement.bind(this);
    }

    componentWillMount() {

        this.setState({
            title: document.title,
            loading: false
        });


        //TODO check isUserLoggedIn so Page can be used everywhere (login, register, etc.) without problems
        /*
        UserService.getLoggedInUserInfo().then((user) => {
            this.setState({
                loggedInUser: user
            });
            this.updateSideBar();
        }); */

    }


    getRandomAdvertisement(){
        return Math.floor(Math.random()*2)
    }

    updateSideBar(){
        const user = this.state.loggedInUser;
        if(user.isUniversityUser){
            CourseService.listUniUserCourses(user).then((courses) =>{
                console.log(courses);
                this.setState({
                    courses: courses,
                    loading: false
                })
            }).catch((e) => {
                console.error(e);
            })

        } else {

            StudyplanService.getStudyplan().then((studyplans) => {
                CourseService.listCoursesWithRatingsOfUser(user).then((courses) => {
                    this.setState({
                        courses: courses,
                        studyplans: studyplans,
                        loading: false
                    });
                }).catch((e) => {
                    console.error(e);
                })
                .catch((e) => {
                    console.error(e);
                })
            })
        }
    }


    render() {
        const childrenWithProps = recursiveMap(this.props.children, child => {return React.cloneElement(child, {updatesidebar: this.updateSideBar})});
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Header title={this.state.title}/>
                </Grid>
                <Grid item>
                    <Grid container
                          direction="row"
                          justify="space-between"
                          alignItems="flex-start"
                          spacing={1}>
                        <Grid item>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    {// <SideBar studyplans={this.state.studyplans} courses={this.state.courses} loggedInUser={this.state.loggedInUser}/>
                                         }
                                </Grid>
                                <Grid item>
                                    <img style={{minWidth: 230}} src={require(`./${rectangleAdvertisement[this.getRandomAdvertisement()]}`)}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{flexGrow: 1}} xs={8}>
                            <Grid item>
                                {childrenWithProps}
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                            <img style={{minWidth: 230}} src={require(`./${skyscraperAdvertisement[this.getRandomAdvertisement()]}`)}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Footer/>
                </Grid>
            </Grid>
        );
    }
}