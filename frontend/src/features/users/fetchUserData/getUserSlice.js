import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import getUserService from './getUserService'



const initialState = {
    users: [],
    isError: false,
    isLoading: false,
    isSucces: false,
    message: ''

}

export const getUser = createAsyncThunk('users/getAll', async (_, thunkAPI) => {
    try {
        return await getUserService.getUser()
        
    } catch (error) {
        const message = (error.response && 
        error.response.data && 
        error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getUserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSucces = true
            state.users = action.payload
            console.log(state.users)
        })
        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message(action.payload)
        })
    }

})

export const {reset} = getUserSlice.actions
export default getUserSlice.reducer