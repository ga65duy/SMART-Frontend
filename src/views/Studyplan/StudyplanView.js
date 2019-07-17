"use strict";

import React from 'react';

import CreateStudyplanQueryView from "./CreateStudyplanQueryView";
import {CreateStudyplanView} from "./CreateStudyplanView";

/**
 * StudyplanView
 *
 * Managing Create Studyplan view and Create Studyplanprequery
 * Author: Maria
 */
export class StudyplanView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            showPreQuery: true,
            studyplan : {},
            uni: {},
        };

        this.handleSubmitPreQuery = this.handleSubmitPreQuery.bind(this);
    }

    componentWillMount(){

    }

    handleSubmitPreQuery(studyplan, uni) {
        this.setState({
            showPreQuery: false,
            studyplan: studyplan,
            uni: uni
        })
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        if(this.state.showPreQuery){
            return <CreateStudyplanQueryView onSubmit={this.handleSubmitPreQuery}/>
        } else {
            return <CreateStudyplanView studyplan={this.state.studyplan} uni={this.state.uni}/>

        }
    }
}
