import React from "react";
import Grid from '@material-ui/core/Grid';
import StudyplanListRow from "./StudyplanListRow";
import Page from "./Page";

export default class StudyplanList extends React.Component {
    constructor(props) {
        super(props);

    }

    getStudyplanListItems(studyplanItems) {
        return studyplanItems.map(item => {
            return (<Grid item>
                        <StudyplanListRow studyplan={item}/>
            </Grid>);
        })
    }

    render() {
        return (
            <Page studyplans = {this.props.studyplans}>
                <Grid>
                    {this.getStudyplanListItems(this.props.studyplans)}
                </Grid>
            </Page>
        )
    }
}