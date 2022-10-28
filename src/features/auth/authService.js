import axios from "axios"

const REGISTER_API_URL = "/api/auth/adduser/"
const LOGIN_API_URL = "/api/auth/loginuser"
const addUser = async(userData)=>{
        const response = await axios.post(REGISTER_API_URL, userData)

        if(response.data){
            localStorage.setItem("user", JSON.stringify(response.data))
        }

        return response.data
}

const login = async(userData)=>{
    const response = await axios.post(LOGIN_API_URL, userData)

    if(response.data){
        if(response.data.message !== "Invailid Credential!."){
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    }

    return response.data
}

const logout = async()=>{
    localStorage.removeItem("user")
}

const authService = {addUser, logout, login}

export default authService