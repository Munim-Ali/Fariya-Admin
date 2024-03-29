import axios from 'axios'

const API_URL = 'http://localhost:8000/api/users/'

//Set user function

const createUser = async (userData) => {
    console.log("userData in services", userData)

    const response = await axios.post(API_URL, userData)
    if(response.data) {
        localStorage.setItem('users', JSON.stringify(response.data))
    }

    return response.data
}

const userService = {
    createUser
}
export default userService