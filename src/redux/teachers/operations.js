import { createAsyncThunk } from "@reduxjs/toolkit";
import { database, get, ref } from "../../../firebase";
import { equalTo, orderByChild, query } from "firebase/database";

export const featchTeachers  = createAsyncThunk(
    "teashets/featchTeachers",
    async({ language, level, price },thunkAPI)=>{
        try {

            const teachersRef = ref(database,  "/");
            // let firebaseQuery = query(teachersRef);
            // if (language) {
            //     firebaseQuery = query(firebaseQuery, orderByChild("languages"), equalTo(language));
            //   }
            //   if (level) {
            //     firebaseQuery = query(firebaseQuery, orderByChild("levels"), equalTo(level));
            //   }
            //   if (price) {
            //     firebaseQuery = query(firebaseQuery, orderByChild("price_per_hour"), equalTo(price));
            //   }

            const response = await get(teachersRef);
            console.log("Response:", response);
            console.log("Чи існує відповідь:", response.exists());
            console.log("Дані відповіді:", response.val());
            if (response.exists()) {
                let data = Object.values(response.val());
                console.log("🚀 ~ async ~ data:", data)

                // Фільтрування даних на клієнті
                if (language) {
                  data = data.filter((teacher) => teacher.languages?.includes(language));
                }
                if (level) {
                    data = data.filter((teacher) => teacher.levels?.includes(level));
                }
                if (price) {
                    data = data.filter((teacher) => teacher.price_per_hour === price);
                }
                console.log("🚀 ~ async ~ level:", level)
                console.log("🚀 ~ async ~ language:", language)
                    console.log("Фільтр по ціні:", price);
                    console.log("Дані до фільтрування:", data);
                return data;
              } else {
                console.log("Дані не знайдені.");
                return [];
              }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)