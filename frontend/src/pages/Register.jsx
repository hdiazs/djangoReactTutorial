import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Axios from '../components/Axios'
import { Box } from '@mui/material'
import FormTextField from '../components/forms/FormTextField'
import FormPassField from '../components/forms/FormPassField'
import FormButton from '../components/forms/FormButton'
import '../styles/login.css'

const Register = () => {

    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()
    const submission = (data) => {

        console.log(data);
        
        Axios.post(
            `register/`,
            {
                email : data.email,
                password : data.password,
            }
        ).then(()=>{
            navigate(`/`)
        })
    }

    return(
        <>
            <div className="loginBackground">

                <form 
                    onSubmit={handleSubmit(submission)} 
                    className={`
                        w3-white
                        w3-display-middle
                        w3-bar 
                        w3-bar-block 
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
                            name = {
                                "email"
                            }
                            control = {
                                control
                            }
                            
                        />
                    </Box>

                    <Box className={"w3-bar-item"}>

                        <FormPassField

                            label={
                                "Password"
                            }
                            name = {
                                "password"
                            }
                            control = {
                                control
                            }
                        />

                    </Box>
                    <Box className={"w3-bar-item"}>

                        <FormPassField

                            label={
                                "Confirm password"
                            }
                            name = {
                                "password2"
                            }
                            control = {
                                control
                            }
                        />

                    </Box>

                    <Box className={"w3-bar-item"}>

                        <FormButton
                            type = {
                                "submit"
                            }
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

                </form> 
                                    
            </div>
        </>
    )
}

export default Register