import React from "react";
import Grid from '@material-ui/core/Grid';
import CourseListRow from "./CourseListRow";


/**
 * CourseList
 *
 * Shows the courses, depending on filtering
 * Author: Maria
 */
export default class CourseList extends React.Component {
    constructor(props) {
        super(props);

    }

    getCourseListItems(coursetems) {
        return coursetems.map(item => {
            return (<Grid item>
                <CourseListRow course={item}/>
            </Grid>);
        })
    }

    render() {
        return (
            <Grid>
                {this.getCourseListItems(this.props.courses)}
            </Grid>
        )
    }
}