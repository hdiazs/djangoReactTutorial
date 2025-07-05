import * as React from 'react';
import Button from '@mui/material/Button';

export default function FormButton(props) {

    const {label} = props

    return (
        <Button 
            variant="contained"
            className="w3-purple"
            fullWidth
        >
            {label}
        </Button>
    );

}
