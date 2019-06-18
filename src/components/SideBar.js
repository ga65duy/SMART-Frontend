import React from "react"

import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

import Paper from  "@material-ui/core/Paper"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const sideBar = theme => ({
    root: {
        width: '100%',

        //maxWidth: 200,backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    nestedSecondLevel: {
        paddingLeft: theme.spacing(6)

    }
});


class SideBar extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            openProfile: false,
            openStudyplan: false,
            openRanking: false,
            openCourse: false
        };
    }

    handleClick(listItem) {
        switch (listItem) {
            case "Profile":
                this.setState({
                    openProfile: !this.state.openProfile
                }) ;
                break;
            case "Studyplans":
                this.setState({
                    openStudyplan: !this.state.openStudyplan
                });
                break;
            case "Ranking":
                this.setState({
                    openRanking: !this.state.openRanking
                }) ;
                break;
            case "Courses":
                this.setState({
                    openCourse: !this.state.openCourse
                });
                break;
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <Paper square={true} >
            <List className={classes.root} id="SideBarListID">
                <ListItem button >
                    <ListItemText color="primary" primary="Home"/>
                </ListItem>
                <ListItem button onClick={() => this.handleClick("Profile")}>
                    <ListItemText color="primary" primary="Profile" />
                    {this.state.openProfile ? <ExpandLess />: <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state.openProfile}>
                    <List component="div" disablePadding>
                        <ListItem button onClick={() => this.handleClick("Studyplans")} className={classes.nested} >
                            <ListItemText color="primary" primary="Studyplans"/>
                            {this.state.openStudyplan ? <ExpandLess />: <ExpandMore/>}
                        </ListItem>
                        <Collapse in={this.state.openStudyplan}>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nestedSecondLevel}>
                                    <ListItemText primary="ExampleStudyplan"/>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={() => this.handleClick("Ranking")} className={classes.nested} >
                            <ListItemText color="primary" primary="Ranking"/>
                            {this.state.openRanking ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.openRanking}>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nestedSecondLevel}>
                                    <ListItemText primary="ExampleRanking"/>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button className={classes.nested}>
                            <ListItemText> Account</ListItemText>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={() => this.handleClick("Courses")}>
                    <ListItemText primary="Courses"/>
                    {this.state.openCourse ? <ExpandLess />: <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state.openCourse}>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="ExampleCourse"/>
                        </ListItem>
                    </List>
                </Collapse>
                {/*Todo: add method to link to contact side*/}
                <ListItem button>
                    <ListItemText> Contact</ListItemText>
                </ListItem>
            </List>
            </Paper>
        )
    }
}

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(sideBar)(SideBar);
