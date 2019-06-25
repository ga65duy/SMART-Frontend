import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
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
            return (<Grid item>
                        <StudyplanListRow name={item["name"]} img={"test_backend"}/>
            </Grid>);
        })
    }

    render() {
        const classes=useStyles;
        return (



            <Page >

                <Box className={classes.root}>




                        <Grid
                            container

                            direction="column"
                            justify="flex-start"
                            alignItems="stretch"
                            spacing={1}




                        >


                            {this.getStudyplanListItems(studyplanItems)}

                        </Grid>




                </Box>
            </Page>



        )
    }
}