import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import FormTextField from '../components/forms/FormTextField'
import FormPassField from '../components/forms/FormPassField'
import FormButton from '../components/forms/FormButton'
import '../styles/login.css'

const Register = () => {

    return(
        <>
            <div className="loginBackground">
                <Box 
                    className={`
                        w3-white 
                        w3-bar 
                        w3-bar-block 
                        w3-display-middle                        
                    `} 
                    style={
                        { 
                            minWidth:300, 
                            height:"50%", 
                            width:"20%"
                        }
                    }
                >
                    <Box className={"w3-bar-item"}>

                        <Box className={"w3-center"}>
                            <h2>User registration</h2>
                        </Box>

                    </Box>
                    <Box 
                        className={"w3-bar-item"}
                    >
                        <FormTextField
                            
                            label={
                                "E-mail"
                            }
                            
                        />
                    </Box>

                    <Box className={"w3-bar-item"}>

                        <FormPassField

                            label={
                                "Password"
                            } 
                        />

                    </Box>
                    <Box className={"w3-bar-item"}>

                        <FormPassField

                            label={
                                "Confirm password"
                            } 
                        />

                    </Box>

                    <Box className={"w3-bar-item"}>

                        <FormButton
                            label = {
                                "Register"
                            }
                        />

                    </Box>
                    <Box className={"w3-bar-item w3-center"}>

                       <Link to="/" className="w3-button">
                            Do you have an account?, Sign in!
                       </Link>

                    </Box>
                    
                </Box>
                
            </div>
        </>
    )
}

export default Register