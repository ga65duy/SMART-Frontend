import React from "react"
import Grid from "@material-ui/core/Grid"
import CourseList from "./CourseList";
import {DropdownsForFiltering} from "./DropdownsForFiltering";
import Paper from "@material-ui/core/Paper";

/**
 * CourseListWithDropDown
 *
 * Author: Maria
 */
export class CourseListWithDropDowns extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <Paper>
                <Grid container direction={"column"}>
                    <DropdownsForFiltering handleTextField={this.props.handleTextField}
                                           unis={this.props.unis}
                                           fos={this.props.fos}
                                           onUniDropdown={this.props.onUniDropdown}
                                           onFosDropdown={this.props.onFosDropdown}
                    />
                    <CourseList courses={this.props.courses}/>
                </Grid>
            </Paper>
        )
    }
}