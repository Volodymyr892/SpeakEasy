import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { authReduser } from "./auth/slice";
import storage from "redux-persist/lib/storage"


const persisteAuthReducer = persistReducer({
    key: "auth-token",
    storage,
    whitelist: ["token"],
},
authReduser
)

export const store = configureStore({
    reducer: {
        auth:  persisteAuthReducer,
    }
})

export const persistor = persistStore(store);