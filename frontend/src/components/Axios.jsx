import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/'

const Axios = axios.create({

    baseURL: baseUrl,
    timeout: 5000,
    headers:{
        "Content-Type":"application/json",
        accept:"application/json",
    }

})

Axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("Token")

        if(token){
            config.headers.Authorization=`Token ${token}`
        }
        else{
            config.headers.Authorization=``   
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

Axios.interceptors.response.use(
    (response)=>{
        return response
    },
    (error) => {
        if(error.response && error.response.status === 401){
            localStorage.removeItem('Token')
            window.location.href = '/'
        }
    }
)
export default Axios