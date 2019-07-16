"use strict";

import React from 'react';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { UserLoginView } from "./views/ProfileViews/UserLoginView";
import { UserSignupView } from "./views/ProfileViews/UserSignupView";
import {LoadStudyplanView} from './views/LoadStudyplanView';
import {CreateStudyplanView} from './views/CreateStudyplanView';
import {StudyplanView} from './views/StudyplanView';
import {CreateStudyplanQueryView} from './views/CreateStudyplanQueryView';
import {ProfileView} from "./views/ProfileViews/ProfileView";
import {Welcome} from "./components/Welcome"

import {CourseView} from "./views/CourseView"

import {CourseSelectionView} from "./views/CourseSelectionView"

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
                { component: CreateStudyplanQueryView, path: '/home'},
                { component: Welcome, path: '/welcome'},
               // {component: CreateStudyplanView, path:'/home/:id'},
                { component: ProfileView , path: '/profile'},

                { component: CourseView, path: '/courses/:id'},
                {component: CourseSelectionView, path: '/courses'},

                { component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'},
                { component: StudyplanView, path:'/studyplanView'},

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
                            return (<CourseSelectionView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/courses',},

                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<ProfileView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/profile',},

            ]
        };
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

