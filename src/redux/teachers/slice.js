import { createSlice } from "@reduxjs/toolkit";
import { featchTeachers } from "./operations";

const teacher = createSlice({
    name: "teacher",
    initialState:{
        data: [],
        isLoading: false,
        error: null,
        page: 1,
    },

    extraReducers:  builder =>{
        builder
        .addCase(featchTeachers.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(featchTeachers.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(featchTeachers.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})
export const { incrementPage } = teacher.actions;
export const teacherReduser = teacher.reducer;