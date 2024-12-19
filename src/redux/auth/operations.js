import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../../firebase"

export const registerUser = createAsyncThunk(
    "auth/register",
    async({name, email, password}, thunkAPI)=>{
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log("🚀 ~ async ~ response:", response.user)

            await updateProfile(response.user, {
                displayName: name,
            })

            return {
                uid: response.user.uid,
                email: response.user.email,
                name: response.user.displayName,
            }
        } catch (error) {
            console.error("Error during registration:", error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const loginUser = createAsyncThunk(
    "auth/login",
    async({email,password},thunkAPI)=>{
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);

            return {
                uid:response.user.uid,
                email: response.user.email,
                name: response.user.displayName,
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const refreshUser = createAsyncThunk(
    "auth/refreshUser",
    async({ token, email, name }, thunkAPI)=>{
        // const token = localStorage.getItem("token")
        if(!token || !email || !name){
            return thunkAPI.rejectWithValue("No token found");
        }
        try {
            const user = auth.currentUser;

            if (user  || (email && name)) {
                return {
                    uid: user ? user.uid : null,
                    email,
                    name,
                    token,
                };
            } else {
                throw new Error("User not authentication")
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const logout = createAsyncThunk(
    "auth/logout",
    async(_, thunkAPI)=>{
        try {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            localStorage.removeItem("name");

            return {}
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)