import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import FormTextField from '../components/forms/FormTextField'
import FormPassField from '../components/forms/FormPassField'
import FormButton from '../components/forms/FormButton'
import '../styles/login.css'

const Login = () => {

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
                            height:"40%", 
                            width:"20%"
                        }
                    }
                >
                    <Box className={"w3-bar-item"}>

                        <Box className={"w3-center"}>
                            <h2>Login for Auth App</h2>
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

                        <FormButton
                            label = {
                                "Sign in"
                            }
                        />

                    </Box>
                    <Box className={"w3-bar-item w3-center"}>

                       <Link to="/register" className="w3-button">
                            No account yet?, Sign up!
                       </Link>

                    </Box>
                    
                </Box>
                
            </div>
        </>
    )
}

export default Login