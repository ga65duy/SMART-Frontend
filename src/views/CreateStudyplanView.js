"use strict";

import React from 'react';

import Studyplan from '../components/Studyplan';

import StudyplanService from '../services/StudyplanService';


export class CreateStudyplanView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(props){
        this.setState({
            loading: true
        });

        let id = this.props.match.params.id;

        StudyplanService.getStudyplan(id).then((data) => {
            this.setState({
                studyplan: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    deleteMovie(id) {
        MovieService.deleteMovie(id).then((message) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Studyplan studyplan={this.state.studyplan} onDelete={(id) => this.deleteMovie(id)} />
        );
    }
}
