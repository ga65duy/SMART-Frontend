import React from "react";
import TextField from '@material-ui/core/TextField';

export default class SearchBar extends React.Component {
    render() {
        return (
            <TextField
                style={{width: 800}}
                placeholder="Search studyplan"
                margin="normal"
                variant="outlined"
            />
        )
    }
}