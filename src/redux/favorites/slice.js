import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesFromLocalStorage = () => {
  const savedFavorites = localStorage.getItem('favorites');
  return savedFavorites ? JSON.parse(savedFavorites) : []; // Якщо дані є, завантажуємо їх, якщо ні - порожній масив
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFavoritesFromLocalStorage(),
  reducers: {
    addToFavorites(state, action) {
      if (!state.some((item) => item.id === action.payload.id)) {
        state.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
    removeFromFavorites(state, action) {
      const updatedFavorites = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Збереження після видалення
      return updatedFavorites; 
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReduser = favoritesSlice.reducer;