import React from "react";

import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const searchBar = theme => ({
    root: {
    },
});

class SearchBar extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <TextField
                placeholder="Search studyplan"
                variant="outlined" margin="dense"
            />
        )
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(searchBar)(SearchBar);