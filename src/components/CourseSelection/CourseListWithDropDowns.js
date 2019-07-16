import React from "react"
import Grid from "@material-ui/core/Grid"
import CourseList from "./CourseList";
import DropdownsForFiltering from "./DropdownsForFiltering";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

/**
 * CourseListWithDropDown
 *
 * Author: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
});

 class CourseListWithDropDowns extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Grid container direction={"column"}>
                    <Typography variant="h4" color={"primary"} gutterBottom> Search all courses </Typography>
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

export default withStyles(styles)(CourseListWithDropDowns);