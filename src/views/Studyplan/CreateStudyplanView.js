"use strict";

import React from 'react';

import StudyplanEdit from '../../components/StudyplanEdit';

import StudyplanService from '../../services/StudyplanService';


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



    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <StudyplanEdit studyplan={this.state.studyplan}  />
        );
    }
}
