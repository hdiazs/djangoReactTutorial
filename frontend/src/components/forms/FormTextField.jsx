import React from 'react'
import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

export default function FormTextField(props) {

    const {label, name, control} = props

  return (
    <Controller
      name = {name}
      control={control}
      render = {
        ({
          field:{onChange, value},
          fieldState:{error},
          formState,

        }) => (
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
              onChange={onChange}
              value={value}
              error={!!error}
              helperText = {error?.message}            
          />      
        )
      }
    />
    
  );
}
