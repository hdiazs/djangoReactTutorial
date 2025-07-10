import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Axios from '../components/Axios'
import { Box } from '@mui/material'
import Swal from 'sweetalert2'
import FormTextField from '../components/forms/FormTextField'
import FormButton from '../components/forms/FormButton'
import '../styles/login.css'

const PasswordResetRequest = () => {

    const navigate = useNavigate()
    const {handleSubmit, control} = useForm()
    const submission = (data) => {        
        Axios.post(
            `api/password_reset`,
            {
                email : data.email,
            }
        ).then(()=>{
            Swal.fire({
                title: 'Sent it!',
                text: 'If your email is registered, you should receive a password reset link',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(()=>{
                navigate('/')
            })
        }).catch((error) => {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(()=>{
                navigate('/request/password_reset')
            })
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
                            height:"40%", 
                            width:"40%"
                        }
                    }
                >
                    <Box className={"w3-bar-item"}>

                        <Box className={"w3-center"}>
                            <h2>Request password reset</h2>
                        </Box>

                    </Box>
                    <Box 
                        className={"w3-bar-item"}
                    >
                        <FormTextField
                            
                            label={
                                "E-mail"
                            }
                            name={
                                "email"
                            }
                            control={
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
                                "Send e-mail"
                            }
                        />

                    </Box>
                    <Box className={"w3-bar-item w3-center"}>

                        <Link to="/register" className="w3-button">
                                No account yet?, Sign up!
                        </Link>

                    </Box>
                        
                </form>
                
            </div>
        </>
    )
}

export default PasswordResetRequest