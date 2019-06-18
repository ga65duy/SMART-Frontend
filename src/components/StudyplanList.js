import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import StudyplanListRow from "./StudyplanListRow";
import Page from "./Page";
import SearchBar from "./SearchBar";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const studyplanItems = [
    {"name": "studyplan1", "img": "img1"},
    {"name": "studyplan2","img": "img2"},
    {"name": "studyplan3","img": "img3"}
    ];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default class StudyplanList extends React.Component {
    constructor(props) {
        super(props);

    }

    getStudyplanListItems(studyplanItems) {
        return studyplanItems.map(item => {
            return <StudyplanListRow name={item["name"]} img={"test_backend"}/>
        })
    }

    render() {
        const classes=useStyles;
        return (



            <Page >

                <div className={classes.root}>



                        <Grid item style={{flexGrow:1}} >
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="stretch"


                        >


                            {this.getStudyplanListItems(studyplanItems)}

                        </Grid>
                        </Grid>



                </div>
            </Page>



        )
    }
}