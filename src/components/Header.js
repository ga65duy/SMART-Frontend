"use strict";


import React from 'react';
import {withRouter} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MediaQuery from 'react-responsive';
import KebabMenu from './KebabMenu';
import ProfileIconButton from './ProfileIconButton'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import UserService from '../services/UserService';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#11175e",
        },
        secondary: {
            main: "#ffffff",
        },
        error: {
            main: "#d32f2f",
        },
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flex: 1,
    },
}));


class Header extends React.Component {

    constructor(props) {
        super(props);
    }


    handleClick() {

    }

    switchUniversityUser() {

        if (UserService.isUniversityUser()) {
            return (
                <Button color="primary" href="/#/courses">My Courses </Button>
            )
        } else {
            return (
                <Button edge="start" color="primary" href="/#/studyplans">My Studyplans</Button>
            )
        }

    }


    render() {
        const classes = useStyles;
        const pathway = this.props.location.pathname.split('/').slice(1, -1);
        const lastLink = this.props.location.pathname.split('/').slice(-1);

        return (
            <MediaQuery query="(orientation: landscape)">
                {(matches) => {
                    if (matches) {
                        return <ThemeProvider theme={theme}>
                            <div className={classes.root}>
                                <AppBar position="static" color="secondary">
                                    <Toolbar>
                                        <img href="/" src={require('../Smart.jpg')}/>

                                        <Breadcrumbs separator="›" aria-label="Breadcrumb" color="primary">
                                            <Link color="primary" href="/#/" to="/#/">
                                                Home
                                            </Link>
                                            {pathway.map((p) => <Link key={p} color="primary"
                                                                      href={"/#/" + p}> {p}</Link>)}
                                            <Typography color="primary">{lastLink}</Typography>
                                        </Breadcrumbs>
                                        <Typography style={{flex: 1}}/>


                                        <Button edge="start" color="primary" href="/">Home</Button>
                                        <Typography color="primary">|</Typography>
                                        {this.switchUniversityUser()//if user =university change to courses, if user unregistered send to login/register}
                                        }
                                        {//<Typography color="primary">|</Typography>
                                            // <Button edge="start" color="primary" href="/#/contact">Contact</Button>

                                            //     <Typography color="primary">|</Typography>
                                            //    < Button edge="start" color="primary" href="/#/profile">Profile</Button>
                                        }

                                        <ProfileIconButton/>
                                    </Toolbar>
                                </AppBar>
                            </div>
                        </ThemeProvider>
                    } else {
                        return <ThemeProvider theme={theme}>
                            <div className={classes.root}>
                                <AppBar position="static" color="secondary">
                                    <Toolbar>
                                        <img src={require('../Smart.jpg')}/>
                                        <Breadcrumbs separator="›" aria-label="Breadcrumb" color="primary">
                                            <Link color="primary" href="/" to="/">
                                                Home
                                            </Link>
                                            {pathway.map((p) => <Link key={p} color="primary" href={p}> {p}</Link>)}
                                            <Typography color="primary">{lastLink}</Typography>
                                        </Breadcrumbs>
                                        <Typography style={{flex: 1}}/>


                                        <KebabMenu/>
                                        <ProfileIconButton/>


                                    </Toolbar>
                                </AppBar>
                            </div>
                        </ThemeProvider>;
                    }
                }}
            </MediaQuery>


        );
    }
}

export default withRouter(Header);


