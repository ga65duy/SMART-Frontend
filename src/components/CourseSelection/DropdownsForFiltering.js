import React from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

/**
 * DropdownsForFiltering
 * Drop down for University, Field of study and textfield for course filtering
 * Author: Maria
 */

export default class DropdownsForFiltering extends React.Component{

    constructor(props){
        super(props);
        this.state =({
             courseSearch: "",
             uniId: "",
             fosId: ""
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleUniDropdown = this.handleUniDropdown.bind(this);
        this.handleFosDropdown = this.handleFosDropdown.bind(this);
    }

    showInDropdown(items) {
        return items.map((item, i) => {
            return (<MenuItem key={i} value={item._id}> {item.name} </MenuItem>);
        })
    }


    handleChange(e){
        const value = e.target.value;
        this.setState({
            courseSearch: value
        });
        this.props.handleTextField(value);
    }

    handleUniDropdown(e) {
        const value = e.target.value;
        this.setState({
            uniId: value
        });

        this.props.onUniDropdown(value);
    }

    handleFosDropdown(e) {
        const value = e.target.value;
        this.setState({
            fosId: value
        });
        this.props.onFosDropdown(value);
    }

    render() {
        return (
            <Box m={2}>
            <Grid container direction="row" justify={"space-between"}>
                <Grid item spacing={2}>
                <FormControl >
                    <InputLabel> University </InputLabel>
                    <Select
                        style={{minWidth: 200,maxWidth: 200}}
                        value={this.state.uniId}
                        onChange={this.handleUniDropdown}
                    >
                        {this.showInDropdown(this.props.unis)}
                    </Select>
                </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel> Field of study </InputLabel>
                        <Select
                            style={{minWidth: 200,maxWidth: 200}}
                            value={this.state.fosId}
                            onChange={this.handleFosDropdown}
                        >
                            {this.showInDropdown(this.props.fos)}
                        </Select>
                    </FormControl>
                </Grid>
                <Box m={2}>
                    <TextField
                        style={{minWidth: 220,maxWidth: 200}}
                        placeholder={"Search your course"}
                        value={this.state.courseSearch}
                        onChange={this.handleChange}/>
                </Box>
            </Grid>
            </Box>
        )
    }
}

