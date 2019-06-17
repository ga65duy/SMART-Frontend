import React from "react";
import StudyplanList from "../components/StudyplanList";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import Grid from '@material-ui/core/Grid';
import Page from '../components/Page';

import StudyplanService from '../services/StudyplanService';


export class LoadStudyplanView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            studyplans: []

        };
    }



    componentWillMount(){
        this.setState({
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
        else {
            return (
                <StudyplanList studyplans={this.state.studyplans}/>

            )
        }
    }
}