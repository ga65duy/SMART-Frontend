import React from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import IconButton from '@material-ui/core/IconButton';

import Settings from '@material-ui/icons/Settings';

/**
 * FilterComponents
 * Drop down for Area,Ects,Rating
 * Author: Maria
 */

const ects = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const rating = ["", 1, 2, 3, 4, 5];
const semester = ["", "SS", "WS"];

export default class FilterComponents extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            areaSearch: "",
            ectsSearch: "",
            ratingSearch: "",
            nameSearch: "",
            semesterSearch: "",
            displayFilters: false,
        });

        this.handleAreaDropdown = this.handleAreaDropdown.bind(this);
        this.handleEctsDropdown = this.handleEctsDropdown.bind(this);
        this.handleRatingDropdown = this.handleRatingDropdown.bind(this);
        this.handleNameSearch = this.handleNameSearch.bind(this);
        this.handleSemesterDropdown = this.handleSemesterDropdown.bind(this);
        this.handleSettingsClick=this.handleSettingsClick.bind(this);
        this.displayFilters=this.displayFilters.bind(this);
    }

    showInDropdown(items) {
        return items.map((item, i) => {
            return (<MenuItem key={i} value={item}> {item} </MenuItem>);
        })
    }

    triggerFilter() {
        const selections = {
            ects: this.state.ectsSearch,
            area: this.state.areaSearch,
            rating: this.state.ratingSearch,
            name: this.state.nameSearch,
            semester: this.state.semesterSearch
        };
        this.props.onSelection(selections)
    }

    handleNameSearch(e) {
        const value = e.target.value;
        this.setState({
            nameSearch: value
        }, () => this.triggerFilter());
    }

    handleAreaDropdown(e) {
        const value = e.target.value;
        this.setState({
            areaSearch: value
        }, () => this.triggerFilter());
    }

    handleEctsDropdown(e) {
        const value = e.target.value;
        this.setState({
            ectsSearch: value
        }, () => this.triggerFilter());
    }

    handleRatingDropdown(e) {
        const value = e.target.value;
        this.setState({
            ratingSearch: value
        }, () => this.triggerFilter());
    }

    handleSemesterDropdown(e) {
        const value = e.target.value;
        this.setState({
            semesterSearch: value
        }, () => this.triggerFilter())
    }

    handleSettingsClick(e){
        let a = !this.state.displayFilters;
        this.setState({
            displayFilters: a,
        })
    }


    displayFilters(){
        if(this.state.displayFilters){
            return(

                    <Grid container direction="row" justify={"space-between"}>
                        <Grid item >
                            <FormControl>
                                <InputLabel> Area </InputLabel>
                                <Select
                                    style={{minWidth: 200, maxWidth: 200}}
                                    value={this.state.areaSearch}
                                    onChange={this.handleAreaDropdown}
                                >
                                    {this.showInDropdown(this.props.areas)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel> Ects </InputLabel>
                                <Select
                                    style={{minWidth: 200, maxWidth: 200}}
                                    value={this.state.ectsSearch}
                                    onChange={this.handleEctsDropdown}
                                >
                                    {this.showInDropdown(ects)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel> Min. Rating </InputLabel>
                                <Select
                                    style={{minWidth: 200, maxWidth: 200}}
                                    value={this.state.ratingSearch}
                                    onChange={this.handleRatingDropdown}
                                >
                                    {this.showInDropdown(rating)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel> Semester </InputLabel>
                                <Select
                                    style={{minWidth: 200, maxWidth: 200}}
                                    value={this.state.semesterSearch}
                                    onChange={this.handleSemesterDropdown}
                                >
                                    {this.showInDropdown(semester)}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>


            )
        }
        else {
            return (<div/>);
        }
    }

    render() {
        return (
            <Box m={2}>
                <Grid container direction={"column"}>
                    < Grid item>
                        <TextField
                            placeholder="Search coursename"
                            variant="outlined"
                            margin="dense"
                            value={this.state.nameSearch}
                            onChange={this.handleNameSearch}
                        />
                    </Grid>

                    <Grid item>
                        <IconButton  onClick={this.handleSettingsClick}>
                            <Settings />
                        </IconButton>
                    </Grid>

                    {this.displayFilters()}


                </Grid>
            </Box>
        )
    }
}

