"use strict";
import React from 'react'

import CommentAndStars from "./CommentAndStars"
import Button from "@material-ui/core/Button"
import {Grid, Paper} from "@material-ui/core"

import {withStyles} from "@material-ui/core/styles"


/**
 * RatingWithButtons
 * Component to rate and save the rating
 * Autor: Maria
 */

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
    button: {
        marginRight: theme.spacing(2),
    },
});

class RatingWithButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lecturerRating: 0,
            examRating: 0,
            contentRating: 0,
            overallRating: 0,
            title: '',
            comment: '',
            userClicked: false
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        const overallRating = (this.state.lecturerRating + this.state.contentRating + this.state.examRating) / 3;

        if (overallRating !== prevState.overallRating) {
            this.setState({overallRating: overallRating})
        }
    }

    handleChange(target, value) {
        switch (target) {
            case "Lecturer":
                this.setState({
                    lecturerRating: value,
                });
                break;
            case "Content":
                this.setState({
                    contentRating: value
                });
                break;
            case "Exam":
                this.setState({
                    examRating: value
                });
                break;
            case "Title":
                this.setState({
                    title: value
                });
                break;
            case "Comment":
                this.setState({
                    comment: value
                });
                break;
            default:
                break;
        }
        this.setState({userClicked: true})
    }

    handleSave() {
        const rating = {
            lecturerRating: this.state.lecturerRating,
            contentRating: this.state.contentRating,
            examRating: this.state.examRating,
            overallRating: this.state.overallRating,
            title: this.state.title,
            comment: this.state.comment
        };
        this.props.rate(rating);
        this.handleCancel();
    }

    handleCancel() {
        this.setState({
            lecturerRating: 0,
            contentRating: 0,
            examRating: 0,
            overallRating: 0,
            title: '',
            comment: '',
            userClicked: false
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Grid>
                    <CommentAndStars rating={this.state} onChange={this.handleChange}/>
                    <Button
                        alignContent="center"
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.handleSave}
                        disabled={!this.state.userClicked}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={this.handleCancel}
                        disabled={!this.state.userClicked}
                        variant="contained">
                        Cancel
                    </Button>
                </Grid>
            </Paper>
        )
    };
}

export default withStyles(styles)(RatingWithButtons);