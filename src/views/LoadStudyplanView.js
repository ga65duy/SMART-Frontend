import React from "react";
import StudyplanList from "../components/StudyplanList";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import Grid from '@material-ui/core/Grid';

import StudyplanService from '../services/StudyplanService';

export default class LoadStudyplanView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            studyplans: []
        }
    }

    componentWillMount() {
        StudyplanService.getStudyplan().then(studyplans => {
            this.setState(
                {studyplans: studyplans}
            )
        })
    }

    render() {
        return (
            <Grid container direction="row">
                <Grid item xs={2}>
                    <SideBar/>
                </Grid>
                <Grid item xs={8}>
                    <StudyplanList studyplans={this.state.studyplans}/>
                </Grid>
                <Grid item xs={2}>
                    <SearchBar/>
                </Grid>
            </Grid>
        )
    }
}