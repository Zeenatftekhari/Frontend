import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    button: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        alignItems: 'center !important',
        height: '54px !important',
        width: '100% !important',
        background: 'white !important',
        color: 'black !important',
        border: '1px solid black !important',
        textTransform: "initial !important"
    },
});

const CustomButton = ({ lable, fullWidth, icon, onClick = () => { } }) => {
    const classes = useStyles();

    return (
        <Button
            onClick={onClick}
            disableRipple
            variant="outlined"
            endIcon={icon}
            className={classes.button}
        >
            <div>
                {lable}
            </div>
            <div>
                {/* {icon} */}
            </div>
        </Button>
    );
};

export default CustomButton;
