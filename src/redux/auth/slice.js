import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        user:{
            name: null,
            email:null,
            password:null,
            error: null,
    },
        token:null,
        isLoggedIn: false,
    },
    extraReducers: builder =>{
        builder
    }

})

export const authReduser = authSlice.reducer;