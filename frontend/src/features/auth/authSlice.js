import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'


//Get Person from localStorage
const person = JSON.parse(localStorage.getItem('person'))

const initialState = {
    person: person ? person : null,
    isError: false,
    isLoading: false,
    message: ''
}

//Register person
export const register = createAsyncThunk('auth/register', async(person, thunkAPI)=>{
   try {
    return await authService.register(person)
   } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
   }
})

//Login person
export const login = createAsyncThunk('auth/login', async(person, thunkAPI)=>{
   try {
    return await authService.login(person)
   } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
   }
})

export const logout = createAsyncThunk('auth/logout', async () =>{
    await authService.logout();
})
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) =>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = '' 
        }

    },
    extraReducers: (builder) =>{
        builder
        //Register
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.person = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.person = null
        })
        //Login
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.person = action.payload
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.person = null
        })

        //Logout
        .addCase(logout.fulfilled, (state) => {
            state.person = null
        })
    }

})

export const {reset} =authSlice.actions
export default authSlice.reducer