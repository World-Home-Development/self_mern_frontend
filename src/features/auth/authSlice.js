import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService"
const initialState = {
    user:null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:""
}


export const addUser = createAsyncThunk("auth",(userData, thunkAPI)=>{
    try {
        console.log(userData)
        return authService.addUser(userData)

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)        
    }
})


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset: () => initialState,
    },extraReducers:(builder)=>{
        builder
        .addCase(addUser.pending, (state)=>{state.isLoading=true})
        .addCase(addUser.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(addUser.rejected,(state, action)=>{
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
}
})

export const {reset} = authSlice.actions

export default authSlice.reducer