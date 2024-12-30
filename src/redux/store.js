import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { authReduser } from "./auth/slice";
import { teacherReduser } from "./teachers/slice";
import storage from "redux-persist/lib/storage"
import { favoritesReduser } from "./favorites/slice";

const persistFavoritesReducer = persistReducer(
    {
      key: "favorites",
      storage,
      whitelist: ["items"],
    },
    favoritesReduser
  );
  const persistTeacherReducer = persistReducer(
    {
      key: "teachers",
      storage,
      whitelist: ["visibleCount"], // Зберігаємо тільки visibleCount
    },
    teacherReduser
  );


const persisteAuthReducer = persistReducer({
    key: "auth-token",
    storage,
    whitelist: ["token",  "user", "isLoggedIn"],
},
authReduser
)

export const store = configureStore({
    reducer: {
        auth:  persisteAuthReducer,
        teacher: persistTeacherReducer,
        favorites: persistFavoritesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredPaths: ["favorites"],
            },
    }),
})

export const persistor = persistStore(store);