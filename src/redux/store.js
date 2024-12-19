import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
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
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }),
})

export const persistor = persistStore(store);