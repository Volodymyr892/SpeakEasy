import { createAsyncThunk } from "@reduxjs/toolkit";
// import { get, ref } from "firebase/database";
import { database, get, ref } from "../../../firebase";
import { limitToFirst, orderByChild, query, startAt } from "firebase/database";

export const featchTeachers  = createAsyncThunk(
    "teashets/featchTeachers",
    async({page,limit},thunkAPI)=>{
        try {

            const startAtIndex = (page - 1) * limit;

            const teachersRef = query(
                ref(database,  "/"),
                orderByChild("id"),
                startAt(startAtIndex),
                limitToFirst(limit),
            )

            const response = await get(teachersRef);
            console.log("Response:", response);
            console.log("Чи існує відповідь:", response.exists());
            console.log("Дані відповіді:", response.val());
            if (response.exists()) {
                console.log("🚀 ~ async ~ response:", response.val())
                return response.val();
              } else {
                console.log("Дані не знайдені.");
                return [];
              }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)