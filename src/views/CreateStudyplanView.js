"use strict";

import React from 'react';

import { MovieList } from '../components/MovieList';

import StudyplanService from '../services/StudyplanService';
import UserService from '../services/UserService';
import StudyplanPreQuery from '../components/StudyplanPreQuery';


export class CreateStudyplanView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            studyplan:'',
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        if (UserService.isAuthenticated()){

           /* StudyplanService.getStudyplan().then((data) => {
                this.setState({
                    data: [...data],
                    loading: false
                });
            }).catch((e) => {
                console.error(e);
            });*/

           this.setState({loading:false});


        }
        else {



        }

    }

    createStudyplan(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        MovieService.deleteMovie(id).then((message) => {

            let movieIndex = this.state.data.map(movie => movie['_id']).indexOf(id);
            let movies = this.state.data;
            movies.splice(movieIndex, 1);
            this.setState({
                data: [...movies],
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
            <StudyplanPreQuery data={this.state.data} createStudyplan={(id) => this.createStudyplan(id)}/>
        );
    }
}
