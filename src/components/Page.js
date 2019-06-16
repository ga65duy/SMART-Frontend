"use strict";

import React from 'react';

import Header from './Header';
import { Footer } from './Footer';
import SideBar from "./SideBar";
import StudyplanList from "./StudyplanList";
import SearchBar from "./SearchBar";

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
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
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <SearchBar/>
                    <SideBar/>
                    <StudyplanListRow/>

                </Grid>
                {this.props.children}
                <Footer />
            </section>
        );
    }
}