"use strict";

import React from 'react';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import Page from './Page';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import UniversityService from '../services/UniversityService';

const style = { maxWidth: 500 };
const currencies = [
    {
        value: 'TUM',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

class StudyplanPreQuery extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.studyplan != undefined) {
            this.state = {
                name: props.studyplan.name,
                university: props.studyplan.university,
                fieldOfStudy: props.studyplan.fos

            };
        } else {
            this.state = {
                name: '',
                univeristy: 'TUM',
                fieldOfStudy: ''

            };
        }


        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeUniveristy = this.handleChangeUniveristy.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);
        this.handleChangeSynopsis = this.handleChangeSynopsis.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        //this.setState(Object.assign({}, this.state, {name: value}));
        this.setState({name: event.target.value})
        console.log(this.state.name);
    }

    handleChangeUniveristy(event) {
        this.setState({univeristy: event.target.value});
        console.log(this.state.university);
        //this.setState(Object.assign({}, this.state, {year: value}));
    }

    handleChangeRating(value) {
        this.setState(Object.assign({}, this.state, {rating: value}));
    }

    handleChangeSynopsis(value) {
        this.setState(Object.assign({}, this.state, {synopsis: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

       /* let movie = this.props.movie;
        if(movie == undefined) {
            movie = {};
        }

        movie.title = this.state.title;
        movie.mpaa_rating = this.state.rating;
        movie.year = this.state.year;
        movie.synopsis = this.state.synopsis;

        this.props.onSubmit(movie);*/
       console.log(this.state.name);
        console.log(this.state.univeristy);
    }

    render() {
        return (
            <Page>
                <form>
                    <Grid container direction="column" alignContent="center">
                    <TextField
                        id="standard-name"
                        label="Name"

                        onChange={this.handleChangeName}
                        margin="normal"
                    />
                    <TextField
                        id="standard-uncontrolled"
                        label="Uncontrolled"
                        defaultValue="foo"

                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Required"
                        defaultValue="Hello World"

                        margin="normal"
                    />

                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"

                        value={""}
                        onChange={this.handleChangeUniveristy}


                        helperText="Please select your currency"
                        margin="normal"
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button onClick={this.handleSubmit}>SUBMIT</Button>
                    </Grid>
                </form>
               <Grid container>



                   { /*
                   function(event: object) => void
                    event: The event source of the callback. You can pull out the new value by accessing event.target.value.
                    */}


               </Grid>
            </Page>
        );
    }
}

export default withRouter(StudyplanPreQuery);