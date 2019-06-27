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
    // nestedSecondLevel: {
    //     paddingLeft: theme.spacing(6)
    //
    // }
});


class SideBar extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            openProfile: false,
            openStudyplan: false,
            openRating: false,
            openCourse: false
        };
    }
    getStudyplanName(studyplanItems) {
        return studyplanItems.map(item => {
            return (<ListItem key={item["name"]} button >
                <ListItemText primary={item["name"]} className={this.props.classes.nested}/>
            </ListItem>);
        })
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
            case "Ratings":
                this.setState({
                    openRatings: !this.state.openRating
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
                    <ListItem button href="/studyplans" onClick={() => this.handleClick("Studyplans")}>
                        <ListItemText color="primary" primary="Studyplans"/>
                        {this.state.openStudyplan ? <ExpandLess />: <ExpandMore/>}
                    </ListItem>
                    <Collapse in={this.state.openStudyplan}>
                        <List component="div" disablePadding>
                            {this.getStudyplanName(this.props.studyplans)}
                        </List>
                    </Collapse>
                    <ListItem button onClick={() => this.handleClick("Rating")}>
                        <ListItemText color="primary" primary="Rating"/>
                        {this.state.openRating ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.openRating}>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="ExampleRating"/>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={() => this.handleClick("Courses")}>
                        <ListItemText primary="Courses"/>
                        {this.state.openCourse ? <ExpandLess />: <ExpandMore/>}
                    </ListItem>
                    <Collapse in={this.state.openCourse}>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <ListItemText primary="ExampleCourse" className={classes.nested}/>
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button>
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

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(sideBar)(SideBar);
