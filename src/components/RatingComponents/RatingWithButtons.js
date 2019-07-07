"use strict";
import React from 'react';

import CommentAndStars from "./CommentAndStars"
import Button from "@material-ui/core/Button"
import {Grid} from "@material-ui/core"
import {withStyles} from "@material-ui/core/styles"

/**
 * RatingWithButtons
 * Component to rate and save the rating
 * Autor: Maria
 */

const styles = theme => ({
    button: {
        marginRight: theme.spacing(2),
    },
});

class RatingWithButtons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lecturerRating: 0,
            examRating: 0,
            contentRating: 0,
            overallRating: 0,
            title: '',
            comment:''
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        const overallRating = (this.state.lecturerRating + this.state.contentRating + this.state.examRating)/3;

        if(overallRating !== prevState.overallRating){
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
            case "Exam":
                this.setState({
                    examRating: value
                });
                break;
            case "Content":
                this.setState({
                    contentRating: value
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
    }

    handleSave(){
        const rating = {
            lecturerRating: this.state.lecturerRating,
            contentRating:this.state.examRating,
            examRating: this.state.contentRating,
            overallRating: this.state.overallRating,
            title: this.state.title,
            comment: this.state.comment
        };
        this.props.rate(rating);
    }

    handleCancel(){
        this.setState({
            lecturerRating: 0,
            examRating: 0,
            contentRating: 0,
            overallRating: 0,
            title: '',
            comment:''})
    }
    render() {
        const {classes} = this.props;
        return (
            <Grid>
            <CommentAndStars rating={this.state} onChange={this.handleChange}/>
                <Button
                    alignContent="center"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={this.handleSave}
                >
                Save
                </Button>
                <Button
                    onClick={this.handleCancel}
                    variant="contained">
                    Cancel
                </Button>
            </Grid>
        )
    };
}
export default withStyles(styles)(RatingWithButtons)