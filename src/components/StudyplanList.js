import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StudyplanListRow from "./StudyplanListRow";

const studyplanItems = [
    {"studyplan": "studyplan1", "img": "img1"},
    {"studyplan": "studyplan2","img": "img2"},
    {"studyplan": "studyplan3","img": "img3"}
    ];

export default class StudyplanList extends React.Component {
    constructor(props) {
        super(props);
    }

    getStudyplanListItems(studyplanItems) {
        return studyplanItems.map(item => {
            return <StudyplanListRow name={item["studyplan"]} img={item["img"]}/>
        })
    }

    render() {
        return (
                <Grid>
                    {this.getStudyplanListItems(studyplanItems)}
                </Grid>
        )
    }
}