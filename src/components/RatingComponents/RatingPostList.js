"use strict";
import React from 'react'
import {Grid} from "@material-ui/core"
import RatingPost from "./RatingPost"

/**
 * RatingPostList
 * Shows all Ratings for a course
 * Autor: Maria
 */
export class RatingPostList extends React.Component {
    constructor(props) {
        super(props)
    }

    getRatingPostListItems(ratings) {
        const latestPosts = ratings.sort(function (a, b) {
            const aDate = a.createdAt;
            const bDate = b.createdAt;
            return new Date(bDate) - new Date(aDate);
        });

        return latestPosts.map(item => {
            return (<Grid item>
                <RatingPost rating={item}
                            deleteRating={this.props.deleteRating}
                            loggedInUser={this.props.loggedInUser}/>
            </Grid>);
        })
    }

    render() {
        return (
            <Grid style={{maxHeight: 500, overflow: 'auto'}}>
                {this.getRatingPostListItems(this.props.ratings)}
            </Grid>
        )
    };
}