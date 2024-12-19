import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logout, refreshUser, registerUser } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState:{
        user:{
            name: null,
            email:null,
            error: null,
    },
        token:null,
        isLoggedIn: false,
    },
    extraReducers: builder =>{
        builder
        .addCase(registerUser.pending, (state) =>{
            state.isLoggedIn = false;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action)=>{
            state.user = action.payload.email;
            console.log("🚀 ~ .addCase ~ state.user:", state.user)
            state.name =  action.payload.name;
            state.token = action.payload.uid || null;
            console.log("🚀 ~ .addCase ~ state.token:", state.token)
            state.isLoggedIn = true;
            state.error = null;

            if(state.token){
                localStorage.setItem("token", state.token)
                localStorage.setItem("email", JSON.stringify(state.user));
                localStorage.setItem("name", state.name); 
            }
        })
        .addCase(registerUser.rejected, (state, action) =>{
            state.isLoggedIn = false;
            state.error = action.payload;
        })

        .addCase(loginUser.pending, state =>{
            state.isLoggedIn = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.user = action.payload.email;
            state.name= action.payload.name; // Правильна структура
            state.token = action.payload.uid || null; // Токен можна додати пізніше
            state.isLoggedIn = true;
            state.error = null;

            if(state.token){
                localStorage.setItem("token", state.token)
                localStorage.setItem("email", JSON.stringify(state.user));
                localStorage.setItem("name", state.name); 
            }
        })
        .addCase(loginUser.rejected, (state, action) =>{
            state.isLoggedIn = false;
            state.error = action.payload;
        })
        .addCase(refreshUser.pending, (state)=>{
            state.isLoggedIn=true;
        })
        .addCase(refreshUser.fulfilled, (state, action)=>{
            state.user = action.payload.email;
            state.name= action.payload.name; 
            state.token = action.payload.uid;
            state.isLoggedIn = true;
            state.error = null;

            
                localStorage.setItem("token", state.token)
                localStorage.setItem("email", state.user);
                localStorage.setItem("name", state.name); 
        })
        .addCase(refreshUser.rejected, (state,action) => {
            state.email = null;
            state.name= null;
            state.token = null;
            state.isLoggedIn = false;
            state.error = action.payload;
        })
        .addCase(logout.fulfilled, (state)=>{
            state.user = { name: null, email: null, error: null };
            state.token = null;
            state.isLoggedIn = false;
            state.error = null;
        })
    }

})

export const authReduser = authSlice.reducer;