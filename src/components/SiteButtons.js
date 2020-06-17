import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


export default function SiteButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
            <Button variant="contained" size="medium" color="primary" className={classes.margin} onClick={props.function}>
                {props.title}
            </Button>

        </div>
    );
}
