import React from "react"

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


export default class SideBar extends React.Component {

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
        return (
            <List >
                <ListItem button >
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem button onClick={() => this.handleClick("Profile")}>
                    <ListItemText primary="Profile" />
                    {this.state.openProfile ? <ExpandLess />: <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state.openProfile} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button onClick={() => this.handleClick("Studyplans")} className={useStyles.nested} >
                            <ListItemText primary="Studyplans"/>
                            {this.state.openStudyplan ? <ExpandLess />: <ExpandMore/>}
                        </ListItem>
                        <ListItem button onClick={() => this.handleClick("Ranking")} className={useStyles.nested} >
                            <ListItemText primary="Ranking"/>
                            {this.state.openRanking ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={() => this.handleClick("Courses")}>
                    <ListItemText primary="Courses"/>
                    {this.state.openCourse ? <ExpandLess />: <ExpandMore/>}
                </ListItem>
                <Collapse in={this.state.openCourse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={useStyles.nested}>
                            <ListItemText primary="ExampleCourse"/>
                        </ListItem>
                    </List>
                </Collapse>
                {/*Todo: add method to link to contact side*/}
                <ListItem button>
                    <ListItemText> Contact</ListItemText>
                </ListItem>
            </List>
        )
    }
}

