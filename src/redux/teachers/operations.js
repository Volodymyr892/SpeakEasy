import { createAsyncThunk } from "@reduxjs/toolkit";
import { database, get, ref } from "../../../env/firebase";
// import { equalTo, orderByChild, query } from "firebase/database";

export const featchTeachers  = createAsyncThunk(
    "teashets/featchTeachers",
    async({ language, level, price },thunkAPI)=>{
        try {

            const teachersRef = ref(database,  "/");

            const response = await get(teachersRef);
            if (response.exists()) {
                let data = Object.values(response.val());

                if (language) {
                  data = data.filter((teacher) => teacher.languages?.includes(language));
                }
                if (level) {
                    data = data.filter((teacher) => teacher.levels?.includes(level));
                }
                if (price) {
                    data = data.filter((teacher) => teacher.price_per_hour === price);
                }
                return data;
              } else {
                return [];
              }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)