import React from "react";
import {FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select} from "@material-ui/core";
import{withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

/**
 * DropdownsForFiltering
 * Drop down for University, Field of study and textfield for course filtering
 * Author: Maria
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
});



export class DropdownsForFiltering extends React.Component{

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
        console.log("handleChage")
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
        console.log(this.state);
        return (
            <Grid container direction="row" justify={"space-between"}>
                <Grid item>
                <FormControl>
                    <InputLabel> University </InputLabel>
                    <Select
                        style={{maxWidth: 950}}
                        value={this.state.uniId}
                        autoWidth={true}
                        onChange={this.handleUniDropdown}
                    >
                        {this.showInDropdown(this.props.unis)}
                    </Select>
                    {/*<FormHelperText>{this.state.textUni}</FormHelperText>*/}
                </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel> Field of study </InputLabel>
                        <Select
                            style={{maxWidth: 950}}
                            value={this.state.fosId}
                            onChange={this.handleFosDropdown}
                            autoWidth={true}

                        >
                            {this.showInDropdown(this.props.fos)}
                        </Select>
                        {/*<FormHelperText>{this.state.textUni}</FormHelperText>*/}
                    </FormControl>
                </Grid>
                <Grid item>
                    <TextField
                        value={this.state.courseSearch}
                        onChange={this.handleChange}/>
                </Grid>
            </Grid>
        )
    }
}


