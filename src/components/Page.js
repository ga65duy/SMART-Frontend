"use strict";

import React from 'react';

import Header from './Header';
import { Footer } from './Footer';

import LoadStudyplanView from "../views/LoadStudyplanView"
import { createMuiTheme } from '@material-ui/core/styles';
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

export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount(){
       this.setState({
           title: document.title
       });
    }

    render() {
        return (
            <section>
                <Header title={this.state.title} />
                <LoadStudyplanView/>
                {this.props.children}
                <Footer />
            </section>
        );
    }
}