import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../../firebase.js"

export const registerUser = createAsyncThunk(
    "auth/register",
    async({name, email, password}, thunkAPI)=>{
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log("🚀 ~ async ~ response:", response)

            await updateProfile(response.user, {
                displauName: name,
            })

            return {
                uid: response.user.uid,
                email: response.user.email,
                name: response.user.displayName,
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)