import React from "react"

import { withStyles } from '@material-ui/core/styles';

import { withRouter } from 'react-router-dom'
import Paper from  "@material-ui/core/Paper"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

/**
 *SideBar
 *
 * Shows different information according to the university user or student
 * Author: Maria
 */
const sideBar = theme => ({
    root: {
        width: '100%',
        maxWidth: 230,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    // nestedSecondLevel: {
    //     paddingLeft: theme.spacing(6)
    //
    // }
});


class SideBar extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleMyCoursesRatings = this.handleMyCoursesRatings.bind(this);

        this.state = {
            openProfile: false,
           /* openStudyplan: false,
            openCourse: false,*/
            openRatings: false,
            openMyCourse: false
        };

        this.profile = this.profile.bind(this);
    }

    profile(){
        location.href = '/#/profile';
    }

    getStudyplanName(studyplanItems) {
        return studyplanItems.map(item => {
            return (<ListItem key={item["name"]} button>
                <ListItemText primary={item["name"]} className={this.props.classes.nested}/>
            </ListItem>);
        })
    }

   getMyRatingsMyCourses(items) {
        console.log("list");
        return items.map(item => {
            return (<ListItem key={item["name"]} button onClick={() => this.handleMyCoursesRatings(item["_id"])}>
            <ListItemText primary={item["name"]} className={this.props.classes.nested}/>
            </ListItem>);
        })
   }

   handleMyCoursesRatings(courseId){
        location.href=`/#/courses/${courseId}`;
        location.reload();
   }

    handleClick(listItem) {
        switch (listItem) {
            case "Profile":
                this.setState({
                    openProfile: !this.state.openProfile
                }) ;
                break;
            case "My Studyplans":
               /* this.setState({
                    openStudyplan: !this.state.openStudyplan
                });*/
                location.href="/#/studyplans";
                break;
            case "My Ratings":
                this.setState({
                    openRatings: !this.state.openRatings
                }) ;
                break;
            case "Courses":
                /*this.setState({
                    openCourse: !this.state.openCourse
                });*/
                location.href=`/#/courses`;
                //location.reload();
                break;
            case "My Courses":
                this.setState({
                    openMyCourse: !this.state.openMyCourse
                })
        }
    }
    render() {
        const {classes} = this.props;
        let studentContent = <List>
                                <ListItem button onClick={() => this.handleClick("My Studyplans")}>
                                    <ListItemText color="primary" primary="My Studyplans"/>
                                </ListItem>
                                    {/*{this.state.openStudyplan ? <ExpandLess />: <ExpandMore/>}
                                </ListItem>
                                <Collapse in={this.state.openStudyplan}>
                                    <List component="div" disablePadding>
                                        {this.getStudyplanName(this.props.studyplans)}
                                    </List>
                                </Collapse>*/}
                                <ListItem button onClick={() => this.handleClick("My Ratings")}>
                                    <ListItemText color="primary" primary="My Ratings"/>
                                    {this.state.openRatings ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={this.state.openRatings}>
                                    <List component="div" disablePadding>
                                        {this.getMyRatingsMyCourses(this.props.courses)}
                                    </List>
                                </Collapse>
                                <ListItem button onClick={() => this.handleClick("Courses")}>
                                <ListItemText primary="Courses"/>
                                </ListItem>
                            {/*        {this.state.openCourse ? <ExpandLess />: <ExpandMore/>}
                                </ListItem>
                                <Collapse in={this.state.openCourse}>
                                    <List component="div" disablePadding>
                                        <ListItem button>
                                            <ListItemText primary="ExampleCourse" className={classes.nested}/>
                                        </ListItem>
                                    </List>
                                </Collapse>*!/*/}
                            </List>;

        let uniContent =  <List>
                            <ListItem button onClick={() => this.handleClick("My Courses")}>
                                <ListItemText primary="My Courses"/>
                                {this.state.openMyCourse ? <ExpandLess />: <ExpandMore/>}
                            </ListItem>
                            <Collapse in={this.state.openMyCourse}>
                                <List component="div" disablePadding>
                                    {this.getMyRatingsMyCourses(this.props.courses)}
                                </List>
                            </Collapse>
                        </List>;

        return (
            <Paper square={true} >
                <List className={classes.root} id="SideBarListID">

                    {this.props.loggedInUser.isUniversityUser ? uniContent : studentContent}
                    <ListItem button onClick={this.profile}>
                        <ListItemText> Profile</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText> Contact</ListItemText>
                    </ListItem>
                </List>
            </Paper>
        )
    }
}

export default withRouter(withStyles(sideBar)(SideBar));
