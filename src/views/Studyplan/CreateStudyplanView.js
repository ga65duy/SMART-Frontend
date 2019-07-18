"use strict";

import React from 'react';

import StudyplanEdit from '../../components/StudyplanEdit';

import StudyplanService from '../../services/StudyplanService';
import UserService from "../../services/UserService";


export class CreateStudyplanView extends React.Component {

    constructor(props) {
        super(props);
        this.updateStudyplan=this.updateStudyplan.bind(this);
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

    updateStudyplan(studyplan){

        console.log(studyplan);


        StudyplanService.updateStudyplan(studyplan).then((data) => {
        }).catch((e) => {
            console.error(e);
            this.setState(Object.assign({}, this.state, {error: 'Error while creating studyplan'}));
        });

        /* TODO meldung dass erfolgreich gespeichert wurde */

    }



    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <StudyplanEdit studyplan={this.state.studyplan} updateStudyplan={this.updateStudyplan}  />
        );
    }
}
