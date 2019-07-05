"use strict";

import React from 'react';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { MovieListView } from './views/MovieListView';
import { MovieDetailView }   from './views/MovieDetailView';
import { MovieFormView }   from './views/MovieFormView';
import { UserLoginView } from "./views/ProfileViews/UserLoginView";
import { UserSignupView } from "./views/ProfileViews/UserSignupView";
import {LoadStudyplanView} from './views/LoadStudyplanView';
import {CreateStudyplanView} from './views/CreateStudyplanView';
import {StudyplanView} from './views/StudyplanView';
import { CourseListView } from './views/CourseListView';
import {CreateStudyplanQueryView} from './views/CreateStudyplanQueryView';
import {ProfileView} from "./views/ProfileViews/ProfileView";

import {CommentAndStars} from "./components/RatingComponents/CommentAndStars";

import UserService from "./services/UserService";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'SMART',
            university: '',
            fieldOfStudy:'',

            routes: [
                { component: LoadStudyplanView, path: '/', exact:true},
                { component: LoadStudyplanView, path: '/profile/studyplans'},
                { component: CreateStudyplanQueryView , path: '/home'},
               // {component: CreateStudyplanView, path:'/home/:id'},
                { component: MovieDetailView , path: '/show/:id'},
                { component: ProfileView , path: '/profile'},

                { component: CommentAndStars, path:'/rating'},

                { component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'},
                { component: StudyplanView, path:'/studyplanView'},
                { component: CourseListView, path:'/courselistView'},

                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<LoadStudyplanView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/profile/studyplans'},


                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<StudyplanView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/studyplan/:id'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<CourseListView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/courseListView',},

                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<MovieFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/edit/:id'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<MovieFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/add',},

                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<ProfileView {... props} />)//Dummy for ProfileView
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/profile',},

            ]
        };
        //bind  set University & fieldofStudy
    }

    setUniversity( uni)
    {
        this.setState(this.state.university=uni);
    }

    setFieldOfStudy(fos)
    {
        this.setState(this.state.fieldOfStudy=fos);
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {

        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}

