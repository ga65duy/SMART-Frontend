import React from "react";
import StudyplanList from "../components/ShowStudyplans/StudyplanList";
import StudyplanService from '../services/StudyplanService';
import Page from "../components/PageWithAdvertisement/Page";
import UserService from "../services/UserService";
import CircularProgress from "@material-ui/core/CircularProgress";

/**
 * LoadStudyplanView
 *
 * View for the load studyplan usecase
 * Author: Maria
 */

export class LoadStudyplanView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            studyplans: []

        };
        this.removeStudyplan = this.removeStudyplan.bind(this);
    }

    removeStudyplan(studyplan){
        StudyplanService.deleteStudyplan(studyplan._id)
            .then(() => {
                const userid = UserService.getCurrentUser().id;
                StudyplanService.listStudyplansForUser(userid)
                    .then( (studyplans) => {
                        console.log("Getting new sucess")
                        this.setState({
                            studyplans: [...studyplans]
                        });
                    })
            }).catch((e) => {
                console.error(e)
        }).catch((e) => {
            console.error(e)
        })
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        const userid = UserService.getCurrentUser().id;
        StudyplanService.listStudyplansForUser(userid).then(studyplans => {
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
            return <Page>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: 200}}>
                    <CircularProgress color={"primary"}/>
                </div>
            </Page>}
        else {
            return (
                <Page>
                    <StudyplanList remove={this.removeStudyplan} studyplans={this.state.studyplans}/>
                </Page>
            )
        }
    }
}