import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
//import StudyplanListRow from "./StudyplanListRow";
import Page from "./Page";
import SearchBar from "./SearchBar";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const Courses = [
    {"name": "Course1", "img": "img1"},
    {"name": "Course2","img": "img2"},
    {"name": "Course3","img": "img3"}
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

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);

    }

    getCourses(Courses) {
        return Courses.map(item => {
            return <CourseRow name={item["name"]} img={"test_backend"}/>
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




                    >


                        {this.getCourses(Courses)}

                    </Grid>




                </Box>
            </Page>



        )
    }
}