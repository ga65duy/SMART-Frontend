import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: "10px",
        textAlign: "center",
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
});

class StudyplanListRow extends React.Component{
    constructor(props){
        super(props);
    }

    render () {
        const {classes} = this.props;
   /* return (
            <Paper className={classes.paper}>
                <Grid container alignItems={"center"} >
                    <Grid item >
                        <Typography>
                            {this.props.name}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography>{this.props.img}</Typography>
                    </Grid>
                    <Grid item  container>
                        <Grid item container direction="column" >
                            <Grid item>
                                <Button>Load</Button>
                            </Grid>
                            <Grid item>
                                <Button>Delete</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
    )};*/

   return(

       <Paper style={{flex:1}}>
           <Grid container direction="row" alignItems="center" justify="space-between">
               <div>
               <Typography> {this.props.name}</Typography>
               </div>
               <div>
               <Typography> {this.props.img} </Typography>
               </div>
               <div>
               <Grid container direction="column" >
                   <Button> Load </Button>
                   <Button> Delete </Button>
               </Grid>
               </div>

           </Grid>

       </Paper>

    );
    }
};
StudyplanListRow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudyplanListRow);

