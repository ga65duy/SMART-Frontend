"use strict";

import React from 'react';

import Header from './Header';
import { Footer } from './Footer';

import { createMuiTheme } from '@material-ui/core/styles';
import SideBar from "../components/SideBar";
import Grid from '@material-ui/core/Grid';
import StudyplanService from "../services/StudyplanService";


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
            title: '',
            loading: true,
            studyplans: []
        }
    }

    componentDidMount() {
        this.setState({
            title: document.title,
            loading: true
        });
        StudyplanService.getStudyplan().then((studyplans) => {
            this.setState({
                studyplans: [...studyplans],
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
             <Grid container direction="column" spacing={1}>
                 <Grid item>
                     <Header title={this.state.title}/>
                 </Grid>
                 <Grid item>
                     <Grid container
                           direction="row"
                           justify="space-between"
                           alignItems="flex-start"
                           spacing={1}>
                         <Grid item>
                             <Grid container direction="column" spacing={1}>
                                 <Grid item>
                                     <SideBar studyplans={this.state.studyplans}/>
                                 </Grid>
                                 <Grid item>
                                     <div style={{
                                         width: "200px",
                                         height: "200px",
                                         background: "#428bca",
                                         color: "#fff"
                                     }}>RECTANGLE
                                     </div>
                                 </Grid>
                             </Grid>
                         </Grid>
                         <Grid item style={{flexGrow: 1}} xs={8}>
                             <Grid item>
                                 {this.props.children}
                             </Grid>
                         </Grid>
                         <Grid item xs={2}>
                             <div style={{
                                 width: "220px",
                                 height: "600px",
                                 background: "#428bca",
                                 color: "#fff"
                             }}>SKYSCRAPER
                             </div>
                         </Grid>
                     </Grid>
                 </Grid>

                 <Grid item>
                     <Footer/>
                 </Grid>
             </Grid>
         );
     }
 }