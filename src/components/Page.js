"use strict";

import React from 'react';

import Header from './Header';
import { Footer } from './Footer';

import LoadStudyplanView from "../views/LoadStudyplanView"
import { createMuiTheme } from '@material-ui/core/styles';
import SideBar from "../components/SideBar";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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
                <Typography/>
                <Grid  container
                       direction="row"
                       justify="space-between"
                       alignItems="flex-start"
                >
                    <div>
                        <Grid container direction="column">

                            <SideBar />
                            <div style={{width: "200px", height: "200px", background: "#428bca", color: "#fff" }}>RECTANGLE</div>

                           
                        </Grid>
                    </div>
                    <div style={{flexGrow:1}}>
                {this.props.children}
                    </div>
                    <div style={{width: "160px", height: "600px", background: "#428bca", color: "#fff" }}>SKYSCRAPER</div>
                </Grid>

                <Footer />
            </section>
        );
    }
}