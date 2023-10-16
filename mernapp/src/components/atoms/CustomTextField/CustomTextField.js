import React from 'react';
import {

    InputAdornment,
    TextField,

} from "@mui/material";


const CustomTextField = ({
    placeholder,
    fullWidth,
    disabled = true,
    InputProps,
    icon,
    onClick = () => { },

}) => {
    const placeholderStyle = {
        color: 'red',  // Dark color for the placeholder
    };

    return (
        <TextField
            placeholder={placeholder}
            fullWidth={fullWidth}
            disabled={disabled}
            onClick={onClick}
            InputProps={{
                style: placeholderStyle,
                endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
            }}
        />
    );
};

export default CustomTextField;
