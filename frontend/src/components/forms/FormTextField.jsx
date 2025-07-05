import React from 'react';
import TextField from '@mui/material/TextField';

export default function LoginTextField(props) {

    const {label} = props

  return (
    <>
        <TextField 
            id="outlined-basic" 
            label={label} 
            variant="outlined" 
            fullWidth
            sx={
              {
                // Estilos para el borde
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#cbd5e1',
                  },
                  '&:hover fieldset': {
                    borderColor: '#8b5cf6',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'purple',
                  },
                },
                // Estilos para el label
                '& .MuiInputLabel-outlined': {
                  '&.Mui-focused': {
                    color: 'purple',
                  },
                },
              }
            }
            
        />
    </>
          
  );
}
