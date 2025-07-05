import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function FormPassField(props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const {label} = props

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
   
        <FormControl 
          variant="outlined"
          fullWidth
        >
          <InputLabel 
            htmlFor="outlined-adornment-password"
            sx={
              {
                color: 'gray', // Color normal
                '&.Mui-focused': {
                  color: 'purple', // Color cuando el input está enfocado
                },
              }
            }
          >
            {label}
          </InputLabel>
          <OutlinedInput
            sx={
              {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#d1d5db',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#8b5cf6',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'purple',
                },
              }
            }
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={label}
            
          />
        </FormControl>
        
  );
}
