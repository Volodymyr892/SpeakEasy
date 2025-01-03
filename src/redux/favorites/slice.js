import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState:{ items: [] },
  reducers: {
    addToFavorites(state, action) {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorites(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearFavorites(state) {
      state.items = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites} = favoritesSlice.actions;
export const favoritesReduser = favoritesSlice.reducer;