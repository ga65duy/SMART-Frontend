import React from "react";
import Grid from '@material-ui/core/Grid';
import CourseListRowSmall from "./CourseListRowSmall";


/**
 * CourseListSmall
 *
 * Shows the courses, depending on filtering in the create studyplan view
 * Author: Maria
 */
export default class CourseListSmall extends React.Component {
    constructor(props) {
        super(props);

    }

    getCourseListItems(courseItems) {
        return courseItems.map(item => {
            return (<Grid item>
                <CourseListRowSmall course={item}/>
            </Grid>);
        })
    }

    render() {
        return (
            <Grid style={{maxHeight: 500, overflow: 'auto'}}>
                {this.getCourseListItems(this.props.courses)}
            </Grid>
        )
    }
}